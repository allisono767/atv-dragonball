import style from "./footer.module.css"
import Instagram from "../assets/images/instagram.png"
import Youtube from "../assets/images/youtube.png"

export const Footer = () => {
    return (
        <>
            <footer className={style.fotterCss}>

                <div className={style.Containerlogos}>        
                <a href="https://www.instagram.com/dragonballanimeofficial/" className={style.aFotter}>
                    <img src={Instagram} alt="Instagram" className={style.logoFotter}/>
                </a>
                <a href="https://youtu.be/z6mt_wN62zM?feature=shared" className={style.aFotter}>
                    <img src={Youtube} alt="Youtube" className={style.logoFotter}/>
                </a>
                </div>
            </footer>
        </>
    )
}