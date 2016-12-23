import path from 'path';

import paths from '../../paths';

/**
 * Returns configuration for copying miscellaneous files that don't need any processing.
 */
export default {
    watch: [
        // Preview images.
        path.join( paths.src, '*.{png,jpg,jpeg}' ),
        // JSON except data for templates.
        path.join( paths.src, '**/*.json' ),
        // PHP files
        path.join( paths.src, '**/*.{php,phtml,html}' ),
        // XML files
        path.join( paths.src, '**/*.xml' ),
        // CSV files
        path.join( paths.src, '**/*.csv' ),
        // Require.js configs.
        path.join( paths.src, '**/requirejs-config.js' ),
    ],

    src: [
        // Preview images.
        path.join( paths.src, '*.{png,jpg,jpeg}' ),
        // JSON.
        path.join( paths.src, '**/*.json' ),
        // PHP files
        path.join( paths.src, '**/*.{php,phtml,html}' ),
        // XML files
        path.join( paths.src, '**/*.xml' ),
        // CSV files
        path.join( paths.src, '**/*.csv' ),
        // Require.js configs.
        path.join( paths.src, '**/requirejs-config.js' ),
    ],
    dest: paths.dist,
};
