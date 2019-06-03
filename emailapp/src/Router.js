import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Trumbowyg from "react-trumbowyg";
import About from './pages/About';
import Message from './pages/Message';
import Users from './pages/Users';
import Attachments from './pages/Attachments';
import AuditLog from './pages/AuditLog';
import FollowUpUsers from './pages/FollowUpUsers';
import './Router.css';


const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className="tabsContainer">
            <li className="tabs">
              <NavLink to="/" className="normal" activeClassName="active" exact>Message</NavLink>
            </li>
            <li className="tabs">
              <NavLink to="/about/" className="normal" activeClassName="active"  exact>Contacts</NavLink>
            </li>
            <li className="tabs">
              <NavLink to="/users/" className="normal" activeClassName="active" exact>Open Incidents</NavLink>
            </li>
            <li className="tabs">
              <NavLink to="/follow/" className="normal" activeClassName="active" exact>Folow Up Items</NavLink>
            </li>
            <li className="tabs">
              <NavLink to="/attachments/" className="normal" activeClassName="active" exact>Attachments</NavLink>
            </li>
            <li className="tabs">
              <NavLink to="/Audit/" className="normal" activeClassName="active" exact>Audit</NavLink>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Message} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <Route path="/follow/" component={FollowUpUsers} />
        <Route path="/attachments/" component={Attachments} />
        <Route path="/Audit/" component={AuditLog} />
      </div>
    </Router>
  );
}

export default AppRouter;