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
import {Selectable} from "cuic/dist/ui/selectable";

export class SelectablePage extends React.Component {

    componentDidMount() {
        const section = Cuic.element('#ui-selectable');
        const sandbox = section.find('.sandbox').eq(0);
        const blueprint = sandbox.find('.blueprint').eq(0);
        const debugCheckbox = sandbox.find("[name=\'debug\']").first();

        window.selectables = [];

        // Make each test box selectable
        blueprint.find('.test-box', blueprint).each((box) => {
            const selectable = new Selectable({
                element: box
            });

            // Expose component
            selectables.push(selectable);
        });

        // Toggle debug mode
        debugCheckbox.on("click", (ev) => {
            selectables.forEach((selectable) => {
                selectable.options.debug = ev.currentTarget.checked === true;
            });
        });
    }

    render() {
        return (
            <section id="ui-selectable">
                <h2>Cuic.Selectable</h2>

                <div className="sandbox">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="settings">
                                <h4>Settings</h4>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input"
                                               type="checkbox"
                                               data-type="boolean"
                                               name="debug"
                                               defaultValue="true"/>
                                        <span>debug</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="blueprint">
                                <div className="test-box test-box-a">A</div>
                                <div className="test-box test-box-b">B</div>
                                <div className="test-box test-box-c">C</div>
                                <div className="test-box test-box-d">D</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
