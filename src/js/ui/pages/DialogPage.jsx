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
import Dialog from 'cuic/dist/ui/dialog';
import React from 'react';

// Define close button CSS class
Dialog.prototype.options.closeButtonClass = 'fa fa-times-circle';

class DialogPage extends React.Component {
  componentDidMount() {
    const section = Cuic.element('#ui-dialog');
    const sandbox = section.find('#ui-dialog .sandbox');
    const blueprint = sandbox.find('.blueprint').eq(0);
    const autoCloseCheckbox = sandbox.find('[name="autoClose"]').eq(0);
    const cssField = sandbox.find('[name="css"]').eq(0);
    const debugCheckbox = section.find('[name=\'debug\']').first();
    const fullscreenCheckbox = sandbox.find('[name="fullscreen"]').eq(0);
    const modalCheckbox = sandbox.find('[name=modal]').eq(0);
    const parentCheckbox = sandbox.find('[name="parent"]').eq(0);
    const positionField = sandbox.find('[name="position"]').eq(0);
    const titleField = sandbox.find('[name=title]').eq(0);

    sandbox.find('form').on('submit', (ev) => {
      ev.preventDefault();
      const dialog = new Dialog({
        autoClose: autoCloseCheckbox.node().checked,
        autoRemove: false,
        debug: debugCheckbox.node().checked,
        css: cssField.val(),
        maximized: fullscreenCheckbox.node().checked,
        modal: modalCheckbox.node().checked,
        parent: parentCheckbox.node().checked ? blueprint : document.body,
        position: positionField.val(),
        title: titleField.node().checked ? 'Header & title' : null,
        content: 'This is a <b>simple dialog</b>.<p>Vivamus efficitur, ipsum sit amet blandit accumsan, tortor erat pharetra elit, a elementum urna ligula at diam. Etiam id eros ut leo aliquam bibendum ac id lectus. Donec elementum libero at ullamcorper mattis. Pellentesque sed ante nec nunc varius consectetur.</p><p>Vivamus efficitur, ipsum sit amet blandit accumsan, tortor erat pharetra elit, a elementum urna ligula at diam. Etiam id eros ut leo aliquam bibendum ac id lectus. Donec elementum libero at ullamcorper mattis. Pellentesque sed ante nec nunc varius consectetur.</p><br>',
        buttons: sandbox.find('[name=buttons]').eq(0).node().checked ? [
          {
            autofocus: true,
            label: 'Close',
            callback() {
              this.close();
            },
          },
          {
            className: 'btn btn-primary',
            label: 'Accept',
            callback() {
              this.close();
            },
          },
        ] : null,
      });
      dialog.open();
    });
  }

  render() {
    return (
      <section id="ui-dialog">
        <h2>Cuic.Dialog</h2>

        <p className="alert alert-info">Dialogs are used to display things that needs interactions,
          for example
          a confirmation, or a login form.
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
                <label htmlFor="cssField">css
                  <input
                    id="cssField"
                    className="form-control"
                    type="text"
                    name="css"
                    defaultValue="width: 400px"
                  />
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
                  htmlFor="buttonsField"
                  className="form-check-label"
                >
                  <input
                    id="buttonsField"
                    className="form-check-input"
                    type="checkbox"
                    name="buttons"
                    defaultChecked
                  />
                  <span>buttons</span>
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
                  htmlFor="fullscreenField"
                  className="form-check-label"
                >
                  <input
                    id="fullscreenField"
                    className="form-check-input"
                    type="checkbox"
                    name="fullscreen"
                  />
                  <span>fullscreen</span>
                </label>
              </div>
              <div className="form-check">
                <label
                  htmlFor="modalField"
                  className="form-check-label"
                >
                  <input
                    id="modalField"
                    className="form-check-input"
                    type="checkbox"
                    name="modal"
                    defaultChecked
                  />
                  <span>modal</span>
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
                  htmlFor="titleField"
                  className="form-check-label"
                >
                  <input
                    id="titleField"
                    className="form-check-input"
                    type="checkbox"
                    name="title"
                    defaultChecked
                  />
                  <span>title</span>
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

export default DialogPage;
