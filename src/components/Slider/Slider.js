import React, {useState} from 'react'
import './Slider.css'

import image1 from '../../assets/fondoArena.jpg'
import image2 from '../../assets/fondoPiedra.jpg'
import image3 from '../../assets/fondoLadrillos.jpg'
import image4 from '../../assets/fondoMallas.jpg'


function Slider() {

    const images = [
        {
            'title': 'ImageOne',
            'url': image1,
            'text': 'This is the firs image'
        },
        {
            'title': 'ImageTwo',
            'url': image2,
            'text': 'This is the second image'
        },
        {
            'title': 'ImageThird',
            'url': image3,
            'text': 'This is the third image'
        },
        {
            'title': 'ImageFourth',
            'url': image4,
            'text': 'This is the Fourth image'
        }
    ]

        const [change, setChange] = useState(false);

const abc = document.querySelectorAll('.imagesMap')
console.log(abc)

    return (
        <div>
            <div className="sliderContainer" onAnimationIteration={() => setChange(false)}>
                {
                    change
                    ? <h1>Cambiando</h1>
                    : <h1>No cambiando</h1>
                }
            {
                images.map((image, index) => (
            <div key={index} className="sliderContainer__div">
                    <img className="imagesMap" src={image.url} alt=""></img>
            </div>

                ))
            }
            </div>
        </div>
    )
}

export default Slider
