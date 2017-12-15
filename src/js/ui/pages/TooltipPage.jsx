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
import {Tooltip} from "cuic/dist/ui/tooltip";

export class TooltipPage extends React.Component {
    componentDidMount() {
        const sandbox = Cuic.element('#ui-tooltip .sandbox');
        const anchor = sandbox.find("[name=anchor]").eq(0);
        const debugCheckbox = sandbox.find("[name=\'debug\']").first();
        const followPointerCheckbox = sandbox.find("[name=followPointer]").eq(0);

        const tooltip = new Tooltip({
            anchor: anchor.val(),
            attribute: "title",
            debug: debugCheckbox.node().checked,
            followPointer: followPointerCheckbox.node().checked,
            selector: '.group1 [title]'
        });

        const tooltipBlue = new Tooltip({
            anchor: anchor.val(),
            attribute: "title",
            css: {background: 'rgba(93,190,221,0.9)'},
            debug: debugCheckbox.node().checked,
            followPointer: followPointerCheckbox.node().checked,
            selector: '.group2 [title]'
        });

        anchor.on("change", function () {
            window.tooltip.anchor(anchor.val());
            window.tooltipBlue.anchor(anchor.val());
        });

        // Toggle debug mode
        debugCheckbox.on("click", (ev) => {
            tooltip.options.debug = ev.currentTarget.checked === true;
            tooltipBlue.options.debug = ev.currentTarget.checked === true;
        });

        followPointerCheckbox.on("change", function () {
            window.tooltip.options.followPointer = followPointerCheckbox.node().checked;
            window.tooltipBlue.options.followPointer = followPointerCheckbox.node().checked;
        });

        // Expose component
        window.tooltip = tooltip;
        window.tooltipBlue = tooltipBlue;
    }

    render() {
        return (
            <section id="ui-tooltip">
                <h2>Cuic.Tooltip</h2>

                <p className="alert alert-info">Tooltips are used to display a short description (eg: help, tips, etc.)
                    next to an element.</p>

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
                                    <input type="checkbox" name="followPointer" defaultChecked/>
                                    <span>followPointer</span>
                                </label>
                            </div>
                        </form>
                        <div className="col-md-10">
                            <div className="blueprint">
                                <div className="group1">
                                    <div className="test-box aligned-top aligned-left"
                                         style={{position: "absolute"}}
                                         data-anchor="bottom right" title="Bottom Right"/>

                                    <div className="test-box aligned-top aligned-center"
                                         style={{position: "absolute", left: "50%", marginLeft: "-50px"}}
                                         data-anchor="bottom center" title="Bottom Center"/>

                                    <div className="test-box aligned-top aligned-right"
                                         style={{position: "absolute"}}
                                         data-anchor="bottom left" title="Bottom Left"/>

                                    <div className="test-box aligned-middle aligned-left"
                                         style={{position: "absolute", top: "50%", marginTop: "-50px"}}
                                         data-anchor="middle right" title="Middle Right"/>

                                    <div className="test-box aligned-middle aligned-right"
                                         style={{position: "absolute", top: "50%", marginTop: "-50px"}}
                                         data-anchor="middle left" title="Middle Left"/>

                                    <div className="test-box aligned-bottom aligned-left"
                                         style={{position: "absolute"}}
                                         data-anchor="top right" title="Top Right"/>

                                    <div className="test-box aligned-bottom aligned-center"
                                         style={{position: "absolute", left: "50%", marginLeft: "-50px"}}
                                         data-anchor="top center" title="Top Center"/>

                                    <div className="test-box aligned-bottom aligned-right"
                                         style={{position: "absolute"}}
                                         data-anchor="top left" title="Top Left"/>
                                </div>
                                <div className="group2">
                                    <div className="test-box aligned-top"
                                         style={{position: "absolute", left: "25%", marginLeft: "-50px"}}
                                         title="Default">
                                        <span>Default position</span>
                                    </div>
                                    <div className="test-box aligned-bottom"
                                         style={{position: "absolute", left: "25%", marginLeft: "-50px"}}
                                         data-anchor=""
                                         title="<em>Description</em><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in pharetra tortor. Mauris tortor dui, malesuada sit amet dolor ut, tincidunt porttitor mauris. Cras rutrum risus nec justo sollicitudin ultricies. Phasellus fringilla posuere erat, bibendum blandit turpis aliquet quis. Nam sagittis libero eget neque imperdiet facilisis nec vitae lacus. Morbi.">
                                        <span>Custom HTML</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
