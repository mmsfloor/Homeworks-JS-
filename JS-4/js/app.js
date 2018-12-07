var App = (function () {
    return {
        init: function () {
            console.log('App');
            NotesController.init();
        }
    }
}());

App.init();