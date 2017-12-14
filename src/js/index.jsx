/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 Karl STEIN
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import {IntlProvider} from "react-intl";
import "../less/styles.less";
import "../less/responsive-sm.less";
import "cuic/dist/cuic.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "bootstrap/dist/fonts/glyphicons-halflings-regular.eot";
import "bootstrap/dist/fonts/glyphicons-halflings-regular.woff";
import "bootstrap/dist/fonts/glyphicons-halflings-regular.woff2";
import "bootstrap/dist/fonts/glyphicons-halflings-regular.ttf";

// Define user"s language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;

// Split locales with a region code
const currentLanguage = language.toLowerCase().split(/[_-]+/)[0];

ReactDOM.render(
    <IntlProvider locale={currentLanguage} defaultLocale="fr">
        <App/>
    </IntlProvider>,
    document.getElementById("root")
);
