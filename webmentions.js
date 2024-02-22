const { defaults } = require("@chrisburnell/eleventy-cache-webmentions")

module.exports = Object.assign({}, defaults, {
	domain: "https://cybercultural.com/",
	feed: `https://webmention.io/api/mentions.jf2?domain=cybercultural.com&token=kE8ev3PcB79ZlHC-I2hL8A&per-page=9001`,
	key: "children",
})