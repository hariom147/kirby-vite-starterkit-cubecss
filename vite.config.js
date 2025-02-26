import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'assets/css/app.css',
        'assets/css/templates/about.css',
        'assets/css/templates/album.css',
        'assets/css/templates/home.css',
        'assets/css/templates/note.css',
        'assets/js/app.js',
        'src/css/global.js',
      ],
      refresh: [
        'site/templates/**',
        'site/snippets/**',
      ],
      postcss: {
        plugins: [
          postcssImport(),
          tailwindcss()
        ]
      },
      publicDirectory: './',
    }),
  ],
});
