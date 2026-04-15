import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import ErrorHandler from "../component/error/ErrorHandler";
import HomePage from "../pages/homepage/HomePage";
import TimeLinePage from "../pages/timeline/TimeLinePage";
import StatsPage from "../pages/stats/StatsPage";
import ProfilePage from "../pages/profile/ProfilePage";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <RootLayout />,
        errorElement : <ErrorHandler />,
        children : [
            {
                index : true,
                element : <HomePage />
            },
            {
                path : '/timeline',
                element : <TimeLinePage />
            },
            {
                path : '/profile/:id',
                element : <ProfilePage />
            },
            {
                path : '/stats',
                element : <StatsPage />
            }
        ]
    }
])