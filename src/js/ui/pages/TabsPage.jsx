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

import React from "react";
import Tabs from "cuic/dist/ui/tabs";

class TabsPage extends React.Component {

    componentDidMount() {
        window.tabs = new Tabs({
            target: '#sb-tabs > .tabs',
            content: '#sb-tabs > .tab-content'
        });
    }

    render() {
        return (<div id="ui-tabs">
                <h2>Cuic.Tabs</h2>

                <p className="alert alert-info">Tabs are used to organize data and avoid scrolling the page.</p>

                <div className="sandbox" id="sb-tabs">
                    <div className="tabs">
                        <span className="tab" data-content="tab1-content">Tab1</span>
                        <span className="tab default" data-content="tab2-content">default</span>
                        <span className="tab disabled" data-content="tab3-content">disabled</span>
                        <span className="tab" data-content="tab4-content">Tab4</span>
                    </div>
                    <div className="tab-content">
                        <div id="tab1-content">
                            <b>Content of tab1</b>.
                            <img src="images/square-100.png" style={{float: "left", margin: "0 1em 1em 0"}}/>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in pharetra tortor.
                                Mauris
                                tortor
                                dui, malesuada sit amet dolor ut, tincidunt porttitor mauris. Cras rutrum risus nec
                                justo
                                sollicitudin ultricies. Phasellus fringilla posuere erat, bibendum blandit turpis
                                aliquet
                                quis. Nam
                                sagittis libero eget neque imperdiet facilisis nec vitae lacus. Morbi.
                            </p>
                        </div>
                        <div id="tab2-content">
                            <b>Content of tab2</b>.
                            <p>
                                Fusce non felis sit amet ipsum porta commodo in sed odio. In hac habitasse platea
                                dictumst.
                                Curabitur finibus, tellus et venenatis euismod, tellus mauris pulvinar arcu, non
                                bibendum
                                felis
                                augue vel nunc. In hac habitasse platea dictumst. Cras sodales facilisis leo ut
                                ornare.
                                Pellentesque euismod id nunc vitae pharetra. Proin.
                            </p>
                        </div>
                        <div id="tab3-content">
                            <b>This tab is disabled.</b>.
                        </div>
                        <div id="tab4-content">
                            <img src="images/square-100.png" style={{float: "right", margin: "0 0 1em 1em"}}/>
                            <b>Content of tab4</b>.
                            <p>
                                Curabitur vitae est tellus. Ut quis tempus lectus, blandit sollicitudin tortor.
                                Curabitur
                                aliquam
                                pretium massa sed convallis. Vivamus iaculis metus vel augue lacinia, a consequat
                                lectus
                                laoreet.
                                Duis feugiat eu. Phasellus fringilla posuere erat, bibendum blandit turpis aliquet
                                quis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabsPage;
