import style from "./menu.module.css"
import logoNav from '../assets/images/esf.png'

export const Menu = (props) => {
    return (
        <>
            <nav className={`navegacao ${style['navBar']}`}>
            <img src={logoNav} alt="logoNav" className={style.logoNav}/>
                <ul className={`menu ${style['nav-menu']}`}>
                
                    <li  >
                        <a className={`nav-link ${style['nav-link']}`} href={"/"}>{props.option01}</a>
                    </li>
                    <li  >
                        <a className={`nav-link ${style['nav-link']}`} href={"/requisicao"}>{props.option02}</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}