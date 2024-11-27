import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Repos from "./pages/Repos";
import Main from "./pages/Main";

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Main />} />
                <Route path="/Repos/:repo"  element={<Repos />} />
            </Routes>
        </BrowserRouter>
    )
}