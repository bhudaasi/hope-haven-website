import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import routes from './routes';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    {routes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    ))}
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;