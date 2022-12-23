import { useEffect, useState } from "react";
import "./App.css";
import users from "./data/users.json";
import PrintCards from "./assets/components/PrintCards";

function App() {
    const randomIndexUsers = Math.floor(Math.random() * users.length);
    const [isChange, setIsChange] = useState(true);
    const colors = [
        "#FDB137",
        "#785964",
        "#6D6875",
        "#B5838D",
        "#E5989B",
        "#7E9680",
        "#C73866",
        "#FFB4A2",
        "#79616F",
        "#EAB595",
    ];
    useEffect(() => {
        changeColorBody();
    }, [isChange]);
    const randomIndex = Math.floor(Math.random() * colors.length);
    const changeColorBody = () => {
        document.body.style = `background-color: ${colors[randomIndex]};color:${colors[randomIndex]}`;
    };
    return (
        <div className="App">
            <PrintCards userData={users[randomIndexUsers]} />
            <button
                onClick={() => setIsChange(!isChange)}
                className="bt"
                style={{ color: colors[randomIndex] }}
            >
                <i className="bx bx-shuffle"></i>
            </button>
        </div>
    );
}

export default App;
