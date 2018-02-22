import React from "react";
import {Route, Switch} from "react-router-dom";
import {DialogPage} from "../pages/DialogPage";
import {GuidePage} from "../pages/GuidePage";
import {HomePage} from "../pages/HomePage";
import {MainSidebar} from "../components/MainSidebar";
import {MovablePage} from "../pages/MovablePage";
import {NotificationPage} from "../pages/NotificationPage";
import {NotificationStackPage} from "../pages/NotificationStackPage";
import {PanelPage} from "../pages/PanelPage";
import {PopupPage} from "../pages/PopupPage";
import {ResizablePage} from "../pages/ResizablePage";
import {SelectablePage} from "../pages/SelectablePage";
import {SwitcherPage} from "../pages/SwitcherPage";
import {TooltipPage} from "../pages/TooltipPage";
import {UtilsPage} from "../pages/UtilsPage";

export class SidebarLayout extends React.Component {
    render() {
        return (
            <div id="layout" className="layout layout-sidebar">
                <div id="body">
                    <MainSidebar/>
                    <div id="content">
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route exact path="/ui/dialog" component={DialogPage}/>
                            <Route exact path="/ui/guide" component={GuidePage}/>
                            <Route exact path="/ui/movable" component={MovablePage}/>
                            <Route exact path="/ui/notification" component={NotificationPage}/>
                            <Route exact path="/ui/notification-stack" component={NotificationStackPage}/>
                            <Route exact path="/ui/panel" component={PanelPage}/>
                            <Route exact path="/ui/popup" component={PopupPage}/>
                            <Route exact path="/ui/resizable" component={ResizablePage}/>
                            <Route exact path="/ui/selectable" component={SelectablePage}/>
                            <Route exact path="/ui/switcher" component={SwitcherPage}/>
                            <Route exact path="/ui/tooltip" component={TooltipPage}/>
                            <Route exact path="/utils" component={UtilsPage}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}
