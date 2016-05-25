fallback.load({
    // Include your stylesheets, this can be an array of stylesheets or a string!
    page_css: 'index.css',
    global_css: ['screen.css'],

    // JavaScript library. THE KEY MUST BE THE LIBRARIES WINDOW VARIABLE!
    //JSON: '//cdnjs.cloudflare.com/ajax/libs/json2/20121008/json2.min.js',

    // Here goes a failover example. The first will fail, therefore Fallback JS will load the second!
    jQuery: [
        '//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.FAIL_ON_PURPOSE.min.js',
        '//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js',
        '//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.0/jquery.min.js'
    ],

    'jQuery.ui': [
        '//ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js',
        '//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js',
        '//js/loader.js?i=vendor/jquery-ui.min.js'
    ]
}, {
    // Shim jQuery UI so that it will only load after jQuery has completed!
    shim: {
        'jQuery.ui': ['jQuery']
    },

    callback: function (success, failed) {
        // success - object containing all libraries that loaded successfully.
        // failed - object containing all libraries that failed to load.

        // All of my libraries have finished loading!

        // Execute my code that applies to all of my libraries here!
    }
});