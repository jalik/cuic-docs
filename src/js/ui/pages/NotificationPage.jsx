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
import Notification from 'cuic/dist/ui/notification';
import React from 'react';

// Define close button CSS class
Notification.prototype.options.closeButtonClass = 'fa fa-times-circle';

class NotificationPage extends React.Component {
  componentDidMount() {
    const sandbox = Cuic.element('#ui-notification .sandbox');
    const blueprint = sandbox.find('.blueprint').eq(0);
    const autoCloseCheckbox = sandbox.find('[name=autoClose]').eq(0);
    const debugCheckbox = sandbox.find('[name=\'debug\']').first();
    const parentCheckbox = sandbox.find('[name=parent]').eq(0);
    const durationField = sandbox.find('[name=duration]').eq(0);
    const positionField = sandbox.find('[name=position]').eq(0);

    sandbox.find('form').on('submit', (ev) => {
      ev.preventDefault();
      const notification = new Notification({
        autoClose: autoCloseCheckbox.node().checked,
        autoRemove: true,
        closable: true,
        content: `Notification from <b>${positionField.val()}</b>`,
        debug: debugCheckbox.node().checked,
        duration: durationField.val(),
        parent: parentCheckbox.node().checked ? blueprint : document.body,
        position: positionField.val(),
      }).open();

      autoCloseCheckbox.on('change', () => {
        notification.options.autoClose = autoCloseCheckbox.node().checked;
      });
      positionField.off('change').on('change', () => {
        if (!notification.isRemoved()) {
          const { checked } = parentCheckbox.node();
          notification.align(positionField.val(), checked ? blueprint : document.body);
        }
      });
    });
  }

  render() {
    return (
      <section id="ui-notification">
        <h2>Cuic.Notification</h2>

        <p className="alert alert-info">Notifications are used to display messages that does not
          require any interaction.
        </p>

        <div className="sandbox">
          <div className="row">
            <form className="col-md-2 settings">
              <h4>Settings</h4>
              <div className="form-group">
                <label htmlFor="positionField">position
                  <select
                    id="positionField"
                    className="custom-select"
                    name="position"
                    defaultValue="center"
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
              <div className="form-group">
                <label htmlFor="durationField">duration
                  <div className="input-group">
                    <input
                      id="durationField"
                      className="form-control"
                      type="number"
                      name="duration"
                      defaultValue="2000"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">ms</span>
                    </div>
                  </div>
                </label>
              </div>
              <div className="form-check">
                <label
                  htmlFor="autoCloseField"
                  className="form-check-label"
                >
                  <input
                    id="autoCloseField"
                    className="form-check-input"
                    type="checkbox"
                    name="autoClose"
                    defaultChecked
                  />
                  <span>autoClose</span>
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

              <hr />
              <button
                className="btn btn-primary btn-run btn-block"
                type="submit"
              >
                <span className="glyphicon glyphicon-console" />
                <span>Run</span>
              </button>
            </form>
            <div className="col-md-10">
              <div className="blueprint" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NotificationPage;
