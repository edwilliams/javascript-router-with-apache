// ========================================
// FUNCTIONS
// ========================================

// return URL in parts in array
function URL( index ) {

    var path;
    index = index || 1;
    path = window.location.pathname.split('/');

    // change '/' to '/home'
    path[index] = ( path[index] == '' ) ? 'home' : path[index];

    return path[index];

}