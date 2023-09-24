import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio.js';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Footer from './components/Footer';
import background from './assets/space-background.jpg'


const App = () =>
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat" }}>
        <HashRouter>
            <Nav />
                <div>
                    <Switch>
                    <Route exact path={"/"} component={About} />
                        <Route exact path={"/react-portfolio3.0"} component={About} />
                        <Route exact path={"/portfolio"} component={Portfolio} />
                        <Route exact path={"/contact"} component={Contact} />
                        <Route exact path={"/resume"} component={Resume} />
                    </Switch>
                </div>
            <Footer />
        </HashRouter>
    </div>;

export default App;
