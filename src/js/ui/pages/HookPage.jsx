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

import Cuic from "cuic";
import React from "react";

export class HookPage extends React.Component {

    componentDidMount() {
        let section = Cuic.find('#ui-hook').eq(0);
        let sandbox = section.find('.sandbox').eq(0);
        let testBox = sandbox.find('.test-box').eq(0);

        window.hook = new Cuic.Hook({
            element: testBox
        });
    }

    render() {
        return (
            <div id="ui-hook">
                <h2>Cuic.Hook</h2>

                <p className="alert alert-info">Hooks allows you to keep elements visible while scrolling the page.</p>

                <div className="sandbox">
                    <div className="blueprint">
                        <div className="test-box"/>
                    </div>
                </div>
            </div>
        );
    }
}
