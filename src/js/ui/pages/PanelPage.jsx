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
import Panel from "cuic/dist/ui/panel";

class PanelPage extends React.Component {

    componentDidMount() {
        const sandbox = Cuic.element('#ui-panel .sandbox');
        const blueprint = sandbox.find('.blueprint').eq(0);
        const autoCloseCheckbox = sandbox.find('[name=autoClose]').eq(0);
        const debugCheckbox = sandbox.find("[name=\'debug\']").first();
        const parentCheckbox = sandbox.find('[name=parent]').eq(0);
        const positionField = sandbox.find('[name=position]').eq(0);
        const maximizedCheckbox = sandbox.find('[name=maximized]').eq(0);
        const openedCheckbox = sandbox.find('[name=opened]').eq(0);

        const panel = new Panel({
            autoClose: autoCloseCheckbox.node().checked,
            css: {'min-width': '200px'},
            debug: debugCheckbox.node().checked,
            element: blueprint.find('.cc-panel').first(),
            maximized: maximizedCheckbox.node().checked,
            opened: openedCheckbox.node().checked,
            parent: parentCheckbox.node().checked ? blueprint : document.body,
            position: positionField.val()
        });

        autoCloseCheckbox.on("change", function () {
            panel.options.autoClose = autoCloseCheckbox.node().checked;
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

        maximizedCheckbox.on("change", function () {
            if (maximizedCheckbox.node().checked) {
                panel.maximize();
            } else {
                panel.minimize();
            }
        });

        positionField.on("change", function () {
            panel.align(positionField.val());
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
                        <form className="col-md-2">
                            <div className="settings">
                                <h4>Settings</h4>
                                <div className="form-group">
                                    <label>position</label>
                                    <select className="custom-select" name="position" defaultValue="left top">
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
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input"
                                               type="checkbox"
                                               name="autoClose"/>
                                        <span>autoClose</span>
                                    </label>
                                </div>
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
                                               name="maximized"/>
                                        <span>maximized</span>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input"
                                               type="checkbox"
                                               name="parent"
                                               defaultChecked/>
                                        <span>parent</span>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input"
                                               type="checkbox"
                                               name="opened"
                                               defaultChecked/>
                                        <span>opened</span>
                                    </label>
                                </div>
                            </div>

                            <div className="settings">
                                <h4>Actions</h4>
                                <div className="btn-block btn-group-vertical" role="group">
                                    <button className="btn btn-secondary fn-close" type="button">close</button>
                                    <button className="btn btn-secondary fn-open" type="button">open</button>
                                    <button className="btn btn-secondary fn-toggle" type="button">toggle</button>
                                </div>
                            </div>
                        </form>
                        <div className="col-md-10">
                            <div className="blueprint">

                                <div className="cc-panel">
                                    <header className="cc-panel-header">
                                        <h5 className="cc-panel-title">Title</h5>
                                    </header>
                                    <div className="cc-panel-content">
                                        <p>content</p>
                                    </div>
                                    <footer className="cc-panel-footer">Footer -
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

export default PanelPage;
