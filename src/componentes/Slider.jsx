import '../stylos/Slider.css'
import { HeroBtn } from '../componentes/HeroBtn.jsx'
import circle from '../img/circle.png'
import { SliderCard } from '../componentes/SliderCard'
import progress from '../img/progress.png'
import sliderArrowRight from '../img/slider-arrow-right.png'

export const Slider = () => {
    return(        
    <section className="slider">
        <div className="slider--tt">
            <div className="slider--tt__left">
                <h2>exclusive listings</h2>
                <div className="slider--tt__left__flex">
                    <h3>explore our hand-selected opportunities</h3>
                    <div>
                    <HeroBtn
                    btn="Rent"
                    />
                    <HeroBtn
                    btn="Buy"
                    />
                    </div>
                </div>
            </div>
            <img src={circle} alt="circle" />
        </div>

        <div className="slider--ctn">
            <ul>
            <SliderCard />
            <SliderCard />
            <SliderCard />
            <SliderCard />
            <SliderCard />
            </ul>
        </div>

        <div className="slider--progress">
            <img src={progress} alt="progress" />
        </div>
        <a className="slider--tab" href="#">see all properties <img src={sliderArrowRight} alt="icon right" /></a>
    </section>
  )
}