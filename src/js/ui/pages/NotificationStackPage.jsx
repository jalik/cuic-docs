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
import {NotificationStack} from "cuic/dist/ui/notification-stack";
import {Notification} from "cuic/dist/ui/notification";

export class NotificationStackPage extends React.Component {
    componentDidMount() {
        let sandbox = Cuic.element('#ui-notification-stack');
        let blueprint = sandbox.find('.blueprint').eq(0);
        let position = sandbox.find('[name=position]').eq(0);

        window.notificationStack = new NotificationStack({
            parent: blueprint,
            position: position.val()
        });

        position.on("change", function () {
            notificationStack.align(position.val());
        });
        sandbox.find('[name="add-notif"]').on('click', function (ev) {
            notificationStack.addComponent(new Notification({
                autoClose: false,
                content: "Custom event at <em>" + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "</em>"
            }));
        });
    }

    render() {
        return (
            <section id="ui-notification-stack">
                <h2>Cuic.NotificationStack</h2>

                <p className="alert alert-info">Notification areas are used to centralize notifications display.</p>

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
                            <button className="btn btn-default btn-block" name="add-notif" type="button">
                                <span className="glyphicon glyphicon-plus"/>
                                <span>Add a notification</span>
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
