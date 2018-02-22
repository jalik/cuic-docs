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
import {Movable} from "cuic/dist/ui/movable";

export class MovablePage extends React.Component {

    componentDidMount() {
        const section = Cuic.element('#ui-movable');
        const sandbox = section.find('.sandbox').eq(0);
        const blueprint = sandbox.find('.blueprint').eq(0);
        const form = section.find('form').eq(0);
        const debugCheckbox = sandbox.find("[name=\'debug\']").first();
        const xField = form.find('[name="x"]').eq(0);
        const yField = form.find('[name="y"]').eq(0);
        const stateField = form.find('[name="state"]').eq(0);
        const horizontallyCheckbox = form.find('[name="horizontally"]').eq(0);
        const verticallyCheckbox = form.find('[name="vertically"]').eq(0);

        window.movables = [];

        // Make each test box selectable
        blueprint.find('.test-box', blueprint).each((box) => {

            const movable = new Movable({
                element: box,
                horizontally: horizontallyCheckbox.node().checked,
                vertically: verticallyCheckbox.node().checked
            });

            movable.onMove((ev) => {
                stateField.val('onMove');
                const position = movable.position();
                xField.val(position.left);
                yField.val(position.top);
            });

            movable.onMoveStart((ev) => {
                stateField.val('onMoveStart');
                const position = movable.position();
                xField.val(position.left);
                yField.val(position.top);
            });

            movable.onMoveEnd((ev) => {
                stateField.val('onMoveEnd');
                const position = movable.position();
                xField.val(position.left);
                yField.val(position.top);
            });

            // Expose component
            movables.push(movable);
        });

        // Toggle debug mode
        debugCheckbox.on("click", (ev) => {
            movables.forEach((movable) => {
                movable.options.debug = ev.currentTarget.checked === true;
            });
        });

        horizontallyCheckbox.on("change", (ev) => {
            movables.forEach((movable) => {
                movable.options.horizontally = ev.currentTarget.checked === true;
            });
        });

        verticallyCheckbox.on("change", (ev) => {
            movables.forEach((movable) => {
                movable.options.vertically = ev.currentTarget.checked === true;
            });
        });
    }

    render() {
        return (
            <section id="ui-movable">
                <h2>Cuic.Movable</h2>

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
                                    <label>X</label>
                                    <div className="input-group">
                                        <input className="form-control" name="x" readOnly/>
                                        <div className="input-group-append">
                                            <span className="input-group-text">px</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Y</label>
                                    <div className="input-group">
                                        <input className="form-control" name="y" readOnly/>
                                        <div className="input-group-append">
                                            <span className="input-group-text">px</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>event</label>
                                    <input className="form-control" name="state" readOnly/>
                                </div>
                            </div>
                        </form>
                        <div className="col-md-10">
                            <div className="blueprint">
                                <div className="test-box test-box-a" style={{position: "relative"}}>Relative</div>
                                <div className="test-box test-box-b"
                                     style={{position: "absolute", bottom: 0, right: 0}}>
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
