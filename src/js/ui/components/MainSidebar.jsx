import React from "react";
import {FormattedMessage} from "react-intl";
import {Link} from "react-router-dom";

class MenuItem extends React.Component {
    render() {
        return (
            <Link to={this.props.url} className="sidebar-menu-link">
                <span className={this.props.icon}/>
                <span>{this.props.name}</span>
            </Link>
        );
    }
}

export class MainSidebar extends React.Component {
    render() {
        const Package = require("../../../../package.json");
        return (
            <aside id="sidebar" className="sidebar">
                <div className="sidebar-header">
                    <Link to="/" className="sidebar-brand">
                        <span className="glyphicons glyphicons-boat"/>
                        <span className="sidebar-logo">{Package.name}</span>
                        <sup className="sidebar-version">{Package.version}</sup>
                    </Link>
                    <p className="sidebar-slogan">{Package.description}</p>
                </div>
                <nav className="sidebar-nav">
                    <div className="sidebar-menu" id="components-menu">
                        <h3>Components</h3>
                        <MenuItem name={<FormattedMessage id="dialog" defaultMessage="Dialog"/>}
                                  icon="glyphicons glyphicons-"
                                  url="/ui/dialog"/>
                        <MenuItem name={<FormattedMessage id="guide" defaultMessage="Guide"/>}
                                  icon="glyphicons glyphicons-"
                                  url="/ui/guide"/>
                        <MenuItem name={<FormattedMessage id="notification" defaultMessage="Notification"/>}
                                  icon="glyphicons glyphicons-"
                                  url="/ui/notification"/>
                        <MenuItem name={<FormattedMessage id="notificationStack" defaultMessage="NotificationStack"/>}
                                  icon="glyphicons glyphicons-"
                                  url="/ui/notification-stack"/>
                        <MenuItem name={<FormattedMessage id="panel" defaultMessage="Panel"/>}
                                  icon="glyphicons glyphicons-"
                                  url="/ui/panel"/>
                        <MenuItem name={<FormattedMessage id="popup" defaultMessage="Popup"/>}
                                  icon="glyphicons glyphicons-"
                                  url="/ui/popup"/>
                        <MenuItem name={<FormattedMessage id="switcher" defaultMessage="Switcher"/>}
                                  icon="glyphicons glyphicons-"
                                  url="/ui/switcher"/>
                        <MenuItem name={<FormattedMessage id="tooltip" defaultMessage="Tooltip"/>}
                                  icon="glyphicons glyphicons-"
                                  url="/ui/tooltip"/>
                        <MenuItem name={<FormattedMessage id="movable" defaultMessage="Movable"/>}
                                  icon="glyphicons glyphicons-"
                                  url="/ui/movable"/>
                        <MenuItem name={<FormattedMessage id="resizable" defaultMessage="Resizable"/>}
                                  icon="glyphicons glyphicons-"
                                  url="/ui/resizable"/>
                        <MenuItem name={<FormattedMessage id="selectable" defaultMessage="Selectable"/>}
                                  icon="glyphicons glyphicons-"
                                  url="/ui/selectable"/>
                    </div>
                    <div className="sidebar-menu" id="utils-menu">
                        <h3>Utils</h3>
                        <MenuItem name={<FormattedMessage id="utils" defaultMessage="Utils"/>}
                                  icon="glyphicons glyphicons-"
                                  url="/utils"/>
                    </div>
                </nav>
            </aside>
        );
    }
}
