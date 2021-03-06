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

import {
  asElement,
  Popup,
} from 'cuic';
import PropTypes from 'prop-types';
import React from 'react';

class PopupPage extends React.Component {
  componentDidMount() {
    const section = asElement('#ui-popup');
    const sandbox = section.find('.sandbox').eq(0);
    const blueprint = sandbox.find('.blueprint').eq(0);
    const anchorField = sandbox.find('[name=anchor]').eq(0);
    const anchorPointField = sandbox.find('[name=anchorPoint]').eq(0);

    const popups = [];

    blueprint.find('button').each((el, i) => {
      popups[i] = new Popup({
        anchor: el.data('anchor'),
        autoClose: false,
        autoRemove: false,
        closable: true,
        content: `Popup <em>${el.data('anchor')}</em>`,
        target: el,
      });

      anchorField.on('change', () => {
        popups[i].anchor(anchorField.val(), anchorPointField.val(), el);
      });
      anchorPointField.on('change', () => {
        popups[i].anchor(anchorField.val(), anchorPointField.val(), el);
      });
      el.on('click', () => {
        popups[i].toggle();
      });
      el.click();
    });
  }

  render() {
    const { buttonWidth } = this.props;
    return (
      <section id="ui-popup">
        <h2>Cuic.Popup</h2>

        <p className="alert alert-info">
          Popups are often used to display menus, for example, when a
          user clicks on a button, a popup menu appears next to it.
        </p>

        <div className="sandbox">
          <div className="row">
            <form className="col-md-2 settings">
              <h4>Settings</h4>
              <div className="form-group">
                <label htmlFor="anchorField">anchor</label>
                <select
                  id="anchorField"
                  className="custom-select"
                  name="anchor"
                  defaultValue="right"
                >
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
              <div className="form-group">
                <label htmlFor="anchorPointField">anchor point</label>
                <select
                  id="anchorPointField"
                  className="custom-select"
                  name="anchorPoint"
                >
                  <option />
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
            </form>
            <div className="col-md-10">
              <div className="blueprint">
                <button
                  className="btn btn-secondary"
                  type="button"
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: buttonWidth,
                  }}
                  data-anchor="bottom right"
                >
                  <span>Bottom Right</span>
                </button>
                <button
                  className="btn btn-secondary"
                  type="button"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    marginLeft: -(buttonWidth / 2),
                    width: buttonWidth,
                  }}
                  data-anchor="bottom center"
                >
                  <span>Bottom Center</span>
                </button>
                <button
                  className="btn btn-secondary"
                  type="button"
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: buttonWidth,
                  }}
                  data-anchor="bottom left"
                >
                  <span>Bottom Left</span>
                </button>

                <button
                  className="btn btn-secondary"
                  type="button"
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    marginTop: '-17px',
                    width: buttonWidth,
                  }}
                  data-anchor="middle right"
                >
                  <span>Middle Right</span>
                </button>
                <button
                  className="btn btn-secondary"
                  type="button"
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    marginTop: '-17px',
                    width: buttonWidth,
                  }}
                  data-anchor="middle left"
                >
                  <span>Middle Left</span>
                </button>

                <button
                  className="btn btn-secondary"
                  type="button"
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: buttonWidth,
                  }}
                  data-anchor="top right"
                >
                  <span>Top Right</span>
                </button>
                <button
                  className="btn btn-secondary"
                  type="button"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    bottom: 0,
                    marginLeft: -(buttonWidth / 2),
                    width: buttonWidth,
                  }}
                  data-anchor="top center"
                >
                  <span>Top Center</span>
                </button>
                <button
                  className="btn btn-secondary"
                  type="button"
                  style={{
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    width: buttonWidth,
                  }}
                  data-anchor="top left"
                >
                  <span>Top Left</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

PopupPage.defaultProps = {
  buttonWidth: 200,
};

PopupPage.propTypes = {
  buttonWidth: PropTypes.number,
};

export default PopupPage;
