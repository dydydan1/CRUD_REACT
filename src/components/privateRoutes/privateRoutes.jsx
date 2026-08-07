import Cookies from "js-cookie"
import { Outlet, Navigate } from "react-router";

let PrivateRoutes = () => {
    let token = Cookies.get("token");

    return token ? <Outlet /> : <Navigate to = "/login" />
}

export default PrivateRoutes;