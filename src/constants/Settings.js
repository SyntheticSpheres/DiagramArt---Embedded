/*
 * Basic "app" settings.
 */
 var Settings = {
    language: {
        first: "First", /* pagination button pointing on first page */
        last: "Last", /* pagination button pointing on last page */
        search: "search" /* menu search placeholder */
    },
    detail: {
        type: "abreast"
    },
    ajax: null,
    merge: function(source) {
        if( source.language ) {
            for( var key in source.language) {
                this.language[key] = source.language[key];
            }
        }
        if( source.detail ) {
            for( var key in source.detail) {
                this.detail[key] = source.detail[key];
            }
        }
        if( source.ajax ) {
            this.ajax = source.ajax;
        } else {
            if( window.$ || window.jQuery ) {
                this.ajax = $;
            } else {
                throw "No AJAX responsible class found!";
            }
        }
    }
};

export default Settings;
