import '../stylos/SliderCard.css'
import cardIcon1 from '../img/slider-card-info-1.png'
import cardIcon2 from '../img/slider-card-info-2.png'
import cardIcon3 from '../img/slider-card-info-3.png'
import sliderArrow from '../img/slider-arrow.png'

export const SliderCard = () => {
    return(
        <article>
            <div className="slider--card__bg">

            </div>
            <div className="slider--card__tt">
                <h3>segrex vitality resident segrex vitality resident</h3>
            </div>
            <p>Addres Title</p>
            <div className="slider--card__tt__info">
                <p><img src={cardIcon1} alt="icon" />3 Beds</p>
                <p><img src={cardIcon2} alt="icon" />1 Baths</p>
                <p><img src={cardIcon3} alt="icon" />10 372 s1 ft</p>
            </div>
            <div className="slider--card__controls">
                <p>aed 705000</p>
                <button><img src={sliderArrow} alt="flecha" /></button>
            </div>
        </article>
    )
}