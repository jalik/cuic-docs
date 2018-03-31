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
import { Route, Switch } from 'react-router-dom';
import MainSidebar from '../components/MainSidebar';
import DialogPage from '../pages/DialogPage';
import GuidePage from '../pages/GuidePage';
import HomePage from '../pages/HomePage';
import MovablePage from '../pages/MovablePage';
import NotificationPage from '../pages/NotificationPage';
import NotificationStackPage from '../pages/NotificationStackPage';
import PanelPage from '../pages/PanelPage';
import PopupPage from '../pages/PopupPage';
import ResizablePage from '../pages/ResizablePage';
import SelectablePage from '../pages/SelectablePage';
import SwitcherPage from '../pages/SwitcherPage';
import TooltipPage from '../pages/TooltipPage';
import UtilsPage from '../pages/UtilsPage';

function SidebarLayout() {
  return (
    <div
      id="layout"
      className="layout layout-sidebar"
    >
      <div id="body">
        <MainSidebar />
        <div id="content">
          <Switch>
            <Route
              exact
              path="/"
              component={HomePage}
            />
            <Route
              exact
              path="/ui/dialog"
              component={DialogPage}
            />
            <Route
              exact
              path="/ui/guide"
              component={GuidePage}
            />
            <Route
              exact
              path="/ui/movable"
              component={MovablePage}
            />
            <Route
              exact
              path="/ui/notification"
              component={NotificationPage}
            />
            <Route
              exact
              path="/ui/notification-stack"
              component={NotificationStackPage}
            />
            <Route
              exact
              path="/ui/panel"
              component={PanelPage}
            />
            <Route
              exact
              path="/ui/popup"
              component={PopupPage}
            />
            <Route
              exact
              path="/ui/resizable"
              component={ResizablePage}
            />
            <Route
              exact
              path="/ui/selectable"
              component={SelectablePage}
            />
            <Route
              exact
              path="/ui/switcher"
              component={SwitcherPage}
            />
            <Route
              exact
              path="/ui/tooltip"
              component={TooltipPage}
            />
            <Route
              exact
              path="/utils"
              component={UtilsPage}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default SidebarLayout;
