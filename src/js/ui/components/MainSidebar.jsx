import React from "react";
import {FormattedMessage} from "react-intl";
import {NavLink} from "react-router-dom";

class MenuItem extends React.Component {
    render() {
        return (
            <NavLink to={this.props.url} className="sidebar-menu-link" activeClassName="active">
                <span className={this.props.icon}/>
                <span>{this.props.name}</span>
            </NavLink>
        );
    }
}

export class MainSidebar extends React.Component {
    render() {
        const Package = require("../../../../package.json");
        return (
            <aside id="sidebar" className="sidebar">
                <div className="sidebar-header">
                    <NavLink to="/" className="sidebar-brand">
                        <span className=""/>
                        <span className="sidebar-logo">{Package.name}</span>
                        <sup className="sidebar-version">{Package.version}</sup>
                    </NavLink>
                    <p className="sidebar-slogan">{Package.description}</p>
                </div>
                <nav className="sidebar-nav">
                    <div className="sidebar-menu" id="components-menu">
                        <h3>Components</h3>
                        <MenuItem name={<FormattedMessage id="dialog" defaultMessage="Dialog"/>}
                                  url="/ui/dialog"/>
                        <MenuItem name={<FormattedMessage id="guide" defaultMessage="Guide"/>}
                                  url="/ui/guide"/>
                        <MenuItem name={<FormattedMessage id="notification" defaultMessage="Notification"/>}
                                  url="/ui/notification"/>
                        <MenuItem name={<FormattedMessage id="notificationStack" defaultMessage="NotificationStack"/>}
                                  url="/ui/notification-stack"/>
                        <MenuItem name={<FormattedMessage id="panel" defaultMessage="Panel"/>}
                                  url="/ui/panel"/>
                        <MenuItem name={<FormattedMessage id="popup" defaultMessage="Popup"/>}
                                  url="/ui/popup"/>
                        <MenuItem name={<FormattedMessage id="switcher" defaultMessage="Switcher"/>}
                                  url="/ui/switcher"/>
                        <MenuItem name={<FormattedMessage id="tooltip" defaultMessage="Tooltip"/>}
                                  url="/ui/tooltip"/>
                    </div>
                    <div className="sidebar-menu" id="others-menu">
                        <h3>Others</h3>
                        <MenuItem name={<FormattedMessage id="movable" defaultMessage="Movable"/>}
                                  url="/ui/movable"/>
                        <MenuItem name={<FormattedMessage id="resizable" defaultMessage="Resizable"/>}
                                  url="/ui/resizable"/>
                        <MenuItem name={<FormattedMessage id="selectable" defaultMessage="Selectable"/>}
                                  url="/ui/selectable"/>
                    </div>
                    <div className="sidebar-menu" id="utils-menu">
                        <h3>Utils</h3>
                        <MenuItem name={<FormattedMessage id="utils" defaultMessage="Utils"/>}
                                  url="/utils"/>
                    </div>
                </nav>
            </aside>
        );
    }
}
