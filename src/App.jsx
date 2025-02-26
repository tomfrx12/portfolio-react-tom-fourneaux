import { BrowserRouter, Routes, Route } from "react-router";
import Index from "./pages/index";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
