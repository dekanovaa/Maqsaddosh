import Header from "../../components/header/Header";
import "./Welcome.css"
import logo from "../../assets/images/Logo (1).svg"
import { useNavigate } from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();

    const handleStart = () => {
      navigate('/intro');
    };
    return (
        <div className="welcome">
        <Header/>
       <div className="welcome-container">
       <div className="welcome-top">
            <img className="welcome-img" src={logo} alt="Logo" />
            <h3 className="welcome-title">
            Maqsaddosh bilan maqsadli hayot!
            </h3>
        </div>
        <div className="btn">
        <button className="welcome-btn" onClick={handleStart}>
        BOSHLASH
        </button>
        </div>
       </div>
        </div>
    )
}
export default Welcome;