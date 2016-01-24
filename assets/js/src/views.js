// ========================================
// CACHE DOM
// ========================================

var body = document.getElementsByTagName('body')[0];
var html = '';

// ========================================
// PARTIALS
// ========================================

function header() {
    return '<header><h1>header</h1></header>';
}

function footer() {
    return '<footer><p>this is the FOOTER</p></footer>';
}

// ========================================
// VIEWS
// ========================================

var VIEWS = {

    home : function() {

        Model.getUsers('Ed Williams', function(user) {

            html += header();
            html += '<main class="main">';
            html += '    <p>User: ' + user.profile.name + '</p>';
            html += '    <a href="/about">about</a>';
            html += '</main>';
            html += footer();

            body.innerHTML = html;

        });

    },

    about : function() {

        html += header();
        html += '<main class="main">';
        html += '    <p>this is the about page</p>';
        html += '</main>';
        html += footer();

        body.innerHTML = html;

    },

    error : function() {

        html += header();
        html += '<main class="main">';
        html += '    <p>404</p>';
        html += '</main>';
        html += footer();

        body.innerHTML = html;

    }

}

