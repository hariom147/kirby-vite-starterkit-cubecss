/* global.js */
// imported css files are compiled into a single minified css file by vite (global.css)

// tailwind base classes
import.meta.glob('./tailwind/tailwind-base.css', { eager: true })

// reset browser default styles
import.meta.glob('./global/reset.css', { eager: true });
// fonts
import.meta.glob('./global/fonts.css', { eager: true });

// tailwind components
import.meta.glob('./tailwind/tailwind-components.css', { eager: true })

// cube global variables and styles
import.meta.glob('./global/variables.css', { eager: true });
import.meta.glob('./global/global-styles.css', { eager: true });

// cube composition, block and utility css classes
import.meta.glob('./blocks/*.css', { eager: true });
import.meta.glob('./compositions/*.css', { eager: true });
import.meta.glob('./utilities/*.css', { eager: true });

// tailwind utilities
import.meta.glob('./tailwind/tailwind-utilities.css', { eager: true })

