import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import net from './assets/image/slider/net.png'
import ang from './assets/image/slider/ang.png'
import db from './assets/image/slider/db.png'
import git from './assets/image/slider/git.png'
import mui from './assets/image/slider/mui.png'
import figma from './assets/image/slider/figma.png'
import laravel from './assets/image/slider/laravel.png'
import node from './assets/image/slider/node.png'
import woo from './assets/image/slider/woo.png'
import react from './assets/image/slider/react.png'
import word from './assets/image/slider/word.png'

const ExpertSlides = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div className="container">
            <Slider {...settings}>

                <div>
                    <div class="card" style={{ width: "8rem", backgroundColor: "transparent", border: "none" }}>
                        <img class="card-img-top" src={react} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title card-name" style={{ color: "white", fontSize: "small" }}>React Js</h5>

                        </div>
                    </div>
                </div>
                <div>
                    <div class="card" style={{ width: "8rem", backgroundColor: "transparent", border: "none" }}>
                        <img class="card-img-top" src={ang} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title card-name" style={{ color: "white", fontSize: "small" }}>Angular</h5>

                        </div>
                    </div>
                </div>
                <div>
                    <div class="card" style={{ width: "8rem", backgroundColor: "transparent", border: "none" }}>
                        <img class="card-img-top" src={mui} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title card-name" style={{ color: "white", fontSize: "small" }}>MaterialUi</h5>

                        </div>
                    </div>
                </div>
                <div>
                    <div class="card" style={{ width: "8rem", backgroundColor: "transparent", border: "none" }}>
                        <img class="card-img-top" src={db} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title card-name" style={{ color: "white", fontSize: "small" }}>MongoDb</h5>

                        </div>
                    </div>
                </div>
                <div>
                    <div class="card" style={{ width: "8rem", backgroundColor: "transparent", border: "none" }}>
                        <img class="card-img-top" src={laravel} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title card-name" style={{ color: "white", fontSize: "small" }}>Laravel</h5>

                        </div>
                    </div>
                </div>
                <div>
                    <div class="card" style={{ width: "8rem", backgroundColor: "transparent", border: "none" }}>
                        <img class="card-img-top" src={woo} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title card-name" style={{ color: "white", fontSize: "small" }}>Woo Commerce</h5>

                        </div>
                    </div>
                </div>
                <div>
                    <div class="card" style={{ width: "8rem", backgroundColor: "transparent", border: "none" }}>
                        <img class="card-img-top" src={word} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title card-name" style={{ color: "white", fontSize: "small" }}>Wordpress</h5>

                        </div>
                    </div>
                </div>
                <div>
                    <div class="card" style={{ width: "8rem", backgroundColor: "transparent", border: "none" }}>
                        <img class="card-img-top" src={net} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title card-name" style={{ color: "white", fontSize: "small" }}>Dotnet</h5>

                        </div>
                    </div>
                </div>
                <div>
                    <div class="card" style={{ width: "8rem", backgroundColor: "transparent", border: "none" }}>
                        <img class="card-img-top" src={node} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title card-name" style={{ color: "white", fontSize: "small" }}>Node js</h5>

                        </div>
                    </div>
                </div>
                <div>
                    <div class="card" style={{ width: "8rem", backgroundColor: "transparent", border: "none" }}>
                        <img class="card-img-top" src={git} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title card-name" style={{ color: "white", fontSize: "small" }}>Git</h5>

                        </div>
                    </div>
                </div>
                <div>
                    <div class="card" style={{ width: "8rem", backgroundColor: "transparent", border: "none" }}>
                        <img class="card-img-top" src={figma} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title card-name" style={{ color: "white", fontSize: "small" }}>Figma</h5>

                        </div>
                    </div>
                </div>

            </Slider >
        </div>
    )
}

export default ExpertSlides
