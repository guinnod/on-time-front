import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@pages/Home";
import { Tasks } from "@pages/Tasks";
import { Workspace } from "@pages/Workspace";
import Protected from "./Protected";
import {Login} from "@pages/Login.jsx";
import {Register} from "@pages/Register";
import {Confirm} from "@pages/Confirm";
import {Forgot} from "@pages/Forgot.jsx";
import {Reset} from "@pages/Reset.jsx";

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="confirm" element={<Confirm />} />
                <Route path="forgot" element={<Forgot />} />
                <Route path="reset" element={<Reset />} />
                <Route path="/" element={<Protected isAuthorized />}>
                    <Route index element={<Home />} />
                    <Route path="tasks" element={<Tasks />} />
                    <Route path="workspace" element={<Workspace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}