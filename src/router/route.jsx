import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <RootLayout />
    }
])