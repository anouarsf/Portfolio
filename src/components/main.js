import React from 'react';
import { Switch, Route } from "react-router-dom";
import Landing from './landing';
import Contact from './contact';
import Aboutme from './aboutme';
import Projects from './projects';
import Resume from './Resume/resume';

const Main = () => (

<Switch>
<Route exact path="/" component={Landing} />
<Route path="/contact" component={Contact} />
<Route path="/aboutme" component={Aboutme} />
<Route path="/projects" component={Projects} />
<Route path="/resume" component={Resume} />
</Switch>
)

export default Main;
