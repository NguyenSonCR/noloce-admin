import Search from '~/pages/Search';
import config from '~/config';
import { HeaderOnly } from '~/layouts';
import Website from '~/pages/websites/Website';
import Register from '~/pages/Register';
import Login from '~/pages/Login';
import Procedure from '~/pages/websites/Procedure';
import Price from '~/pages/websites/Price';
import Demo from '~/pages/websites/Demo';
import Message from '~/pages/Message';

const publicRoutes = [
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.login, component: Login, layout: null },
];

const privateRoutes = [
    // general
    { path: config.routes.home, component: Website },
    { path: config.routes.message, component: Message },
    // website
    { path: config.routes.website, component: Website },
    { path: config.routes.procedure, component: Procedure },
    { path: config.routes.price, component: Price },
    { path: config.routes.demo, component: Demo },

    // search
    { path: config.routes.search, component: Search, layout: HeaderOnly },
];

export { publicRoutes, privateRoutes };
