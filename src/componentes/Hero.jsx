import '../stylos/Hero.css'
import { HeroBtn } from "../componentes/HeroBtn.jsx"
import heroPicture from '../img/hero.png'
import heroAvatar from '../img/hero-avatar.png'
import heroArrow from '../img/hero-icon-arrow.png'
import heroHome from '../img/hero-tt-icon-home.png'
import heroSearch from '../img/icon-search.png'

export const Hero = () => {
    return(
        <section className="hero">
            <picture>
                <img src={heroPicture} alt="hero" />
            </picture>
            <div className="hero--tt">
                <div className="hero--tt__avatar">
                    <img src={heroAvatar} alt="avatar" />
                    <div>
                        <h4>+100 reviews</h4>
                        <h3>4.7/5 star-rated</h3>
                    </div>
                </div>
            <h1>sofia sands realty</h1>
            <p>Expert Guidance, Exclusive Properties, <br></br> Exceptional Service</p>
            <div className="hero--tt__btn">
                <HeroBtn
                btn="Rent"
                />
                <HeroBtn
                btn="Buy"
                />
                <HeroBtn
                btn="List"
                />
            </div>
            <div className="hero--tt__search">
                <div>
                   <p>Property Type <img src={heroArrow} alt="flecha" /></p>
                   <p><img src={heroHome} alt="home"/> Find your right property</p>
                </div>
                <button><img src={heroSearch} alt="search" /></button>
            </div>
            </div>
        </section>
    )
}