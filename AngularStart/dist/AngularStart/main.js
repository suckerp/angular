(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: HalloComponent, StringInterpolationComponent, PropertyBindingComponent, EventBindingComponent, Aufgabe01Component, Aufgabe02Component, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HalloComponent", function() { return HalloComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringInterpolationComponent", function() { return StringInterpolationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyBindingComponent", function() { return PropertyBindingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBindingComponent", function() { return EventBindingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aufgabe01Component", function() { return Aufgabe01Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aufgabe02Component", function() { return Aufgabe02Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HalloComponent = /** @class */ (function () {
    function HalloComponent() {
        this.name = "Max";
    }
    HalloComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'Hallo',
            template: "\n  <h1> HALLO {{ name }} </h1>",
            styles: []
        })
    ], HalloComponent);
    return HalloComponent;
}());

var StringInterpolationComponent = /** @class */ (function () {
    function StringInterpolationComponent() {
        var _this = this;
        this.stringVar = "Stringvariable";
        this.convertObject = {
            text: "Daten",
            toString: function () {
                return this.text;
            }
        };
        this.timer = 0;
        setInterval(function () {
            _this.timer++;
        }, 300);
    }
    StringInterpolationComponent.prototype.returnString = function () {
        return "returnString";
    };
    StringInterpolationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'StringInterpolation',
            template: "\n    <h1> TEST </h1>\n    <ul>\n    <li> {{ \"String\"}} </li>\n    <li> {{ \"zusammengesetzer \" + \"String\" }} </li>\n    <li>{{ \"Ternary\" + ((true)?\" Operator\":\"\") }}</li>\n    <li> {{ stringVar }} </li>\n    <li> {{returnString()}} </li>\n    <li> {{convertObject}} </li>\n    <li> {{ timer }}\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], StringInterpolationComponent);
    return StringInterpolationComponent;
}());

var PropertyBindingComponent = /** @class */ (function () {
    function PropertyBindingComponent() {
        var _this = this;
        this.text = "mein Text";
        this.myhtml = "<h3> mein text </h3>";
        this.mycolor = "red";
        this.editierbar = true;
        this.timer = 0;
        setInterval(function () {
            _this.timer++;
        }, 300);
    }
    PropertyBindingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'PropertyBinding',
            template: "\n    <h1> PropertyBinding </h1>\n    <ul>\n      <li [innerText] = \"text\"> </li>\n      <li [innerHTML] = \"myhtml\"> </li>\n      <li [style.background-color] = \"mycolor\"> text </li>\n      <li [contentEditable] = \"editierbar\"> editierbar</li>\n      <li [innerHTML] = \"timer\"> </li>\n      <li> </li>\n    </ul>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], PropertyBindingComponent);
    return PropertyBindingComponent;
}());

var EventBindingComponent = /** @class */ (function () {
    function EventBindingComponent() {
    }
    EventBindingComponent.prototype.onClick = function (e) {
        console.log("Click");
        console.log(e);
    };
    EventBindingComponent.prototype.onChange = function (e) {
        var input = e.target;
        console.log("Change");
        console.log(e);
        console.log(input);
    };
    EventBindingComponent.prototype.onInput = function (e) {
        console.log("Input");
        console.log(e);
    };
    EventBindingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'EventBinding',
            template: "\n    <h1> EventBinding </h1>\n    <ul>\n      <!-- Standard HTML/JS Version -->\n      <li> \n        <button onclick = \"console.log('click')\">click</button>\n      </li>\n      <!-- Angular Event Binding -->\n      <li> \n        <button (click) = \"onClick($event)\">click</button>\n      </li>\n      <li>\n        <!-- $event ist ein festgelegtes Anguler Element, dass die Daten des Elements erh\u00E4lt -->\n        <input \n        (change) = \"onChange($event)\"\n        (input) = \"onInput($event)\"\n        >\n      </li>\n      <li> </li>\n      <li> </li>\n      <li> </li>\n      <li> </li>\n    </ul>\n  ",
            styles: []
        })
    ], EventBindingComponent);
    return EventBindingComponent;
}());

// Kombination aus EventBinding und Propertybinding
var Aufgabe01Component = /** @class */ (function () {
    function Aufgabe01Component() {
    }
    Aufgabe01Component.prototype.onInput = function (e) {
        // das Target des onClicks auslesen
        var input = e.target;
        // this ist der Klassenname, der zum output gehört und value ist der Wert, der übergeben wird
        this.output = input.value;
    };
    Aufgabe01Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'Aufgabe01',
            template: "\n    <h1> Aufgabe01 </h1>\n\n      <!-- \u00DCbergabe des $Events an die Funktion -->\n      <input (input) = \"onInput($event)\"> <br>\n      <!-- im output wird soll dann der Wert aus dem input Feld eingetragen werden -->\n      {{output}}\n  ",
            styles: []
        })
    ], Aufgabe01Component);
    return Aufgabe01Component;
}());

// Kombination aus EventBinding und Propertybinding
var Aufgabe02Component = /** @class */ (function () {
    function Aufgabe02Component() {
        // Es sind alles public Eigenschaften brauchen daher kein const oder let
        // können aus allen Funktionen heraus ausgelesen und geändert werden
        this.zahl1 = 0;
        this.zahl2 = 0;
        this.output = 0;
    }
    Aufgabe02Component.prototype.onInput1 = function (e) {
        // erste Zahl auslesen und mit der zweiten Zahl addieren
        var input = e.target;
        this.zahl1 = Number(input.value);
        this.output = this.zahl1 + this.zahl2;
    };
    Aufgabe02Component.prototype.onInput2 = function (e) {
        // zweite Zahl auslesen und mit der ersten Zahl addieren
        var input = e.target;
        this.zahl2 = Number(input.value);
        this.output = this.zahl1 + this.zahl2;
    };
    Aufgabe02Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'Aufgabe02',
            template: "\n    <h1> Aufgabe02 </h1>\n\n      <!-- \u00DCbergabe des $Events an die Funktion -->\n      <input (input) = \"onInput1($event)\">\n      <input (input) = \"onInput2($event)\"> \n      <br>\n      <!-- im output wird soll dann der Wert aus dem input Feld eingetragen werden -->\n      {{output}}\n  ",
            styles: []
        })
    ], Aufgabe02Component);
    return Aufgabe02Component;
}());

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AngularStart';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "\n    <!-- <Hallo></Hallo> -->\n    <!-- <StringInterpolation></StringInterpolation> -->\n    <!-- <PropertyBinding></PropertyBinding> -->\n    <!-- <EventBinding></EventBinding> -->\n    <!-- <Aufgabe01></Aufgabe01> -->\n    <Aufgabe02></Aufgabe02>\n  ",
            styles: [""]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_2__["HalloComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_2__["StringInterpolationComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_2__["PropertyBindingComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_2__["EventBindingComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_2__["Aufgabe01Component"],
                _app_component__WEBPACK_IMPORTED_MODULE_2__["Aufgabe02Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\STUFF\vscode\angular\AngularStart\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map