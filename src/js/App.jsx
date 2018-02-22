import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import {SidebarLayout} from "./ui/layouts/SidebarLayout";

export class App extends React.Component {
    componentDidMount() {
        // Cuic.ready(() => {
        //     let resize = function () {
        //         let navbar = Cuic.element('.navbar');
        //         let sidebar = Cuic.find('#sidebar');
        //         let content = Cuic.find('#content');
        //         let maxHeight = Cuic.element(window).height() - navbar.outerHeight(true);
        //         sidebar.css({'max-height': maxHeight});
        //         content.css({'max-height': maxHeight});
        //     };
        //     Cuic.onWindowResized(resize);
        //     resize();
        // });
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" component={SidebarLayout}/>
                </Switch>
            </HashRouter>
        )
    }
}
