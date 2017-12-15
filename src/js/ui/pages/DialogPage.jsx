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
import {Dialog} from "cuic/dist/ui/dialog";

export class DialogPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const section = Cuic.element("#ui-dialog");
        const sandbox = section.find('#ui-dialog .sandbox');
        const autoClose = sandbox.find('[name="autoClose"]').eq(0);
        const blueprint = sandbox.find('.blueprint').eq(0);
        const css = sandbox.find('[name="css"]').eq(0);
        const debugCheckbox = section.find("[name=\'debug\']").first();
        const fullscreen = sandbox.find('[name="fullscreen"]').eq(0);
        const modal = sandbox.find('[name=modal]').eq(0);
        const parent = sandbox.find('[name="parent"]').eq(0);
        const position = sandbox.find('[name="position"]').eq(0);
        const title = sandbox.find("[name=title]").eq(0);

        sandbox.find('form').on('submit', (ev) => {
            ev.preventDefault();
            window.dialog = new Dialog({
                autoClose: autoClose.node().checked,
                autoRemove: false,
                debug: debugCheckbox.node().checked,
                css: css.val(),
                maximized: fullscreen.node().checked,
                modal: modal.node().checked,
                parent: parent.node().checked ? blueprint : document.body,
                position: position.val(),
                title: title.node().checked ? 'Header & title' : null,
                content: 'This is a <b>simple dialog</b>.<p>Vivamus efficitur, ipsum sit amet blandit accumsan, tortor erat pharetra elit, a elementum urna ligula at diam. Etiam id eros ut leo aliquam bibendum ac id lectus. Donec elementum libero at ullamcorper mattis. Pellentesque sed ante nec nunc varius consectetur.</p><p>Vivamus efficitur, ipsum sit amet blandit accumsan, tortor erat pharetra elit, a elementum urna ligula at diam. Etiam id eros ut leo aliquam bibendum ac id lectus. Donec elementum libero at ullamcorper mattis. Pellentesque sed ante nec nunc varius consectetur.</p><br>',
                buttons: sandbox.find("[name=buttons]").eq(0).node().checked ? [
                    {
                        label: 'Accept',
                        callback: 'close'
                    },
                    {
                        label: 'Close',
                        callback: 'close'
                    }
                ] : null
            });
            dialog.open();
        });
    }

    render() {
        return (
            <section id="ui-dialog">
                <h2>Cuic.Dialog</h2>

                <p className="alert alert-info">Dialogs are used to display things that needs interactions, for example
                    a confirmation, or a login form.</p>

                <div className="sandbox">
                    <div className="row">
                        <form className="col-md-2 settings">
                            <h4>Settings</h4>
                            <div className="form-group">
                                <label>position</label>
                                <select className="form-control" name="position" defaultValue="center">
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
                            <div className="form-group">
                                <label>css</label>
                                <input className="form-control"
                                       type="text"
                                       name="css"
                                       defaultValue="width: 400px"/>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox"
                                           name="autoClose"
                                           defaultChecked/>
                                    <span>autoClose</span>
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox"
                                           name="buttons"
                                           defaultChecked/>
                                    <span>buttons</span>
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
                                           name="fullscreen"/>
                                    <span>fullscreen</span>
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox"
                                           name="modal"
                                           defaultChecked/>
                                    <span>modal</span>
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
                                           name="title"
                                           defaultChecked/>
                                    <span>title</span>
                                </label>
                            </div>
                            <button className="btn btn-primary btn-run btn-block" type="submit">
                                <span className="glyphicon glyphicon-console"/>
                                <span>Run</span>
                            </button>
                        </form>
                        <div className="col-md-10">
                            <div className="blueprint"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
