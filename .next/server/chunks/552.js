exports.id = 552;
exports.ids = [552];
exports.modules = {

/***/ 5631:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__Z8PUO",
	"wrapper": "Header_wrapper__KxwYn",
	"search": "Header_search__esM9R"
};


/***/ }),

/***/ 6488:
/***/ ((module) => {

// Exports
module.exports = {
	"input": "Input_input__lvORT",
	"label": "Input_label__CWIqo"
};


/***/ }),

/***/ 4066:
/***/ ((module) => {

// Exports
module.exports = {
	"box": "Preloader_box__DtFBk",
	"container": "Preloader_container__KO_eF",
	"circle": "Preloader_circle__9MlRm",
	"move": "Preloader_move__3nTGF",
	"grow": "Preloader_grow__TTPxG"
};


/***/ }),

/***/ 6528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Header/Header.module.scss
var Header_module = __webpack_require__(5631);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./components/Input/Input.module.scss
var Input_module = __webpack_require__(6488);
var Input_module_default = /*#__PURE__*/__webpack_require__.n(Input_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./hooks/context.ts
var context = __webpack_require__(3762);
;// CONCATENATED MODULE: ./components/Input/Input.tsx




const Input = ()=>{
    const { onSearch , inputRef  } = (0,external_react_.useContext)(context/* Context */._);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: (Input_module_default()).input,
                id: "search",
                type: "text",
                placeholder: "I'm searching (◕‿◕)",
                onKeyPress: onSearch,
                ref: inputRef
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: (Input_module_default()).label,
                htmlFor: "search",
                children: "Press 'Enter' to search"
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Header/Header.tsx




const Header = ({ type , showResetBtn , onResetSearch  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Header_module_default()).header,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Header_module_default()).wrapper,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "WikiBeer"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Header_module_default()).search,
                    children: [
                        showResetBtn && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>onResetSearch && onResetSearch(),
                            children: "Reset search"
                        }),
                        type === "list" ? /*#__PURE__*/ jsx_runtime_.jsx(Input, {}) : /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: "And you have good taste, Bro \uD83D\uDE0E"
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 1738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ Preloader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Preloader_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4066);
/* harmony import */ var _Preloader_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Preloader_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const Preloader = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Preloader_module_scss__WEBPACK_IMPORTED_MODULE_1___default().box),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_Preloader_module_scss__WEBPACK_IMPORTED_MODULE_1___default().container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_Preloader_module_scss__WEBPACK_IMPORTED_MODULE_1___default().circle)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_Preloader_module_scss__WEBPACK_IMPORTED_MODULE_1___default().circle)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_Preloader_module_scss__WEBPACK_IMPORTED_MODULE_1___default().circle)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_Preloader_module_scss__WEBPACK_IMPORTED_MODULE_1___default().circle)
                })
            ]
        })
    });
};


/***/ }),

/***/ 8773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h9": () => (/* binding */ getFoundBeer),
/* harmony export */   "tu": () => (/* binding */ getBeers),
/* harmony export */   "uh": () => (/* binding */ getOneBeer)
/* harmony export */ });
/* unused harmony export axios */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "https://api.punkapi.com/v2/beers/",
    headers: {
        "Access-Control-Allow-Origin": true
    }
});
const getBeers = async (currentPage)=>{
    return await axios.get(`?page=${currentPage}&per_page=16`, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    });
};
const getFoundBeer = async (search)=>{
    return await axios.get(`?beer_name=${search}`, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    });
};
const getOneBeer = async (id)=>{
    return await axios.get(`${id}`, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    });
};


/***/ }),

/***/ 3762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Context = react__WEBPACK_IMPORTED_MODULE_0___default().createContext([]);


/***/ })

};
;