/*global jQuery, _, List */
(function (win, $) {
    'use strict';

    $(function () {
        var modules = customElements;

        var topModules = _.sortBy(modules, function (el) {
            return el.stars;
        }).reverse().splice(0, 3);

        var lastModules = _.sortBy(modules, function (el) {
            return el.created;
        }).reverse().splice(0, 3);

        var allModules = _.sortBy(modules, function (el) {
            el.name = el.name.replace('-custom-element', '');
            el.name = el.name.replace('-element', '');
            el.name = el.name.replace('-web-component', '');
            return el.name;
        });

        var mostPopTpl = _.template($('#most-popular-template').html(), {
            modules: topModules
        });

        var latestTpl = _.template($('#latest-elements-template').html(), {
            modules: lastModules
        });

        var allTpl = _.template($('#all-template').html(), {
            modules: allModules
        });

        $('#loading').remove();
        $('#most-popular').append(mostPopTpl);
        $('#latest-popular').append(latestTpl);
        $('#all').append(allTpl).find('.search').show();

        new List('all', {
            valueNames: [
                'name',
                'desc',
                'stars',
                'forks',
                'author'
            ]
        });
    });
})(window, jQuery);
