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
import Tree from "cuic/dist/ui/tree";

class TreePage extends React.Component {

    componentDidMount() {
        window.tree = new Tree({
            target: '#sb-tree > .tree',
            collapsed: true
        });
    }

    render() {
        return (<div id="ui-tree">
                <h2>Cuic.Tree</h2>

                <p className="alert alert-info">Trees are used to organize nested objects, so they can be browsed.</p>

                <div className="sandbox" id="sb-tree">
                    <ul className="tree" style={{height: "250px"}}>
                        <li className="tree-item">
                            <span className="tree-item-name">item 1</span>
                        </li>
                        <li className="tree-item default">
                            <span className="tree-item-name">menu 2</span>

                            <ul className="tree-item-content">
                                <li className="tree-item">
                                    <span className="tree-item-name">sub-item 1</span>
                                </li>
                                <li className="tree-item">
                                    <span className="tree-item-name">sub-menu 2</span>
                                    <ul className="tree-item-content">
                                        <li className="tree-item"><span className="tree-item-name">entry 1</span></li>
                                        <li className="tree-item"><span className="tree-item-name">entry 2</span></li>
                                        <li className="tree-item"><span className="tree-item-name">entry 3</span></li>
                                        <li className="tree-item"><span className="tree-item-name">entry 4</span></li>
                                    </ul>
                                </li>
                                <li className="tree-item">
                                    <span className="tree-item-name">sub-item 3</span>
                                </li>
                                <li className="tree-item disabled">
                                    <span className="tree-item-name">disabled</span>
                                </li>
                            </ul>
                        </li>
                        <li className="tree-item">
                            <span className="tree-item-name">item 3</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default TreePage;
