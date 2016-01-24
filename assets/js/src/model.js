// ========================================
// MODEL
// ========================================

var Model = (function() {

    function getJSON(callback) {

        fetch('http://dev.js-router.com/assets/js/src/users.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                callback( json );
            });

    }

    function getUsers(name, callback) {

        var x;

        getJSON(function(json) {

            json.data.forEach(function( val, key ) {
                if ( name == val.profile.name ) {
                    x = val;
                }
            });
            callback(x);

        });

    }

    return {
        getUsers : getUsers
    }

})();