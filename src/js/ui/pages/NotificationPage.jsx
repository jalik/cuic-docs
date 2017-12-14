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
import {Notification} from "cuic/dist/ui/notification";

export class NotificationPage extends React.Component {
    componentDidMount() {
        let sandbox = Cuic.element('#ui-notification .sandbox');
        let blueprint = sandbox.find('.blueprint').eq(0);
        let autoClose = sandbox.find('[name=autoClose]').eq(0);
        let parent = sandbox.find('[name=parent]').eq(0);
        let duration = sandbox.find('[name=duration]').eq(0);
        let position = sandbox.find('[name=position]').eq(0);

        sandbox.find('form').on('submit', function (ev) {
            ev.preventDefault();
            window.notification = new Notification({
                autoClose: autoClose.node().checked,
                autoRemove: true,
                closable: true,
                debug: false,
                parent: parent.node().checked ? blueprint : document.body,
                content: 'Notification from <b>' + position.val() + '</b>',
                duration: duration.val(),
                position: position.val()
            }).open();

            autoClose.on("change", function () {
                notification.options.autoClose = autoClose.node().checked;
            });
            position.off('change').on("change", function () {
                if (!notification.isRemoved()) {
                    notification.align(position.val(), parent.node().checked ? blueprint : document.body);
                }
            });
        });
    }

    render() {
        return (
            <section id="ui-notification">
                <h2>Cuic.Notification</h2>

                <p className="alert alert-info">Notifications are used to display messages that does not require any
                    interaction.</p>

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
                                <label>duration</label>
                                <input className="form-control"
                                       type="number"
                                       name="duration"
                                       defaultValue="2000"/>
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
                                           name="parent"
                                           defaultChecked/>
                                    <span>parent</span>
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
