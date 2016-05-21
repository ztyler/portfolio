System.register(['@angular/core', '@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var templ, NavbarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            templ = "\n<nav class=\"ui borderless menu\">\n    <div class=\"ui container\">\n        <a class=\"item\" *ngFor=\"let link of links_DEBUG\" [routerLink]=\"[link.url]\">\n            <i [class]=\"[link.icon]\"></i> {{link.text}}\n        </a>\n    </div>\n</nav>\n";
            NavbarComponent = (function () {
                function NavbarComponent() {
                    this.pageTitle = 'Navbar Component';
                    this.links_DEBUG = [
                        {
                            "url": "/home",
                            "text": "Home",
                            "icon": "home icon"
                        },
                        {
                            "url": "/connect",
                            "text": "Connect",
                            "icon": "add user icon"
                        },
                        {
                            "url": "/resume",
                            "text": "Resume",
                            "icon": "file text icon"
                        }
                    ];
                }
                NavbarComponent = __decorate([
                    core_1.Component({
                        selector: 'navbar',
                        template: templ,
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NavbarComponent);
                return NavbarComponent;
            }());
            exports_1("NavbarComponent", NavbarComponent);
        }
    }
});
//# sourceMappingURL=navbar.component.js.map