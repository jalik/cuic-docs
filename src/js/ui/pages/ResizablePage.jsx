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

import Cuic from "cuic";
import React from "react";
import Resizable from "cuic/dist/ui/resizable";

class ResizablePage extends React.Component {

    componentDidMount() {
        const section = Cuic.element('#ui-resizable');
        const sandbox = section.find('.sandbox').eq(0);
        const blueprint = sandbox.find('.blueprint').eq(0);
        const debugCheckbox = sandbox.find("[name=\'debug\']").first();
        const widthField = sandbox.find('[name="width"]').eq(0);
        const heightField = sandbox.find('[name="height"]').eq(0);
        const hRatioField = sandbox.find('[name="hratio"]').eq(0);
        const vRatioField = sandbox.find('[name="vratio"]').eq(0);
        const horizontallyCheckbox = sandbox.find('[name="horizontally"]').eq(0);
        const verticallyCheckbox = sandbox.find('[name="vertically"]').eq(0);

        window.resizables = [];

        // Make each test box selectable
        blueprint.find('.test-box', blueprint).each((box) => {

            const resizable = new Resizable({
                // debug: true,
                element: box,
                keepRatio: false,
                horizontally: horizontallyCheckbox.node().checked,
                vertically: verticallyCheckbox.node().checked
            });

            resizable.onResize((ev) => {
                widthField.val(resizable.width());
                heightField.val(resizable.height());
                hRatioField.val(Math.round(resizable.width() / resizable.height() * 100) / 100);
                vRatioField.val(Math.round(resizable.height() / resizable.width() * 100) / 100);
            });

            // Expose component
            resizables.push(resizable);
        });

        // Toggle debug mode
        debugCheckbox.on("click", (ev) => {
            resizables.forEach((resizable) => {
                resizable.options.debug = ev.currentTarget.checked === true;
            });
        });

        horizontallyCheckbox.on("change", (ev) => {
            resizables.forEach((resizable) => {
                resizable.options.horizontally = ev.currentTarget.checked === true;
            });
        });

        verticallyCheckbox.on("change", (ev) => {
            resizables.forEach((resizable) => {
                resizable.options.vertically = ev.currentTarget.checked === true;
            });
        });
    }

    render() {
        return (
            <section id="ui-resizable">
                <h2>Cuic.Resizable</h2>

                <div className="sandbox">
                    <div className="row">
                        <form className="col-md-2 settings">
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
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input"
                                               type="checkbox"
                                               name="horizontally"
                                               defaultChecked/>
                                        <span>horizontally</span>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input"
                                               type="checkbox"
                                               name="vertically"
                                               defaultChecked/>
                                        <span>vertically</span>
                                    </label>
                                </div>
                            </div>

                            <h4>Info</h4>
                            <div>
                                <div className="form-group">
                                    <label>width</label>
                                    <div className="input-group">
                                        <input className="form-control" name="width" readOnly/>
                                        <div className="input-group-append">
                                            <span className="input-group-text">px</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>height</label>
                                    <div className="input-group">
                                        <input className="form-control" name="height" readOnly/>
                                        <div className="input-group-append">
                                            <span className="input-group-text">px</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>vertical ratio</label>
                                    <input className="form-control" name="vratio" readOnly/>
                                </div>
                                <div className="form-group">
                                    <label>horizontal ratio</label>
                                    <input className="form-control" name="hratio" readOnly/>
                                </div>
                            </div>
                        </form>
                        <div className="col-md-10">
                            <div className="blueprint">
                                <div className="test-box test-box-a" style={{position: "relative"}}>Relative</div>
                                <div className="test-box test-box-b" style={{position: "absolute", left: "50%"}}>
                                    Absolute
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ResizablePage;
