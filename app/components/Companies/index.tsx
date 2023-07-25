"use client"
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    {
        imgSrc: "/images/Companies/khan.png",
    },
    {
        imgSrc: "/images/Companies/paklawn.png",
    },
    {
        imgSrc: "/images/Companies/prepaid.png",
    },
    {
        imgSrc: "/images/Companies/express.png",
    },
    {
        imgSrc: "/images/Companies/telnet.png"
    },
    {
        imgSrc: "/images/Companies/tree.svg"
    },
]


// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className='text-center bg-lightpink' >
                <h2 className="text-center text-[#BD24DF] font-bold">OUR HAPPY CUSTOMERS</h2>
                <h2 className="text-center text-white text-4xl pt-4 font-bold">Some of our Clients</h2>
                <div className="mx-auto max-w-2xl py-16 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
                    <div>
                        <Slider {...settings}>
                            {data.map((item, i) =>
                                <div key={i}>
                                    <div className="company-div">
                                        <img src={item.imgSrc} alt={item.imgSrc} style={{width: '100px'}} />
                                    </div>
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}
