System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var templ, ResumeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            templ = "\n<div class=\"ui container\">\n    <h2 style=\"margin-top: 15px\" class=\"ui center aligned icon header\">\n        <i class=\"{{pageIcon}}\"></i>\n        {{pageTitle}}\n    </h2>\n    <div class=\"ui raised container segment\"><h1>CONTAINER TEST</h1></div>\n</div>\n";
            ResumeComponent = (function () {
                function ResumeComponent() {
                    this.pageTitle = 'Resume Component';
                    this.pageIcon = 'circular file text icon';
                }
                ResumeComponent = __decorate([
                    core_1.Component({
                        template: templ
                    }), 
                    __metadata('design:paramtypes', [])
                ], ResumeComponent);
                return ResumeComponent;
            }());
            exports_1("ResumeComponent", ResumeComponent);
        }
    }
});
//# sourceMappingURL=resume.component.js.map