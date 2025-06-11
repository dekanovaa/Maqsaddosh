 import "./Header.css"
 import net from "../../assets/images/Cellular Connection.svg"
 import wifi from "../../assets/images/Wifi.svg"
 import battery from "../../assets/images/Battery.svg"
 
 function Header() {
    return( 
        <div className="header">
            <div className="header-container">
                <p className="header-time">9:41</p>
                <div className="header-right">
                    <img className="net" src={net} alt="NET" />
                    <img className="wifi" src={wifi} alt="Wifi" />
                    <img className="battery" src={battery} alt="Battery" />
                </div>

            </div>
        
        </div>
    )
 }
 export default Header;