/* © Andy Bell - https://buildexcellentwebsit.es/ */

import plugin from 'tailwindcss/plugin';
import postcss from 'postcss';
import postcssJs from 'postcss-js';

import clampGenerator from './src/assets/css-utils/clamp-generator.js';
import tokensToTailwind from './src/assets/css-utils/tokens-to-tailwind.js';

// Raw design tokens
import colorTokens from './src/assets/design-tokens/colors.json';
import fontTokens from './src/assets/design-tokens/fonts.json';
import spacingTokens from './src/assets/design-tokens/spacing.json';
import textSizeTokens from './src/assets/design-tokens/text-sizes.json';

// Process design tokens
const colors = tokensToTailwind(colorTokens.items);
const fontFamily = tokensToTailwind(fontTokens.items);
const fontSize = tokensToTailwind(clampGenerator(textSizeTokens.items));
const spacing = tokensToTailwind(clampGenerator(spacingTokens.items));

export default {
  content: ['./src/**/*.{html,js,md,njk,liquid,twig,webc}'],
  presets: [],
  theme: {
    screens: {
      md: '50em',
      lg: '80em'
    },
    colors,
    spacing,
    fontSize,
    fontFamily,
    fontWeight: {
      normal: 400,
      bold: 700,
      black: 800
    },
    backgroundColor: ({ theme }) => theme('colors'),
    textColor: ({ theme }) => theme('colors'),
    margin: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing')
    }),
    padding: ({ theme }) => theme('spacing')
  },
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'empty',
    'read-only',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'disabled'
  ],

  // Disables Tailwind's reset etc
  corePlugins: {
    preflight: false
  },
  plugins: [
    // Generates custom property values from tailwind config
    plugin(function ({ addComponents, config }) {
      let result = '';

      const currentConfig = config();

      const groups = [
        { key: 'colors', prefix: 'color' },
        { key: 'spacing', prefix: 'space' },
        { key: 'fontSize', prefix: 'size' },
        { key: 'fontFamily', prefix: 'font' }
      ];

      groups.forEach(({ key, prefix }) => {
        const group = currentConfig.theme[key];

        if (!group) {
          return;
        }

        Object.keys(group).forEach(key => {
          result += `--${prefix}-${key}: ${group[key]};`;
        });
      });

      addComponents({
        ':root': postcssJs.objectify(postcss.parse(result))
      });
    }),

    // Generates custom utility classes
    plugin(function ({ addUtilities, config }) {
      const currentConfig = config();
      const customUtilities = [
        { key: 'spacing', prefix: 'flow-space', property: '--flow-space' },
        { key: 'colors', prefix: 'spot-color', property: '--spot-color' }
      ];

      customUtilities.forEach(({ key, prefix, property }) => {
        const group = currentConfig.theme[key];

        if (!group) {
          return;
        }

        Object.keys(group).forEach(key => {
          addUtilities({
            [`.${prefix}-${key}`]: postcssJs.objectify(
              postcss.parse(`${property}: ${group[key]}`)
            )
          });
        });
      });
    })
  ]
};
