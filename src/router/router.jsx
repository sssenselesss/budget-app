import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomaPage";
import Root from "../pages/Root";


const router = createBrowserRouter([
    {
        path: "/",
        element : <Root />,
        children :[
            {
                path: "/",
                element : <HomePage />
            },
            
        ]
    },
    
]);

export default router;