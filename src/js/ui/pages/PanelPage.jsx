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
import {Panel} from "cuic/dist/ui/panel";

export class PanelPage extends React.Component {
    componentDidMount() {
        const sandbox = Cuic.element('#ui-panel .sandbox');
        const blueprint = sandbox.find('.blueprint').eq(0);
        const autoClose = sandbox.find('[name=autoClose]').eq(0);
        const debugCheckbox = sandbox.find("[name=\'debug\']").first();
        const parent = sandbox.find('[name=parent]').eq(0);
        const position = sandbox.find('[name=position]').eq(0);
        const maximized = sandbox.find('[name=maximized]').eq(0);
        const opened = sandbox.find('[name=opened]').eq(0);

        const panel = new Panel({
            autoClose: autoClose.node().checked,
            css: {'min-width': '200px'},
            debug: debugCheckbox.node().checked,
            element: blueprint.find('.panel').eq(0),
            maximized: maximized.node().checked,
            opened: opened.node().checked,
            parent: parent.node().checked ? blueprint : document.body,
            position: position.val()
        });

        autoClose.on("change", function () {
            panel.options.autoClose = autoClose.node().checked;
        });

        // Toggle debug mode
        debugCheckbox.on("click", (ev) => {
            panel.options.debug = ev.currentTarget.checked === true;
        });

        sandbox.find('.fn-close').on('click', function () {
            panel.close();
        });

        sandbox.find('.fn-open').on('click', function () {
            panel.open();
        });

        sandbox.find('.fn-toggle').on('click', function () {
            panel.toggle();
        });

        maximized.on("change", function () {
            if (maximized.node().checked) {
                panel.maximize();
            } else {
                panel.minimize();
            }
        });

        position.on("change", function () {
            panel.align(position.val());
        });

        // Expose component
        window.panel = panel;
    }

    render() {
        return (
            <section id="ui-panel">
                <h2>Cuic.Panel</h2>

                <p className="alert alert-info">Panels are used to display content that could be hidden when more screen
                    space is needed.</p>

                <div className="sandbox">
                    <div className="row">
                        <form className="col-md-2 settings">
                            <h4>Settings</h4>
                            <div className="form-group">
                                <label>position</label>
                                <select className="form-control" name="position" defaultValue="left top">
                                    <option>center</option>
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
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox"
                                           name="autoClose"/>
                                    <span>autoClose</span>
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox"
                                           data-type="boolean"
                                           name="debug"
                                           defaultValue="true"/>
                                    <span>debug</span>
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox"
                                           name="maximized"/>
                                    <span>maximized</span>
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox"
                                           name="parent"
                                           defaultChecked/>
                                    <span>parent</span>
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox"
                                           name="opened"
                                           defaultChecked/>
                                    <span>opened</span>
                                </label>
                            </div>

                            <h4>Actions</h4>
                            <div className="btn-block btn-group-vertical" role="group">
                                <button className="btn btn-default fn-close" type="button">close</button>
                                <button className="btn btn-default fn-open" type="button">open</button>
                                <button className="btn btn-default fn-toggle" type="button">toggle</button>
                            </div>
                        </form>
                        <div className="col-md-10">
                            <div className="blueprint">
                                <div className="panel panel-default">
                                    <header className="panel-header">
                                        <h5 className="panel-title">Title</h5>
                                    </header>
                                    <div className="panel-content">
                                        <p>content</p>
                                    </div>
                                    <footer className="panel-footer">Footer -
                                        <a href="#" className="btn-close">Close</a> -
                                        <a href="#" className="btn-toggle">Toggle</a>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
