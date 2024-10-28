'use client'
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import press1 from "../../../public/images/press1.jpeg"
import press2 from "../../../public/images/press2.jpg"
import press3 from "../../../public/images/press3.jpg"
import press4 from "../../../public/images/press4.jpeg"
import "./carousel.css"

import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay
} from './EmblaCarouselSelectedSnapDisplay'

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const slides = [
    { img: press1, link: "https://www.masslive.com/elpueblolatino/2014/12/concierto_festivo_de_mambo_on.html", target: "_blank" },
    { img: press2, link: "#", target: "" },
    { img: press3, link: "#", target: "" },
    { img: press4, link: "https://www.masslive.com/living/2014/12/mambo_on_main_street_celebrates_library_holidays.html", target: "_blank" },
  ]
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)

  return (
    <section className="embla pt-10">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item, index) => (
            <div className="embla__slide" key={index}>
              <Link href={item.link} target={item.target}>
                <Image className="embla_slide_number" 
                  src={item.img}
                  alt={item.img.src}
                  width={0}
                  height={0}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
      </div>
    </section>
  )
}
