import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Coin/>}></Route>
                <Route path="/:coinId" element={<Coins/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;