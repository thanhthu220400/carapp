import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {SCREENS} from "../../components/responsive";

import JeepImg from "../../../assets/images/jeep.png"

const AboutUsContainer = styled.div `
    ${tw `
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        pt-4
        pb-4
        pr-7
        pl-7
        md:pl-0
        md:pr-0
        bg-white
    `};
`;

const CarContainer = styled.div `
    width: auto;
    height: 15em;
    margin-left: -50px;    

    img{
        width: auto;
        height: 100%;
    }

    @media (min-width: ${SCREENS.md}) {
        height: 28em;
    }
    @media (min-width: ${SCREENS.lg}) {
        height: 30em;
    }
    @media (min-width: ${SCREENS["2xl"]}) {
        height: 35em;
        margin-left: 0;
    }
`;

const InfoContainer = styled.div `
    ${tw `
        md:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `};
`;

const Title = styled.h1 `
    ${tw `
        text-black
        text-4xl
        md:text-6xl
        font-extrabold
        md:font-black
        md:leading-normal
    `};
`;

const InfoText = styled.p `
    ${tw `
        md:max-w-2xl
        text-sm
        md:text-base
        text-gray-500
        font-normal
        mt-5
    `};
`;

export function AboutUs() {
    return (
        <AboutUsContainer>
            <CarContainer>
                <img src={JeepImg}/>
            </CarContainer>
            <InfoContainer>
                <Title>Trải nghiệm tốt nhất với gói ưu đãi thuê xe theo tháng</Title>
                <InfoText>
                    Trước những khó khăn của dịch bệnh Chungxe chia sẻ cùng khách hàng khi thuê xe 4
                    chỗ giá chỉ từ 360k/ngày, xe 7 chỗ chỉ từ 560k/ngày. Đây là mức giá quá ưu đãi,
                    chưa từng có trên thị trường cho thuê xe.
                </InfoText>
                <InfoText>
                    Ở gói thuê xe theo tháng hạng Silver, chỉ với mức 5 triệu/tháng bạn có thể thuê thoải mái các loại xe ở
                    tất cả các địa điểm mà HT.Car cung cấp. Hiện nay, xe tại Chungxe đã có độ phủ
                    lên đến 30 thành phố trên toàn quốc. Ngoài ra, với hạng Silver, bạn có thể thuê
                    xe theo tháng lên đến 7 lần/tháng đấy! Quá rẻ, quá tiệt kiệm, quá hơi phải không
                    nào?
                </InfoText>
            </InfoContainer>
        </AboutUsContainer>
    )
}