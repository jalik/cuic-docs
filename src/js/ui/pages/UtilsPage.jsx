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
  Element,
} from 'cuic';
import React from 'react';

class UtilsPage extends React.Component {
  componentDidMount() {
    const section = asElement('#ui-utils');
    const blueprint = section.find('.blueprint').eq(0);
    const target = blueprint.find('.target').eq(0);
    const form = section.find('form').eq(0);
    const field = section.find('[name="value"]').eq(0);

    form.find('[name="method"]').on('click', (ev) => {
      const button = ev.currentTarget;
      const method = button.value;
      let value = null;

      if (typeof Element.prototype[method] === 'function') {
        value = asElement(target)[button.value]();
      }
      field.val(value);
    });
  }

  render() {
    return (
      <section id="ui-utils">
        <h2>Utils</h2>

        <div className="sandbox">
          <div className="row">
            <form className="col-md-2 settings">
              <div className="form-group">
                <input
                  className="form-control"
                  name="value"
                  disabled
                />
              </div>
              <div
                className="btn-toolbar"
                role="toolbar"
              >
                <div
                  className="btn-group-vertical btn-block"
                  role="group"
                >
                  <button
                    className="btn btn-secondary"
                    name="method"
                    value="height"
                    type="button"
                  >
                    <span>height()</span>
                  </button>
                  <button
                    className="btn btn-secondary"
                    name="method"
                    value="innerHeight"
                    type="button"
                  >
                    <span>innerHeight()</span>
                  </button>
                  <button
                    className="btn btn-secondary"
                    name="method"
                    value="outerHeight"
                    type="button"
                  >
                    <span>outerHeight()</span>
                  </button>
                </div>
                <div
                  className="btn-group-vertical btn-block"
                  role="group"
                >
                  <button
                    className="btn btn-secondary"
                    name="method"
                    value="width"
                    type="button"
                  >
                    <span>width()</span>
                  </button>
                  <button
                    className="btn btn-secondary"
                    name="method"
                    value="innerWidth"
                    type="button"
                  >
                    <span>innerWidth()</span>
                  </button>
                  <button
                    className="btn btn-secondary"
                    name="method"
                    value="outerWidth"
                    type="button"
                  >
                    <span>outerWidth()</span>
                  </button>
                </div>
                <div
                  className="btn-group-vertical btn-block"
                  role="group"
                >
                  <button
                    className="btn btn-secondary"
                    name="method"
                    value="offset"
                    type="button"
                  >
                    <span>offset()</span>
                  </button>
                  <button
                    className="btn btn-secondary"
                    name="method"
                    value="position"
                    type="button"
                  >
                    <span>position()</span>
                  </button>
                </div>
              </div>
            </form>
            <div className="col-md-10">
              <div className="blueprint">
                <div className="target test-box" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default UtilsPage;
