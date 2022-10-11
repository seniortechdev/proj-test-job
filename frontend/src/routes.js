import History from "./pages/History";
import Home from "./pages/Home";

const routes = [
    {
        path: "/",
        exact: true,
        name: "Home",
        component: Home,
    },
    {
        path: "history",
        exact: true,
        name: "Home",
        component: History,
    },
    // { path: "*", name: "notFund", component: Page404 },
];

export default routes;
