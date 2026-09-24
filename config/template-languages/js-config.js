import esbuild from 'esbuild';

export default function (eleventyConfig) {
  eleventyConfig.addTemplateFormats('js');

  eleventyConfig.addExtension('js', {
    outputFileExtension: 'js',
    compile: async (content, path) => {
      // Bundled entry points; any other .js file under src is left alone.
      const entryPoints = ['./src/assets/scripts/app.js', './src/assets/scripts/lite-youtube.js'];
      if (!entryPoints.includes(path)) {
        return;
      }

      return async () => {
        let output = await esbuild.build({
          target: 'es2020',
          entryPoints: [path],
          minify: true,
          bundle: true,
          write: false
        });

        return output.outputFiles[0].text;
      };
    }
  });
}
