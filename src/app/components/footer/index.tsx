import { faEnvelope, faMailBulk, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {Logo} from "../logo";

const FooterContainer = styled.div `
//min-height: 24em;
        background-color: #1d2124;
    ${tw`
        flex
        flex-col
        min-w-full
        pt-10
        md:pt-16
        items-center
        justify-center
    `};
`;

const InnerContainer = styled.div `
    ${tw `
        flex
        w-full
        h-full
        max-w-screen-2xl
        flex-wrap
    `};
`;


const BottomContainer = styled.div`
  ${tw`
    w-full
    flex
    max-w-screen-2xl
    justify-center
    md:justify-start
    mt-7
    md:mt-1
  `};
`;

const CopyrightText = styled.small`
  font-size: 12px;
  ${tw`
    text-gray-300
  `}
`;

const AboutContainer = styled.div `
    ${tw`
        flex
        flex-col
        mr-2
        md:mr-16
        pl-10
        pr-10
        md:pl-3
        md:pr-3
    `};
`;


const AboutText = styled.p `
    ${tw `
        text-white
        text-xl
        font-normal
        max-w-xs
        leading-6
        mt-3
        mr-3

    `};
`;

const SectionContainer = styled.div `
  ${tw `
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-7
    md:mt-0
  `};
`;
const LinksList = styled.ul `
  ${tw `
    outline-none
    list-none
    flex
    flex-col
  `};
`;

const ListItem = styled.li `
  ${tw `
    mb-3
  `};

  & > a {
    ${tw `
        text-sm
        text-white
        transition-all
        hover:text-gray-200
    `};
  }
`;

const HeaderTitle = styled.h3 `
    ${tw `
        text-2xl
        font-bold
        text-white
        mb-3
    `};
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `};
`;

const RedIcon = styled.span`
  ${tw`
    w-10
    h-10
    rounded-full
    bg-red-500
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `};
`;

const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
  `};
`;

export function Footer() {
    return (
        <FooterContainer>
            <InnerContainer>
                <AboutContainer>
                    <Logo color="white" bgColor="dark"/>
                    <AboutText>HT.Car là công ty uy tín hàng đầu về cho thuê và bán ô tô có mặt tại nhiều quốc gia
                        trên thế giới với những chiếc xe chất lượng cao và dịch vụ được đánh giá hàng
                        đầu.
                    </AboutText>
                </AboutContainer>

                <SectionContainer>
                    <HeaderTitle>Our Links</HeaderTitle>
                    <LinksList>
                        <ListItem>
                            <a href="#">Trang Chủ</a>
                        </ListItem>
                        <ListItem>
                            <a href="#">Liên Hệ</a>
                        </ListItem>
                        <ListItem>
                            <a href="#">Dịch Vụ</a>
                        </ListItem>
                        <ListItem>
                            <a href="#">Models</a>
                        </ListItem>
                        <ListItem>
                            <a href="#">Blog</a>
                        </ListItem>
                    </LinksList>
                </SectionContainer>

                <SectionContainer>
                    <HeaderTitle>Other Links</HeaderTitle>
                    <LinksList>
                        <ListItem>
                            <a href="#">FAQ</a>
                        </ListItem>
                        <ListItem>
                            <a href="#">Contact Us</a>
                        </ListItem>
                        <ListItem>
                            <a href="#">Hỗ Trợ</a>
                        </ListItem>
                        <ListItem>
                            <a href="#">Privacy Policy</a>
                        </ListItem>
                        <ListItem>
                            <a href="#">Terms &amp; Conditions</a>
                        </ListItem>
                    </LinksList>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Hotline</HeaderTitle>
                    <HorizontalContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faPhoneAlt} />
                        </RedIcon>
                        <SmallText>+84 858-51-99-51</SmallText>
                    </HorizontalContainer>
                </SectionContainer>
                
                <SectionContainer>
                    <HeaderTitle>Email</HeaderTitle>
                    <HorizontalContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </RedIcon>
                        <SmallText>trangchuhtcar@gmail.com</SmallText>
                    </HorizontalContainer>
                </SectionContainer>
            </InnerContainer>
            <BottomContainer>
                <CopyrightText>
                    Copyright &copy; {new Date().getFullYear()} HT.Car All right reserved.
                </CopyrightText>
            </BottomContainer>
        </FooterContainer>
    );
}