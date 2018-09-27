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
import Panel from 'cuic/dist/ui/panel';
import React from 'react';

class PanelPage extends React.Component {
  componentDidMount() {
    const sandbox = Cuic.element('#ui-panel .sandbox');
    const blueprint = sandbox.find('.blueprint').eq(0);
    const closeOnBlurCheckbox = sandbox.find('[name=closeOnBlur]').eq(0);
    const debugCheckbox = sandbox.find('[name=\'debug\']').first();
    const parentCheckbox = sandbox.find('[name=parent]').eq(0);
    const positionField = sandbox.find('[name=position]').eq(0);
    const maximizedCheckbox = sandbox.find('[name=maximized]').eq(0);
    const openedCheckbox = sandbox.find('[name=opened]').eq(0);

    const panel = new Panel({
      closeOnBlur: closeOnBlurCheckbox.node().checked,
      css: { 'min-width': '200px' },
      debug: debugCheckbox.node().checked,
      element: blueprint.find('.cc-panel').first(),
      maximized: maximizedCheckbox.node().checked,
      opened: openedCheckbox.node().checked,
      parent: parentCheckbox.node().checked ? blueprint : document.body,
      position: positionField.val(),
    });

    closeOnBlurCheckbox.on('change', () => {
      panel.options.closeOnBlur = closeOnBlurCheckbox.node().checked;
    });

    // Toggle debug mode
    debugCheckbox.on('click', (ev) => {
      panel.options.debug = ev.currentTarget.checked === true;
    });

    sandbox.find('.fn-close').on('click', () => {
      panel.close();
    });

    sandbox.find('.fn-open').on('click', () => {
      panel.open();
    });

    sandbox.find('.fn-toggle').on('click', () => {
      panel.toggle();
    });

    maximizedCheckbox.on('change', () => {
      if (maximizedCheckbox.node().checked) {
        panel.maximize();
      } else {
        panel.minimize();
      }
    });

    positionField.on('change', () => {
      panel.align(positionField.val());
    });

    // Expose component
    window.panel = panel;
  }

  render() {
    return (
      <section id="ui-panel">
        <h2>Cuic.Panel</h2>

        <p className="alert alert-info">Panels are used to display content that could be hidden when
          more screen space is needed.
        </p>

        <div className="sandbox">
          <div className="row">
            <form className="col-md-2">
              <div className="settings">
                <h4>Settings</h4>
                <div className="form-group">
                  <label htmlFor="positionField">position
                    <select
                      id="positionField"
                      className="custom-select"
                      name="position"
                      defaultValue="left top"
                    >
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
                  </label>
                </div>
                <div className="form-check">
                  <label
                    htmlFor="closeOnBlurField"
                    className="form-check-label"
                  >
                    <input
                      id="closeOnBlurField"
                      className="form-check-input"
                      type="checkbox"
                      name="closeOnBlur"
                    />
                    <span>closeOnBlur</span>
                  </label>
                </div>
                <div className="form-check">
                  <label
                    htmlFor="debugField"
                    className="form-check-label"
                  >
                    <input
                      id="debugField"
                      className="form-check-input"
                      type="checkbox"
                      data-type="boolean"
                      name="debug"
                      defaultValue="true"
                    />
                    <span>debug</span>
                  </label>
                </div>
                <div className="form-check">
                  <label
                    htmlFor="maximizedField"
                    className="form-check-label"
                  >
                    <input
                      id="maximizedField"
                      className="form-check-input"
                      type="checkbox"
                      name="maximized"
                    />
                    <span>maximized</span>
                  </label>
                </div>
                <div className="form-check">
                  <label
                    htmlFor="parentField"
                    className="form-check-label"
                  >
                    <input
                      id="parentField"
                      className="form-check-input"
                      type="checkbox"
                      name="parent"
                      defaultChecked
                    />
                    <span>parent</span>
                  </label>
                </div>
                <div className="form-check">
                  <label
                    htmlFor="openedField"
                    className="form-check-label"
                  >
                    <input
                      id="openedField"
                      className="form-check-input"
                      type="checkbox"
                      name="opened"
                      defaultChecked
                    />
                    <span>opened</span>
                  </label>
                </div>
              </div>

              <div className="settings">
                <h4>Actions</h4>
                <div
                  className="btn-block btn-group-vertical"
                  role="group"
                >
                  <button
                    className="btn btn-secondary fn-close"
                    type="button"
                  >close
                  </button>
                  <button
                    className="btn btn-secondary fn-open"
                    type="button"
                  >open
                  </button>
                  <button
                    className="btn btn-secondary fn-toggle"
                    type="button"
                  >toggle
                  </button>
                </div>
              </div>
            </form>
            <div className="col-md-10">
              <div className="blueprint">

                <div className="cc-panel">
                  <header className="cc-panel-header">
                    <h5 className="cc-panel-title">Title</h5>
                  </header>
                  <div className="cc-panel-content">
                    <p>content</p>
                  </div>
                  <footer className="cc-panel-footer">
                    <div className="btn-group">
                      <button className="btn btn-secondary btn-close">
                        Close
                      </button>
                      <button className="btn btn-secondary btn-toggle">
                        Toggle
                      </button>
                    </div>
                  </footer>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PanelPage;
