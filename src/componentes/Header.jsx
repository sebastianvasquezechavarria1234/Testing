import '../stylos/Header.css'
import { HeaderBtn } from '../componentes/HeaderBtn.jsx'
import logo from '../img/logo.png'
import iconInstagram from '../img/icon-instagram.png'
import iconWapsap from '../img/icon-wapsap.png'
import headerArrow from '../img/header-arrow.png'
import iconMn from '../img/icon-mn.png'


export const Header = () =>{
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="">
                            <img src={logo} alt="logo" />
                            sofia sands
                        </a>
                       
                    </li>
                </ul>
                <ul>
                    <li>
                        <HeaderBtn
                        btn="buy"
                        />
                    </li>
                    <li>
                        <HeaderBtn
                        btn="rent"
                        />
                    </li>
                    <li>
                        <HeaderBtn
                        btn="off plan"
                        />
                    </li>
                    <li>
                        <HeaderBtn
                        btn="services"
                        />
                    </li>
                    <li>
                        <HeaderBtn
                        btn="about us"
                        />
                    </li>
                    <li>
                        <HeaderBtn
                        btn="list your property"
                        />
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            <img src={iconInstagram} alt="icon" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={iconWapsap} alt="icon" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className='btnMN'>
                            <img src={iconMn} alt="icon menu" />
                            Menu
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            contact us
                            <img src={headerArrow} alt="icon" />
                        </a>
                    </li>
                </ul>
            </nav>

        </header>
        
    )
}


