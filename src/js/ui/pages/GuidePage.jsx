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
  Guide,
} from 'cuic';
import React from 'react';

class GuidePage extends React.Component {
  componentDidMount() {
    const section = asElement('#ui-guide');

    const nextButton = {
      className: 'btn btn-primary',
      label: 'Next',
      callback() {
        this.guide.next();
      },
    };

    const backButton = {
      label: 'Back',
      callback() {
        this.guide.previous();
      },
    };

    const skipButton = {
      label: 'Skip',
      callback() {
        this.guide.stop();
      },
    };

    const finishButton = {
      className: 'btn btn-primary',
      label: 'Finish',
      callback() {
        this.guide.stop();
      },
    };

    const guide = new Guide({
      autoStart: false,
      steps: [
        {
          id: 'components',
          title: 'Components',
          content: 'Explore all components !',
          target: '#components-menu',
          anchor: 'right',
          buttons: [skipButton, backButton, nextButton],
        },
        {
          id: 'utils',
          title: 'Utils',
          content: 'Explore Cuic utils !',
          target: '#utils-menu',
          anchor: 'right',
          buttons: [skipButton, backButton, nextButton],
        },
        {
          id: 'step-1',
          title: 'Step 1',
          content: 'Welcome to a simple and quick guide, click on <b>[next]</b> button to go to step 2 !',
          target: '#ui-guide .steps .step1',
          buttons: [skipButton, backButton, nextButton],
        },
        {
          id: 'step-2',
          title: 'Step 2',
          content: 'Nice, now click on <b>[next]</b> button to go to step 3 !',
          target: '#ui-guide .steps .step2',
          buttons: [skipButton, backButton, nextButton],
        },
        {
          id: 'step-3',
          title: 'Step 3',
          content: 'Oh yeaaah, you are awesome, click on <b>[next]</b> button to go to step 4 !',
          target: '#ui-guide .steps .step3',
          buttons: [skipButton, backButton, nextButton],
        },
      ],
    });

    guide.addStep({
      id: 'step-4',
      title: 'Step 4',
      content: 'Alright, finally click on <b>[finish]</b> button to finish this guide !',
      target: '#ui-guide .steps .step4',
      anchor: 'top',
      buttons: [backButton, finishButton],
    });

    guide.onStepChanged((step, target) => {
      const lastStep = guide.getLastStep();

      if (lastStep) {
        // Remove highlighted class on last target
        const lastTarget = asElement(lastStep.target);
        if (lastTarget) lastTarget.removeClass('guide-active-element');
      }
      // Highlight current target
      target.addClass('guide-active-element');
    });

    guide.onStopped(() => {
      const step = guide.getCurrentStep();

      if (step) {
        // Remove highlighted class on last target
        const target = asElement(step.target);
        if (target) target.removeClass('guide-active-element');
      }
    });

    const startButton = section.find('.btn-start');
    startButton.on('click', () => {
      guide.start();
    });

    const nextStepButton = section.find('.btn-next-step');
    nextStepButton.on('click', () => {
      guide.next();
    });

    const previousStepButton = section.find('.btn-previous-step');
    previousStepButton.on('click', () => {
      guide.previous();
    });

    const stopButton = section.find('.btn-stop');
    stopButton.on('click', () => {
      guide.stop();
    });

    const resumeButton = section.find('.btn-resume');
    resumeButton.on('click', () => {
      guide.resume();
    });

    // Expose guide
    window.guide = guide;
  }

  render() {
    return (
      <section id="ui-guide">
        <h2>Cuic.Guide</h2>

        <div className="sandbox">
          <div className="row">
            <div className="col-md-2">
              <div className="settings">
                <h4>Settings</h4>
              </div>
              <div className="settings">
                <h4>Actions</h4>
                <div
                  className="btn-group-vertical btn-block"
                  role="group"
                >
                  <button
                    className="btn btn-secondary btn-start"
                    type="button"
                  >
                    <span className="glyphicon glyphicon-play" />
                    <span>start</span>
                  </button>
                  <button
                    className="btn btn-secondary btn-previous-step"
                    type="button"
                  >
                    <span className="glyphicon glyphicon-backward" />
                    <span>previous</span>
                  </button>
                  <button
                    className="btn btn-secondary btn-next-step"
                    type="button"
                  >
                    <span className="glyphicon glyphicon-forward" />
                    <span>next</span>
                  </button>
                  <button
                    className="btn btn-secondary btn-stop"
                    type="button"
                  >
                    <span className="glyphicon glyphicon-pause" />
                    <span>stop</span>
                  </button>
                  <button
                    className="btn btn-secondary btn-resume"
                    type="button"
                  >
                    <span className="glyphicon glyphicon-play" />
                    <span>resume</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-10">
              <div className="blueprint steps">
                <div
                  className="test-box step1"
                  data-anchor="right"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                >
                  STEP 1
                </div>
                <div
                  className="test-box step2"
                  data-anchor="left"
                  style={{ position: 'absolute', top: 0, right: 0 }}
                >
                  STEP 2
                </div>
                <div
                  className="test-box step3"
                  data-anchor="left"
                  style={{ position: 'absolute', bottom: 0, right: 0 }}
                >
                  STEP 3
                </div>
                <div
                  className="test-box step4"
                  style={{ position: 'absolute', bottom: 0, left: 0 }}
                >
                  STEP 4
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GuidePage;
