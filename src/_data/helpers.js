/** © Andy Bell - https://buildexcellentwebsit.es/ */

export default {
  /**
   * Returns back some attributes based on wether the
   * link is active or a parent of an active item
   *
   * @param {String} itemUrl The link in question
   * @param {String} pageUrl The page context
   * @returns {String} The attributes or empty
   */
  getLinkActiveState(itemUrl, pageUrl) {
    let response = '';

    if (itemUrl === pageUrl) {
      response = ' aria-current="page"';
    }

    if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
      response += ' data-state="active"';
    }

    return response;
  },
  /**
   * Filters out the passed item from the passed collection
   * and randomises and limits them based on flags
   *
   * @param {Array} collection The 11ty collection we want to take from
   * @param {Object} item The item we want to exclude (often current page)
   * @param {Number} limit=3 How many items we want back
   * @param {Boolean} random=true Wether or not this should be randomised
   * @returns {Array} The resulting collection
   */
  getSiblingContent(collection, item, limit = 3, random = true) {
    let filteredItems = collection.filter(x => x.url !== item.url);

    if (random) {
      let counter = filteredItems.length;

      while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        counter--;

        let temp = filteredItems[counter];

        // Swap the last element with the random one
        filteredItems[counter] = filteredItems[index];
        filteredItems[index] = temp;
      }
    }

    // Lastly, trim to length
    if (limit > 0) {
      filteredItems = filteredItems.slice(0, limit);
    }

    return filteredItems;
  },

  /**
   * Picks the posts most worth reading next after `item`: the ones sharing the
   * most tags with it, newest first, topped up with other posts if there
   * aren't enough matches. Deterministic on purpose — a static build that
   * shuffled these would hand crawlers a different set of links every deploy.
   *
   * @param {Array} collection The 11ty collection to choose from
   * @param {String} itemUrl The current page's url, so it excludes itself
   * @param {Array} itemTags The current page's tags
   * @param {Number} limit=3 How many items we want back
   * @returns {Array} The resulting collection
   */
  getRelatedContent(collection, itemUrl, itemTags, limit = 3) {
    const tagsOf = entry =>
      (entry.data && entry.data.tags ? entry.data.tags : []).filter(tag => tag !== 'posts');
    const ownTags = (itemTags || []).filter(tag => tag !== 'posts');

    const candidates = collection
      .filter(x => x.url !== itemUrl)
      .map(x => ({
        entry: x,
        shared: tagsOf(x).filter(tag => ownTags.includes(tag)).length
      }))
      .sort((a, b) => b.shared - a.shared || b.entry.date - a.entry.date);

    const related = candidates.filter(x => x.shared > 0).slice(0, limit);

    // Not enough tag matches to fill the list: top it up with siblings.
    if (related.length < limit) {
      const chosen = related.map(x => x.entry.url);
      for (const candidate of candidates) {
        if (related.length >= limit) break;
        if (!chosen.includes(candidate.entry.url)) {
          related.push(candidate);
          chosen.push(candidate.entry.url);
        }
      }
    }

    return related.map(x => x.entry);
  },

  /**
   * Take an array of keys and return back items that match.
   * Note: items in the collection must have a key attribute in
   * Front Matter
   *
   * @param {Array} collection 11ty collection
   * @param {Array} keys collection of keys
   * @returns {Array} result collection or empty
   */
  filterCollectionByKeys(collection, keys) {
    return collection.filter(x => keys.includes(x.data.key));
  }
};
