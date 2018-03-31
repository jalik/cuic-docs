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
import Switcher from 'cuic/dist/ui/switcher';
import React from 'react';

class SwitcherPage extends React.Component {
  componentDidMount() {
    const section = Cuic.element('#ui-switcher');
    const sandbox = section.find('.sandbox').eq(0);
    const debugCheckbox = sandbox.find('[name=\'debug\']').first();

    const switcher = new Switcher({
      autoStart: false,
      delay: 1000,
      debug: debugCheckbox.node().checked,
      element: sandbox.find('.switcher').eq(0),
      repeat: sandbox.find('[name=repeat]').eq(0).node().checked,
    });

    // Toggle debug mode
    debugCheckbox.on('click', (ev) => {
      switcher.options.debug = ev.currentTarget.checked === true;
    });

    // Options
    sandbox.find('[name=repeat]').on('change', (ev) => {
      ev.preventDefault();
      switcher.repeat = ev.currentTarget.checked;
    });

    // Methods
    sandbox.find('[name="method"]').on('click', (ev) => {
      ev.preventDefault();
      switcher[ev.currentTarget.value]();
    });

    // Expose component
    window.switcher = switcher;
  }

  render() {
    return (
      <section id="ui-switcher">
        <h2>Cuic.Switcher</h2>

        <p className="alert alert-info">The switcher is a parent that take a group of elements and
          displays only one at a time, allowing to navigate forward and backward.
        </p>

        <div className="sandbox">
          <div className="row">
            <div className="col-md-2">
              <div className="settings">
                <h4>Settings</h4>
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
                    htmlFor="repeatField"
                    className="form-check-label"
                  >
                    <input
                      id="repeatField"
                      className="form-check-input"
                      type="checkbox"
                      name="repeat"
                      defaultChecked
                    />
                    <span>repeat</span>
                  </label>
                </div>
              </div>
              <div className="settings">
                <h4>Actions</h4>
                <div
                  className="btn-group-vertical btn-block"
                  role="group"
                >
                  <button
                    className="btn btn-secondary"
                    type="button"
                    name="method"
                    value="start"
                  >
                    <span className="glyphicon glyphicon-play" />
                    <span>start</span>
                  </button>
                  <button
                    className="btn btn-secondary"
                    type="button"
                    name="method"
                    value="stop"
                  >
                    <span className="glyphicon glyphicon-stop" />
                    <span>stop</span>
                  </button>
                  <button
                    className="btn btn-secondary"
                    type="button"
                    name="method"
                    value="first"
                  >
                    <span className="glyphicon glyphicon-step-backward" />
                    <span>first</span>
                  </button>
                  <button
                    className="btn btn-secondary"
                    type="button"
                    name="method"
                    value="previous"
                  >
                    <span className="glyphicon glyphicon-backward" />
                    <span>previous</span>
                  </button>
                  <button
                    className="btn btn-secondary"
                    type="button"
                    name="method"
                    value="next"
                  >
                    <span className="glyphicon glyphicon-forward" />
                    <span>next</span>
                  </button>
                  <button
                    className="btn btn-secondary"
                    type="button"
                    name="method"
                    value="last"
                  >
                    <span className="glyphicon glyphicon-step-forward" />
                    <span>last</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-10">
              <div className="blueprint">
                <div className="switcher">
                  <div className="test-box">
                    1
                  </div>
                  <div className="test-box violet">
                    2
                  </div>
                  <div className="test-box green">
                    3
                  </div>
                  <div className="test-box yellow">
                    4
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SwitcherPage;
