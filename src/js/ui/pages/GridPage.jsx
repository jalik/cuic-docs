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
import {Grid} from "cuic/dist/ui/grid";

export class GridPage extends React.Component {

    componentDidMount() {
        let sandbox = Cuic.element('#sb-grid');
        let autoResize = sandbox.find('[name=autoResize]');
        let cols = sandbox.find('[name=cols]');
        let colsWidth = sandbox.find('[name=colsWidth]');
        let editable = sandbox.find('[name=editable]');
        let rows = sandbox.find('[name=rows]');
        let rowsHeight = sandbox.find('[name=rowsHeight]');
        let spacing = sandbox.find('[name=spacing]');

        sandbox.find('.btn-run').on('click', function (ev) {
            ev.stopPropagation();
            let gridHeight = sandbox.find('[name=gridHeight]').val();
            let gridWidth = sandbox.find('[name=gridWidth]').val();

            grid = new Cuic.Grid({
                animSpeed: 200,
                autoResize: autoResize.is(":checked"),
                cols: cols.val(),
                colsWidth: colsWidth.val(),
                editable: editable.is(":checked"),
                maxCols: cols.val(),
                maxRows: rows.val(),
                rows: rows.val(),
                rowsHeight: rowsHeight.val(),
                spacing: spacing.val(),
                target: "#grid"
            });
        }).click();
        autoResize.on("change", function () {
            grid.autoResize = autoResize.is(":checked");
            grid.minimize();
        });
        editable.on("change", function () {
            grid.editable = editable.is(":checked");
        });
    }

    render() {
        return (
            <div id="ui-grid">
                <h2>Cuic.Grid</h2>

                <p className="alert alert-info">The grid is a good way to dispose components using a coordinate system,
                    allowing
                    to drag them.</p>

                <div className="sandbox" id="sb-grid">
                    <label>
                        <span>cols</span>
                        <input className="form-control" type="text" name="cols" defaultValue="6" size="2"/>
                    </label>
                    <label>
                        <span>rows</span>
                        <input className="form-control" type="text" name="rows" defaultValue="5" size="2"/>
                    </label>
                    <label>
                        <span>colsWidth</span>
                        <input className="form-control" type="text" name="colsWidth" defaultValue="100" size="4"/>
                    </label>
                    <label>
                        <span>rowsHeight</span>
                        <input className="form-control" type="text" name="rowsHeight" defaultValue="100" size="4"/>
                    </label>
                    <label>
                        <span>spacing</span>
                        <input className="form-control" type="text" name="spacing" defaultValue="10" size="2"/>
                    </label>
                    <label>
                        <span>editable</span>
                        <input type="checkbox" name="editable" defaultChecked/>
                    </label>
                    <label>
                        <span>autoResize</span>
                        <input type="checkbox" name="autoResize" defaultChecked/>
                    </label>
                    <button className="btn btn-primary btn-run" type="submit">
                        <span className="glyphicon glyphicon-console"/>
                        Run
                    </button>

                    <div id="grid" className="grid" style={{marginTop: "1em"}}>
                        <div className="widget" id="widgetA" data-col="1" data-row="1" data-size-x="3" data-size-y="3"
                             data-movable="false" data-resizable="=false">
                            <span>A</span>
                        </div>
                        <div className="widget" id="widgetB" data-col="4" data-row="1" data-size-x="2" data-size-y="2">
                            <span>B</span></div>
                        <div className="widget" id="widgetC" data-col="4" data-row="3" data-size-x="2" data-size-y="1">
                            <span>C</span></div>
                        <div className="widget" id="widgetD" data-col="1" data-row="4" data-size-x="5" data-size-y="1">
                            <p>qzd jqod jjqzd jqzdjojqd jkqzljd ljdklq jkljqdkjkqldjklqj kjdzq jkqz jklzq djlqzdjq
                                jklqjqk
                                jkqzjdjqzd jljklqzjdjqzo duizqhd hzqhd uihqzd piu dqzbq zui douiq zduhdq zohi</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
