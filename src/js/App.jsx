/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2018 Karl STEIN
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
 */

import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import {SidebarLayout} from "./ui/layouts/SidebarLayout";

export class App extends React.Component {
    componentDidMount() {
        // Cuic.ready(() => {
        //     let resize = function () {
        //         let navbar = Cuic.element('.navbar');
        //         let sidebar = Cuic.find('#sidebar');
        //         let content = Cuic.find('#content');
        //         let maxHeight = Cuic.element(window).height() - navbar.outerHeight(true);
        //         sidebar.css({'max-height': maxHeight});
        //         content.css({'max-height': maxHeight});
        //     };
        //     Cuic.onWindowResized(resize);
        //     resize();
        // });
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" component={SidebarLayout}/>
                </Switch>
            </HashRouter>
        )
    }
}
