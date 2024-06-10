import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import Toast from './layouts/components/Toast';
import ProtectedRoute from '~/routing/ProtectedRoute';

function App() {
    return (
        <Router>
            <div className="app" id="container">
                <Routes>
                    <Route>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            return <Route key={index} path={route.path} element={<Page />}></Route>;
                        })}
                    </Route>

                    <Route>
                        {privateRoutes.map((route, index) => {
                            const Page = route.component;
                            return (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={
                                        <ProtectedRoute>
                                            <DefaultLayout>
                                                <Page />
                                            </DefaultLayout>
                                        </ProtectedRoute>
                                    }
                                ></Route>
                            );
                        })}
                    </Route>
                </Routes>
                <Toast />
            </div>
        </Router>
    );
}

export default App;
