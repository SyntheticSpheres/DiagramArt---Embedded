var Settings = {
    language: {
        first: "First",
        last: "Last",
        previous: "Previous",
        next: "Next",
        search: "search"
    },
    ajax: null,
    merge: function(source) {
        if( source.language ) {
            for( var key in source.language) {
                this.language[key] = source.language[key];
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
