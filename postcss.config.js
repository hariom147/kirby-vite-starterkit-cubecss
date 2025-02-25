import postcssImportExtGlob from 'postcss-import-ext-glob';
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';

export default {
  plugins: [
    postcssImportExtGlob(),
    postcssImport(),
    tailwindcss()
  ]
};
