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

import Cuic from 'cuic';
import Movable from 'cuic/dist/ui/movable';
import React from 'react';

class MovablePage extends React.Component {
  componentDidMount() {
    const section = Cuic.asElement('#ui-movable');
    const sandbox = section.find('.sandbox').eq(0);
    const blueprint = sandbox.find('.blueprint').eq(0);
    const form = section.find('form').eq(0);
    const xField = form.find('[name="x"]').eq(0);
    const yField = form.find('[name="y"]').eq(0);
    const stateField = form.find('[name="state"]').eq(0);
    const horizontallyCheckbox = form.find('[name="horizontally"]').eq(0);
    const verticallyCheckbox = form.find('[name="vertically"]').eq(0);

    const movables = [];

    // Make each test box selectable
    blueprint.find('.test-box', blueprint).each((box) => {
      const movable = new Movable({
        element: box,
        horizontally: horizontallyCheckbox.node().checked,
        vertically: verticallyCheckbox.node().checked,
      });

      movable.onMove(() => {
        stateField.val('onMove');
        const position = movable.position();
        xField.val(position.left);
        yField.val(position.top);
      });

      movable.onMoveStart(() => {
        stateField.val('onMoveStart');
        const position = movable.position();
        xField.val(position.left);
        yField.val(position.top);
      });

      movable.onMoveEnd(() => {
        stateField.val('onMoveEnd');
        const position = movable.position();
        xField.val(position.left);
        yField.val(position.top);
      });

      // Expose component
      movables.push(movable);
    });

    horizontallyCheckbox.on('change', (ev) => {
      movables.forEach((movable) => {
        // eslint-disable-next-line no-param-reassign
        movable.options.horizontally = ev.currentTarget.checked === true;
      });
    });

    verticallyCheckbox.on('change', (ev) => {
      movables.forEach((movable) => {
        // eslint-disable-next-line no-param-reassign
        movable.options.vertically = ev.currentTarget.checked === true;
      });
    });
  }

  render() {
    return (
      <section id="ui-movable">
        <h2>Cuic.Movable</h2>

        <div className="sandbox">
          <div className="row">
            <form className="col-md-2 settings">
              <div className="settings">
                <h4>Settings</h4>
                <div className="form-check">
                  <label
                    htmlFor="horizontallyField"
                    className="form-check-label"
                  >
                    <input
                      id="horizontallyField"
                      className="form-check-input"
                      type="checkbox"
                      name="horizontally"
                      defaultChecked
                    />
                    <span>horizontally</span>
                  </label>
                </div>
                <div className="form-check">
                  <label
                    htmlFor="verticallyField"
                    className="form-check-label"
                  >
                    <input
                      id="verticallyField"
                      className="form-check-input"
                      type="checkbox"
                      name="vertically"
                      defaultChecked
                    />
                    <span>vertically</span>
                  </label>
                </div>
              </div>

              <h4>Info</h4>
              <div>
                <div className="form-group">
                  <label htmlFor="xField">X
                    <div className="input-group">
                      <input
                        id="xField"
                        className="form-control"
                        name="x"
                        readOnly
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">px</span>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="yField">Y
                    <div className="input-group">
                      <input
                        id="yField"
                        className="form-control"
                        name="y"
                        readOnly
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">px</span>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="eventField">event
                    <input
                      id="eventField"
                      className="form-control"
                      name="state"
                      readOnly
                    />
                  </label>
                </div>
              </div>
            </form>
            <div className="col-md-10">
              <div className="blueprint">
                <div
                  className="test-box test-box-a"
                  style={{ position: 'relative' }}
                >Relative
                </div>
                <div
                  className="test-box test-box-b"
                  style={{ position: 'absolute', bottom: 0, right: 0 }}
                >
                  Absolute
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MovablePage;
