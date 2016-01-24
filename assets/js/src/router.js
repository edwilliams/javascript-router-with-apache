// ========================================
// ROUTER
// ========================================

var startApp = (function() {

    var page = 'error';

    for (let x in VIEWS) {
        if ( URL() == x ) { page = x; }
    }

    VIEWS[page]();

})();