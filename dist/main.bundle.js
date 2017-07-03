webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <md-toolbar color=\"primary\">\n      <span (click)=\"returnHome()\"> Attendance Tracker </span>\n  </md-toolbar>\n</div>\n<md-progress-bar mode=\"indeterminate\" *ngIf=\"loadingService.isLoading\"></md-progress-bar>\n<div style=\"margin: 20px;\" *ngIf=\"isHome()\">\n  <md-grid-list cols=\"2\">\n    <md-grid-tile>\n      <button md-raised-button (click)=\"studentClick()\" routerLink=\"/student\">Student</button>\n    </md-grid-tile>\n    <md-grid-tile>\n      <button md-raised-button routerLink=\"/teacher\">Teacher</button>\n    </md-grid-tile>\n  </md-grid-list>\n</div>\n<div style=\"height: 90%;\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_service__ = __webpack_require__("./src/app/loading.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(loadingService, router) {
        this.loadingService = loadingService;
        this.router = router;
        this.title = 'Student Attendance';
    }
    ;
    AppComponent.prototype.studentClick = function () {
        this.isStudent = !this.isStudent;
    };
    AppComponent.prototype.isHome = function () {
        return this.router.url === '/';
    };
    AppComponent.prototype.returnHome = function () {
        this.router.navigate(['/']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__loading_service__["a" /* LoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__loading_service__["a" /* LoadingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__custom_material_module_custom_material_module_module__ = __webpack_require__("./src/app/custom-material-module/custom-material-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__attendance_attendance_component__ = __webpack_require__("./src/app/attendance/attendance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__teacher_teacher_component__ = __webpack_require__("./src/app/teacher/teacher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__confirmation_confirmation_component__ = __webpack_require__("./src/app/confirmation/confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__student_student_component__ = __webpack_require__("./src/app/student/student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__student_service__ = __webpack_require__("./src/app/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__attendance_service__ = __webpack_require__("./src/app/attendance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__section_section_component__ = __webpack_require__("./src/app/section/section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__teacher_dialog_teacher_dialog_component__ = __webpack_require__("./src/app/teacher-dialog/teacher-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__teacher_service__ = __webpack_require__("./src/app/teacher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__loading_service__ = __webpack_require__("./src/app/loading.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: 'student', component: __WEBPACK_IMPORTED_MODULE_13__student_student_component__["a" /* StudentComponent */],
        children: [
            { path: '', redirectTo: 'section', pathMatch: 'full' },
            { path: 'attendance', component: __WEBPACK_IMPORTED_MODULE_9__attendance_attendance_component__["a" /* AttendanceComponent */] },
            { path: 'confirmation', component: __WEBPACK_IMPORTED_MODULE_12__confirmation_confirmation_component__["a" /* ConfirmationComponent */] },
            { path: 'section', component: __WEBPACK_IMPORTED_MODULE_16__section_section_component__["a" /* SectionComponent */] },
        ] },
    { path: 'teacher', component: __WEBPACK_IMPORTED_MODULE_10__teacher_teacher_component__["a" /* TeacherComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__attendance_attendance_component__["a" /* AttendanceComponent */],
            __WEBPACK_IMPORTED_MODULE_10__teacher_teacher_component__["a" /* TeacherComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__confirmation_confirmation_component__["a" /* ConfirmationComponent */],
            __WEBPACK_IMPORTED_MODULE_13__student_student_component__["a" /* StudentComponent */],
            __WEBPACK_IMPORTED_MODULE_16__section_section_component__["a" /* SectionComponent */],
            __WEBPACK_IMPORTED_MODULE_17__teacher_dialog_teacher_dialog_component__["a" /* TeacherDialogComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__custom_material_module_custom_material_module_module__["a" /* CustomMaterialModuleModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__student_service__["a" /* StudentService */], __WEBPACK_IMPORTED_MODULE_15__attendance_service__["a" /* AttendanceService */], __WEBPACK_IMPORTED_MODULE_18__teacher_service__["a" /* TeacherService */], __WEBPACK_IMPORTED_MODULE_19__loading_service__["a" /* LoadingService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_17__teacher_dialog_teacher_dialog_component__["a" /* TeacherDialogComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/attendance.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendanceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AttendanceService = (function () {
    function AttendanceService(http) {
        this.http = http;
        this.restUrl = 'https://attend-rest.herokuapp.com';
    }
    AttendanceService.prototype.getKey = function () {
        return this.http
            .get(this.restUrl + '/key')
            .map(function (response) { return response.json(); });
    };
    AttendanceService.prototype.setKey = function (key, section) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.restUrl + '/key', { key: key, password: 'root', worksheet: Number(section) }, options)
            .map(function (response) { return response.json().data; });
    };
    AttendanceService.prototype.submitAttendance = function (key, studentId, sectionId, lat, long) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.restUrl + '/submit', {
            key: key,
            student_id: '' + studentId + '',
            worksheet: sectionId,
            lat: lat,
            long: long
        }, options).map(function (response) { return response.json(); });
    };
    return AttendanceService;
}());
AttendanceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], AttendanceService);

var _a;
//# sourceMappingURL=attendance.service.js.map

/***/ }),

/***/ "./src/app/attendance/attendance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/attendance/attendance.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-around center\" style=\"height: 90%;\">\n  <form [formGroup]=\"form\">\n    <p>\n      <md-input-container>\n        <input mdInput placeholder=\"Student ID\" formControlName=\"studentId\" type=\"number\">\n        <md-error class=\"text-danger\">\n          Student Id must be 9 digits long\n        </md-error>\n      </md-input-container>\n    </p>\n    <p>\n      <md-input-container>\n        <input mdInput placeholder=\"Daily Key\" formControlName=\"passKey\" autocomplete=\"off\">\n        <md-error class=\"text-danger\">\n          PassKey required\n        </md-error>\n      </md-input-container>\n    </p>\n    <div>\n      <button type=\"button\" md-raised-button (click)=\"resetForm()\">Reset</button>\n      <button md-raised-button type=\"button\" (click)=\"submitForm()\" [disabled]=\"!form.valid\">Submit</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/attendance/attendance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_service__ = __webpack_require__("./src/app/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__attendance_service__ = __webpack_require__("./src/app/attendance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__("./src/app/loading.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendanceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AttendanceComponent = (function () {
    function AttendanceComponent(_router, _studentService, _attendanceService, _loadingSerice) {
        this._router = _router;
        this._studentService = _studentService;
        this._attendanceService = _attendanceService;
        this._loadingSerice = _loadingSerice;
    }
    AttendanceComponent.prototype.ngOnInit = function () {
        this.initializeForm();
    };
    AttendanceComponent.prototype.submitForm = function () {
        var _this = this;
        console.log(this.form.value);
        this._loadingSerice.isLoading = true;
        this._studentService.studentId = this.form.value.studentId;
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.latitude = position.coords.latitude.toFixed(2);
            _this.longitude = position.coords.longitude.toFixed(2);
            _this._studentService.allowLocation = true;
            _this.sendFormToServer();
        }, function (error) {
            // This occurs when the user prevents the application from accessing the geolocation service
            _this.latitude = 91.00; // +1 greater than the maximum possible latitude
            _this.longitude = 181.00; // +1 greater than the maximum possible longitude
            _this.sendFormToServer();
        });
    };
    AttendanceComponent.prototype.resetForm = function () {
        this.form.reset();
    };
    AttendanceComponent.prototype.initializeForm = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormGroup */]({
            studentId: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(9)),
            passKey: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
        });
    };
    AttendanceComponent.prototype.sendFormToServer = function () {
        var _this = this;
        this._attendanceService.submitAttendance(this.form.controls['passKey'].value, this.form.controls['studentId'].value, this._studentService.section, Number(this.latitude), Number(this.longitude)).subscribe(function (response) {
            _this._studentService.name = String(response.name);
            _this._studentService.success = _this.isSuccess(response.result);
            _this._studentService.studentId = _this.form.controls['studentId'].value;
            _this._studentService.message = response.result;
            _this._loadingSerice.isLoading = false;
            _this._router.navigate(['student/confirmation']);
        });
    };
    AttendanceComponent.prototype.isSuccess = function (response) {
        return response.toLowerCase() === 'success';
    };
    return AttendanceComponent;
}());
AttendanceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-attendance',
        template: __webpack_require__("./src/app/attendance/attendance.component.html"),
        styles: [__webpack_require__("./src/app/attendance/attendance.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__student_service__["a" /* StudentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__attendance_service__["a" /* AttendanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__attendance_service__["a" /* AttendanceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */]) === "function" && _d || Object])
], AttendanceComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=attendance.component.js.map

/***/ }),

/***/ "./src/app/confirmation/confirmation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/confirmation/confirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"height: 90%;\">\n  <div *ngIf=\"!allowLocation\" style=\"width: 500px; margin-bottom: 15px;\">\n    <p style=\"color: red;\">\n    Location is disabled on your device, which will effect your attendance. Please contact the professor to make sure you are marked properly.\n    </p>\n  </div>\n\n  <div *ngIf=\"success\">\n    Thank you {{studentName}} ({{studentId}}) for attending class :D.\n  </div>\n\n  <div *ngIf=\"!success\">\n    {{userFeedback()}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/confirmation/confirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__student_service__ = __webpack_require__("./src/app/student.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationComponent = (function () {
    function ConfirmationComponent(_studentService) {
        this._studentService = _studentService;
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
        this.studentId = this._studentService.studentId;
        this.studentName = this._studentService.name;
        this.success = this._studentService.success;
        this.message = this._studentService.message;
        this.allowLocation = this._studentService.allowLocation;
    };
    ConfirmationComponent.prototype.userFeedback = function () {
        if (this.message === 'Invalid Key') {
            return 'The key you submitted is invalid, please try again or contact your professor.';
        }
        else if (this.message === 'Already Sumbitted') {
            return 'You have already checked in. If you believe this is incorrect, please contact your professor.';
        }
        else if (this.message === 'Invalid Student Id') {
            return 'The Student ID you provided was not found. Please try again or contract your professor.';
        }
        else {
            return 'There was an error with your submission, please try again or contact your professor.';
        }
    };
    return ConfirmationComponent;
}());
ConfirmationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-confirmation',
        template: __webpack_require__("./src/app/confirmation/confirmation.component.html"),
        styles: [__webpack_require__("./src/app/confirmation/confirmation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__student_service__["a" /* StudentService */]) === "function" && _a || Object])
], ConfirmationComponent);

var _a;
//# sourceMappingURL=confirmation.component.js.map

/***/ }),

/***/ "./src/app/custom-material-module/custom-material-module.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomMaterialModuleModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CustomMaterialModuleModule = (function () {
    function CustomMaterialModuleModule() {
    }
    return CustomMaterialModuleModule;
}());
CustomMaterialModuleModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdSelectModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdSelectModule */]
        ]
    })
], CustomMaterialModuleModule);

//# sourceMappingURL=custom-material-module.module.js.map

/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/loading.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingService = (function () {
    function LoadingService() {
        this.isLoading = false;
    }
    return LoadingService;
}());
LoadingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LoadingService);

//# sourceMappingURL=loading.service.js.map

/***/ }),

/***/ "./src/app/section/section.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/section/section.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"height: 90%;\">\n  <button md-raised-button (click)=\"selectSection(1)\">CSC 131 - 1</button>\n  <button md-raised-button (click)=\"selectSection(2)\" style=\"margin-top: 15px;\">CSC 131 - 2</button>\n</div>\n"

/***/ }),

/***/ "./src/app/section/section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_service__ = __webpack_require__("./src/app/student.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SectionComponent = (function () {
    function SectionComponent(studentService, router) {
        this.studentService = studentService;
        this.router = router;
    }
    SectionComponent.prototype.ngOnInit = function () {
    };
    SectionComponent.prototype.selectSection = function (sectionId) {
        this.studentService.section = sectionId;
        this.router.navigate(['/student/attendance']);
    };
    return SectionComponent;
}());
SectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-section',
        template: __webpack_require__("./src/app/section/section.component.html"),
        styles: [__webpack_require__("./src/app/section/section.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__student_service__["a" /* StudentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SectionComponent);

var _a, _b;
//# sourceMappingURL=section.component.js.map

/***/ }),

/***/ "./src/app/student.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentService = (function () {
    function StudentService() {
        this.success = false;
        this.allowLocation = false;
        this.studentId = 999999999;
        this.section = 0;
        this.name = 'temp';
    }
    return StudentService;
}());
StudentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StudentService);

//# sourceMappingURL=student.service.js.map

/***/ }),

/***/ "./src/app/student/student.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/student/student.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentComponent = (function () {
    function StudentComponent() {
    }
    StudentComponent.prototype.ngOnInit = function () {
    };
    return StudentComponent;
}());
StudentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-student',
        template: __webpack_require__("./src/app/student/student.component.html"),
        styles: [__webpack_require__("./src/app/student/student.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StudentComponent);

//# sourceMappingURL=student.component.js.map

/***/ }),

/***/ "./src/app/teacher-dialog/teacher-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/teacher-dialog/teacher-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2> Current Active Key</h2>\n<div *ngFor=\"let item of keyList\">\n  <div *ngIf=\"item[1]\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n    <div fxFlex=\"40%\"><b>{{item[0]}}</b></div>\n    <div fxFlex=\"40%\"><h2>{{item[1]}}</h2></div>\n  </div>\n</div>\n<div *ngIf=\"!activeKeys()\">\n  <div><b>Currently there are no active keys</b></div>\n</div>\n"

/***/ }),

/***/ "./src/app/teacher-dialog/teacher-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attendance_service__ = __webpack_require__("./src/app/attendance.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeacherDialogComponent = (function () {
    function TeacherDialogComponent(dialogRef, attendanceService) {
        this.dialogRef = dialogRef;
        this.attendanceService = attendanceService;
        this.keyList = [];
    }
    TeacherDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        var keyResponse = this.attendanceService.getKey().subscribe(function (res) {
            for (var section in res) {
                if (res.hasOwnProperty(section)) {
                    _this.keyList.push([_this.determineSection(section), res[section]]);
                }
            }
        });
    };
    TeacherDialogComponent.prototype.activeKeys = function () {
        var active = false;
        for (var _i = 0, _a = this.keyList; _i < _a.length; _i++) {
            var section = _a[_i];
            if (section[1]) {
                active = true;
            }
        }
        return active;
    };
    TeacherDialogComponent.prototype.determineSection = function (input) {
        if (input === 'key1') {
            return 'CSC131 - 1';
        }
        if (input === 'key2') {
            return 'CSC131 - 2';
        }
        return 'CSC 131';
    };
    return TeacherDialogComponent;
}());
TeacherDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-teacher-dialog',
        template: __webpack_require__("./src/app/teacher-dialog/teacher-dialog.component.html"),
        styles: [__webpack_require__("./src/app/teacher-dialog/teacher-dialog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__attendance_service__["a" /* AttendanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__attendance_service__["a" /* AttendanceService */]) === "function" && _b || Object])
], TeacherDialogComponent);

var _a, _b;
//# sourceMappingURL=teacher-dialog.component.js.map

/***/ }),

/***/ "./src/app/teacher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeacherService = (function () {
    function TeacherService() {
    }
    return TeacherService;
}());
TeacherService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TeacherService);

//# sourceMappingURL=teacher.service.js.map

/***/ }),

/***/ "./src/app/teacher/teacher.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/teacher/teacher.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"height: 90%;\">\n  <div *ngIf=\"!validTeacher\">\n    <md-input-container>\n    <input mdInput placeholder=\"Teacher Password\" [(ngModel)]=\"password\" type=\"password\">\n    </md-input-container>\n    <button md-raised-button (click)=\"checkTeacher()\">Login</button>\n  </div>\n\n  <div *ngIf=\"validTeacher\">\n    <h4> Please submit a form key </h4>\n    <form [formGroup]=\"form\">\n      <p>\n        <md-input-container>\n          <input mdInput placeholder=\"Daily Key\" formControlName=\"passKey\" autocomplete=\"off\">\n          <md-error class=\"text-danger\">\n            PassKey required\n          </md-error>\n        </md-input-container>\n      </p>\n      <p>\n        <md-select placeholder=\"CSC 131\" formControlName=\"sectionNumber\" name=\"food\">\n          <md-option *ngFor=\"let section of sections\" [value]=\"section\">\n            Section {{section}}\n          </md-option>\n        </md-select>\n      </p>\n      <div>\n        <button type=\"button\" md-raised-button (click)=\"randomKey()\">Random</button>\n        <button type=\"button\" md-raised-button (click)=\"resetForm()\">Reset</button>\n        <button md-raised-button (click)=\"submitForm()\" [disabled]=\"!form.valid\">Submit</button>\n      </div>\n    </form>\n    <div style=\"margin-top: 25px;\">\n      <button md-raised-button (click)=\"getCurrentKey()\">Get Current Key</button>\n      <div *ngIf=\"key !== null\">{{key}}</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/teacher/teacher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__attendance_service__ = __webpack_require__("./src/app/attendance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teacher_dialog_teacher_dialog_component__ = __webpack_require__("./src/app/teacher-dialog/teacher-dialog.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeacherComponent = (function () {
    function TeacherComponent(attendanceService, dialog) {
        this.attendanceService = attendanceService;
        this.dialog = dialog;
        this.sections = [1, 2];
    }
    ;
    TeacherComponent.prototype.ngOnInit = function () {
        this.initializeForm();
    };
    TeacherComponent.prototype.getCurrentKey = function () {
        var _this = this;
        this.attendanceService.getKey().subscribe(function (term) {
            console.log(term);
            _this.key = term['key'];
        });
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__teacher_dialog_teacher_dialog_component__["a" /* TeacherDialogComponent */]);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('closed');
        });
    };
    TeacherComponent.prototype.submitForm = function () {
        console.log(this.form.value);
        this.key = this.form.controls['passKey'].value;
        this.section = this.form.controls['sectionNumber'].value;
        this.attendanceService.setKey(this.key, this.section).subscribe(function (response) {
            console.log(response);
        });
    };
    TeacherComponent.prototype.resetForm = function () {
        this.form.reset();
    };
    TeacherComponent.prototype.initializeForm = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormGroup */]({
            passKey: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            sectionNumber: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
        });
    };
    TeacherComponent.prototype.randomKey = function () {
        // Generate a random key of length 5
        var random = Math.random().toString(36).substring(2, 7);
        this.form.controls['passKey'].setValue(random);
    };
    TeacherComponent.prototype.checkTeacher = function () {
        if (this.password === 'root') {
            this.validTeacher = true;
        }
    };
    return TeacherComponent;
}());
TeacherComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-teacher',
        template: __webpack_require__("./src/app/teacher/teacher.component.html"),
        styles: [__webpack_require__("./src/app/teacher/teacher.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__attendance_service__["a" /* AttendanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__attendance_service__["a" /* AttendanceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdDialog */]) === "function" && _b || Object])
], TeacherComponent);

var _a, _b;
//# sourceMappingURL=teacher.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map