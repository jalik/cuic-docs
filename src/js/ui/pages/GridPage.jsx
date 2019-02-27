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
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React from 'react';

class GridPage extends React.Component {
  componentDidMount() {
    // const sandbox = Cuic.asElement('#sb-grid');
    // const autoResize = sandbox.find('[name=autoResize]');
    // const cols = sandbox.find('[name=cols]');
    // const colsWidth = sandbox.find('[name=colsWidth]');
    // const editable = sandbox.find('[name=editable]');
    // const rows = sandbox.find('[name=rows]');
    // const rowsHeight = sandbox.find('[name=rowsHeight]');
    // const spacing = sandbox.find('[name=spacing]');
    //
    // sandbox.find('.btn-run').on('click', (ev) => {
    //   ev.stopPropagation();
    //   const gridHeight = sandbox.find('[name=gridHeight]').val();
    //   const gridWidth = sandbox.find('[name=gridWidth]').val();
    //   const grid = new Cuic.Grid({
    //     animSpeed: 200,
    //     autoResize: autoResize.is(':checked'),
    //     cols: cols.val(),
    //     colsWidth: colsWidth.val(),
    //     editable: editable.is(':checked'),
    //     maxCols: cols.val(),
    //     maxRows: rows.val(),
    //     rows: rows.val(),
    //     rowsHeight: rowsHeight.val(),
    //     spacing: spacing.val(),
    //     target: '#grid',
    //   });
    // }).click();
    // autoResize.on('change', () => {
    //   grid.autoResize = autoResize.is(':checked');
    //   grid.minimize();
    // });
    // editable.on('change', () => {
    //   grid.editable = editable.is(':checked');
    // });
  }

  render() {
    return (
      <div id="ui-grid">
        <h2>Cuic.Grid</h2>

        <p className="alert alert-info">The grid is a good way to dispose components using a
          coordinate system, allowing to drag them.
        </p>

        <div
          className="sandbox"
          id="sb-grid"
        >
          <label htmlFor="colsField">
            <span>cols</span>
            <input
              id="colsField"
              className="form-control"
              type="text"
              name="cols"
              defaultValue="6"
              size="2"
            />
          </label>
          <label htmlFor="rowsField">
            <span>rows</span>
            <input
              id="rowsField"
              className="form-control"
              type="text"
              name="rows"
              defaultValue="5"
              size="2"
            />
          </label>
          <label htmlFor="colsWidthField">
            <span>colsWidth</span>
            <input
              id="colsWidthField"
              className="form-control"
              type="text"
              name="colsWidth"
              defaultValue="100"
              size="4"
            />
          </label>
          <label htmlFor="rowsHeightField">
            <span>rowsHeight</span>
            <input
              id="rowsHeightField"
              className="form-control"
              type="text"
              name="rowsHeight"
              defaultValue="100"
              size="4"
            />
          </label>
          <label htmlFor="spacingField">
            <span>spacing</span>
            <input
              id="spacingField"
              className="form-control"
              type="text"
              name="spacing"
              defaultValue="10"
              size="2"
            />
          </label>
          <label htmlFor="editableField">
            <span>editable</span>
            <input
              id="editableField"
              type="checkbox"
              name="editable"
              defaultChecked
            />
          </label>
          <label htmlFor="autoResizeField">
            <span>autoResize</span>
            <input
              id="autoResizeField"
              type="checkbox"
              name="autoResize"
              defaultChecked
            />
          </label>
          <button
            className="btn btn-primary btn-run"
            type="submit"
          >
            <span className="glyphicon glyphicon-console" /> Run
          </button>

          <div
            id="grid"
            className="grid"
            style={{ marginTop: '1em' }}
          >
            <div
              className="widget"
              id="widgetA"
              data-col="1"
              data-row="1"
              data-size-x="3"
              data-size-y="3"
              data-movable="false"
              data-resizable="=false"
            >
              <span>A</span>
            </div>
            <div
              className="widget"
              id="widgetB"
              data-col="4"
              data-row="1"
              data-size-x="2"
              data-size-y="2"
            >
              <span>B</span>
            </div>
            <div
              className="widget"
              id="widgetC"
              data-col="4"
              data-row="3"
              data-size-x="2"
              data-size-y="1"
            >
              <span>C</span>
            </div>
            <div
              className="widget"
              id="widgetD"
              data-col="1"
              data-row="4"
              data-size-x="5"
              data-size-y="1"
            >
              <p>qzd jqod jjqzd jqzdjojqd jkqzljd ljdklq jkljqdkjkqldjklqj kjdzq jkqz jklzq djlqzdjq
                jklqjqk jkqzjdjqzd jljklqzjdjqzo duizqhd hzqhd uihqzd piu dqzbq zui douiq zduhdq
                zohi
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GridPage;
