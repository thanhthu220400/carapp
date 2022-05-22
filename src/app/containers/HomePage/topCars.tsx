import React, {useState} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {Icar} from "../../../typings/car";
import {Car} from "../../components/car";
import Carousel, {Dots, slidesToShowPlugin} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";

const TopCarsContainer = styled.div `
    ${tw `
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pl-0
        md:pr-0
        mb-10
    `};
`;

const Title = styled.h2 `
    ${tw `
        text-3xl
        lg:text-5xl
        text-black
        font-extrabold
    `}
`;

const CarsContainer = styled.div `
    ${tw `
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-1
    `};
`;

export function TopCars() {
    const [current, setCurrent] = useState(0);

    const isMobile = useMediaQuery({maxWidth: SCREENS.sm});

    const testCar: Icar = {
        name: "MITSUBISHI TRITON 2019",
        thumbnailSrc: "https://tuvanmuaxe.vn/upload/upload_img/images/Mitsubishi-triton-2019-4x4-mive" +
                "c-vn-tuvanmuaxe-2.jpg",
        dailyPrice: "400.000đ",
        monthlyPrice: "8.000.000đ",
        gas: "Petrolimex"
    };
    const testCar1: Icar = {
        name: "Mazda 3 2017",
        thumbnailSrc: "https://mazdahochiminh.vn/wp-content/uploads/2021/05/Hyundai-Elantra-2016-va-M" +
                "azda-3-2.jpg",
        dailyPrice: "600.000đ",
        monthlyPrice: "10.000.000đ",
        gas: "Petrolimex"
    };
    const testCar2: Icar = {
        name: "Toyota Fortuner 2019",
        thumbnailSrc: "https://toyotahaiduong.info/wp-content/uploads/2018/09/ra-mat-fortuner-2019-la" +
                "p-rap-tai-viet-nam-gia-hon-1-ty-dong-a96.jpg",
        dailyPrice: "450.000đ",
        monthlyPrice: "8.500.000đ",
        gas: "Petrolimex"
    };
    const testCar3: Icar = {
        name: "Kia Cerato",
        thumbnailSrc: "https://image2.tienphong.vn/460x306/Uploaded/2021/cvjntckxtiwdpcv/2019_05_15/kia_cerato_2019_YFEO.jpg",
        dailyPrice: "570.000đ",
        monthlyPrice: "14.500.000đ",
        gas: "Petrolimex"
    };
    const testCar4: Icar = {
        name: "Toyota Innova 2018",
        thumbnailSrc: "https://image-us.24h.com.vn/upload/2-2021/images/2021-04-12/Gia-xe-Toyota-Innova-lan-banh-thang-4-2021-0-1618222207-79-width660height440.jpeg",
        dailyPrice: "500.000đ",
        monthlyPrice: "9.200.000đ",
        gas: "Petrolimex"
    };
    const testCar5: Icar = {
        name: "Toyota Vios 2018",
        thumbnailSrc: "https://drive.gianhangvn.com/image/xe-toyota-vios-e-phien-ban-1-5-cvt-1792103j24390.jpg",
        dailyPrice: "450.000đ",
        monthlyPrice: "8.500.000đ",
        gas: "Petrolimex"
    };
    
    const cars = [
        <Car {...testCar}/>,
        <Car {...testCar1}/>,
        <Car {...testCar2}/>,
        <Car {...testCar3}/>,
        <Car {...testCar4}/>,
        <Car {...testCar5}/>
    ];

    const numbrrOfDots = isMobile ? cars.length -2 : Math.ceil(cars.length -2 /3);

    return (
        <TopCarsContainer>
            <Title>Các Ưu Đãi Hàng Đầu</Title>
            <CarsContainer>
                <Carousel 
                    value={current} 
                    onChange={setCurrent} 
                    slides={cars}
                    plugins = {[
                        "clickToChange",
                        {
                            resolve: slidesToShowPlugin,
                            options:{
                                numberOfSlides: 3,
                            },
                        },
                    ]}
                    breakpoints = {{
                        640: {
                            plugins: [
                                {
                                    resolve: slidesToShowPlugin,
                                    options:{
                                        numberOfSlides: 3
                                    }
                                }
                            ]
                        },
                        900: {
                            plugins: [
                                {
                                    resolve: slidesToShowPlugin,
                                    options:{
                                        numberOfSlides: 3                                    
                                    }
                                }
                            ]
                        }
                    }}
                />
                <Dots 
                    value={current}
                    onChange={setCurrent}
                    number={numbrrOfDots} />
            </CarsContainer>
        </TopCarsContainer>
    )
}