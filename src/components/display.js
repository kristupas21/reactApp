import React from 'react';
import { MyPassions } from '../pages/my_passions';
import { MyWork } from '../pages/my_work';
import { MyGoals } from '../pages/my_goals';
import { MySkills } from '../pages/my_skills';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import { Project } from '../pages/project';


export class Display extends React.Component {
  render() {
    return (
      <div id="display" className="border_shade">
        <Route exact path="/" component={MySkills}/>
        <Route path="/my_goals" component={MyGoals}/>
        <Route path="/my_work" component={MyWork}/>
        <Route path="/my_passions" component={MyPassions}/>
        <Route path="/project" component={Project}/>
      </div>
    );
  }
}
