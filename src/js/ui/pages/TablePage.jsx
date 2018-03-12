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
import Table from "cuic/dist/ui/table";

class TablePage extends React.Component {

    componentDidMount() {
        window.table = new Table({
            target: '#sb-table table',
            selectRowOnClick: true
        });
    }

    render() {
        return (
            <div id="ui-table">
                <h2>Cuic.Table</h2>

                <p className="alert alert-info">Tables are useful to represent data that could need filtering and
                    ordering.</p>

                <div className="sandbox" id="sb-table">
                    <table>
                        <thead>
                        <tr>
                            <th className="sortable">Head 1</th>
                            <th className="sortable default">Head 2</th>
                            <th className="sortable">Head 3</th>
                            <th className="sortable">Head 4</th>
                            <th className="sortable">Head 5</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>a</td>
                            <td>3e</td>
                            <td>u</td>
                            <td>w</td>
                            <td>i</td>
                        </tr>
                        <tr>
                            <td>b</td>
                            <td>2s</td>
                            <td>f</td>
                            <td>q</td>
                            <td>z</td>
                        </tr>
                        <tr>
                            <td>c</td>
                            <td>4m</td>
                            <td>g</td>
                            <td>n</td>
                            <td>k</td>
                        </tr>
                        <tr>
                            <td>d</td>
                            <td>1o</td>
                            <td>p</td>
                            <td>t</td>
                            <td>h</td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td>Foot 1</td>
                            <td>Foot 2</td>
                            <td>Foot 3</td>
                            <td>Foot 4</td>
                            <td>Foot 5</td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        );
    }
}

export default TablePage;
