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
import {Popup} from "cuic/dist/ui/popup";

export class PopupPage extends React.Component {
    componentDidMount() {
        let section = Cuic.element("#ui-popup");
        let sandbox = section.find('.sandbox').eq(0);
        let blueprint = sandbox.find('.blueprint').eq(0);
        let anchor = sandbox.find("[name=anchor]").eq(0);
        let anchorPoint = sandbox.find("[name=anchorPoint]").eq(0);

        window.popups = [];

        blueprint.find('button').each(function (el, i) {
            window.popups[i] = new Popup({
                anchor: anchor.val(),
                autoClose: false,
                autoRemove: false,
                closable: true,
                content: "This is a popup",
                target: el
            });

            anchor.on("change", function () {
                window.popups[i].anchor(anchor.val(), anchorPoint.val());
            });
            anchorPoint.on("change", function () {
                window.popups[i].anchor(anchor.val(), anchorPoint.val());
            });
            el.on("click", function () {
                popups[i].setContent("Clicked at <em>" + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "</em>");
                popups[i].toggle();
            });
            el.click();
        });
    }

    render() {
        return (
            <section id="ui-popup">
                <h2>Cuic.Popup</h2>

                <p className="alert alert-info">Popups are often used to display menus, for example, when a user clicks
                    on a button, a popup menu appears next to it.</p>

                <div className="sandbox">
                    <div className="row">
                        <form className="col-md-2 settings">
                            <h4>Settings</h4>
                            <div className="form-group">
                                <label>anchor</label>
                                <select className="form-control" name="anchor" defaultValue="right">
                                    <option>left top</option>
                                    <option>top</option>
                                    <option>right top</option>
                                    <option>right</option>
                                    <option>right bottom</option>
                                    <option>bottom</option>
                                    <option>left bottom</option>
                                    <option>left</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>anchor point</label>
                                <select className="form-control" name="anchorPoint">
                                    <option/>
                                    <option>left top</option>
                                    <option>top</option>
                                    <option>right top</option>
                                    <option>right</option>
                                    <option>right bottom</option>
                                    <option>bottom</option>
                                    <option>left bottom</option>
                                    <option>left</option>
                                </select>
                            </div>
                        </form>
                        <div className="col-md-10">
                            <div className="blueprint">
                                <button className="btn btn-default" type="button"
                                        style={{position: "absolute", left: 0, top: 0}}
                                        data-anchor="bottom right">
                                    <span>Bottom Right</span>
                                </button>
                                <button className="btn btn-default" type="button"
                                        style={{position: "absolute", left: "50%", top: 0, marginLeft: "-50px"}}
                                        data-anchor="bottom center">
                                    <span>Bottom Center</span>
                                </button>
                                <button className="btn btn-default" type="button"
                                        style={{position: "absolute", right: 0, top: 0}}
                                        data-anchor="bottom left">
                                    <span>Bottom Left</span>
                                </button>

                                <button className="btn btn-default" type="button"
                                        style={{position: "absolute", left: 0, top: "50%", marginTop: "-17px"}}
                                        data-anchor="middle right">
                                    <span>Middle Right</span>
                                </button>
                                <button className="btn btn-default" type="button"
                                        style={{position: "absolute", right: 0, top: "50%", marginTop: "-17px"}}
                                        data-anchor="middle left">
                                    <span>Middle Left</span>
                                </button>

                                <button className="btn btn-default" type="button"
                                        style={{position: "absolute", left: 0, bottom: 0}}
                                        data-anchor="top right">
                                    <span>Top Right</span>
                                </button>
                                <button className="btn btn-default" type="button"
                                        style={{position: "absolute", left: "50%", bottom: 0, marginLeft: "-50px"}}
                                        data-anchor="top center">
                                    <span>Top Center</span>
                                </button>
                                <button className="btn btn-default" type="button"
                                        style={{position: "absolute", right: 0, bottom: 0}}
                                        data-anchor="top left">
                                    <span>Top Left</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
