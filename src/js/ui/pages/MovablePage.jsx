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
        let section = Cuic.element('#ui-movable');
        let form = section.find('form').eq(0);
        let sandbox = section.find('.sandbox').eq(0);
        let testBoxA = sandbox.find('.test-box-a').eq(0);
        let testBoxB = sandbox.find('.test-box-b').eq(0);
        let x = form.find('[name="x"]').eq(0);
        let y = form.find('[name="y"]').eq(0);
        let state = form.find('[name="state"]').eq(0);
        let horizontally = form.find('[name="horizontally"]').eq(0);
        let vertically = form.find('[name="vertically"]').eq(0);

        window.movable = new Movable({
            element: testBoxA,
            horizontally: horizontally.node().checked,
            vertically: vertically.node().checked
        });

        window.movableB = new Movable({
            element: testBoxB,
            horizontally: horizontally.node().checked,
            vertically: vertically.node().checked
        });

        horizontally.on("change", function (ev) {
            movable.options.horizontally = ev.target.checked;
            movableB.options.horizontally = ev.target.checked;
        });

        vertically.on("change", function (ev) {
            movable.options.vertically = ev.target.checked;
            movableB.options.vertically = ev.target.checked;
        });

        let movables = [movable, movableB];

        for (let i = 0; i < movables.length; i += 1) {
            movables[i].onMove(function (ev) {
                state.val('onMove');
                const position = this.position();
                x.val(position.left);
                y.val(position.top);
//                                Cuic.debug('moving', position);
            });
            movables[i].onMoveStart(function (ev) {
                state.val('onMoveStart');
                const position = this.position();
                x.val(position.left);
                y.val(position.top);
//                                Cuic.debug('move start', ev);
            });
            movables[i].onMoveEnd(function (ev) {
                state.val('onMoveEnd');
                const position = this.position();
                x.val(position.left);
                y.val(position.top);
//                                Cuic.debug('move stop', ev);
            });
        }
    }

    render() {
        return (
            <section id="ui-movable">
                <h2>Cuic.Movable</h2>

                <div className="sandbox">
                    <div className="row">
                        <form className="col-md-2 settings">
                            <h4>Settings</h4>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" name="horizontally" defaultChecked/>
                                    <span>horizontally</span>
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" name="vertically" defaultChecked/>
                                    <span>vertically</span>
                                </label>
                            </div>

                            <h4>Info</h4>
                            <div>
                                <div className="form-group">
                                    <label>X</label>
                                    <div className="input-group">
                                        <input className="form-control" name="x" readOnly/>
                                        <span className="input-group-addon">px</span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Y</label>
                                    <div className="input-group">
                                        <input className="form-control" name="y" readOnly/>
                                        <span className="input-group-addon">px</span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>state</label>
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
