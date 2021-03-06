define(['app'], function (app) {
    'use strict';
    app.register.service('pageFramework',function(){
        var globalData = {
            headerModel: {
                title: "AMD Components of an angular app.",
                stylesheets: [
                    {href: '//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css', type: 'text/css'}
                ]
            },
            nav: {
                links: [
                    {text: 'Home', sref: 'home'},
                    {text: 'About Us', sref: 'about'}
                ]
            },
            footer: {
                Message: "Thanks for visiting!",
                links: [
                    {text: 'Home', sref: 'home'},
                    {text: 'About Us', sref: 'about'}
                ]
            }

        }
        var exports = {
            setPageFramework :function(controllerScope){
                controllerScope.header = globalData.headerModel;
                controllerScope.nav=globalData.nav;
                controllerScope.footer=globalData.footer;
            }
        };
        return exports ;
    });
});
