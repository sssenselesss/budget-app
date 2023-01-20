import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomaPage";
import Root from "../pages/Root";
import UserPage from "../pages/UserPage";

const router = createBrowserRouter([
    {
        path: "/",
        element : <Root />,
        children :[
            {
                path: "/",
                element : <HomePage />
            },
            {
                path: "/user/:id",
                element : <UserPage />
            }
        ]
    },
    
]);

export default router;