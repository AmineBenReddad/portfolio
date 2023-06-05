import React from 'react'
import styled from 'styled-components';
import { IconName, BsLinkedin, BsGithub, BsTwitter, BsDownload, BsWhatsapp } from "react-icons/bs";
import ReactImage from '../images/react.png'
import FigmaImage from '../images/figma.png'
import JsImage from '../images/javascript.png'
import Memoji from '../images/memoji.png'


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: start;
    position: relative;

`
const Personal = styled.div`
    width: 411px;
    position: absolute;
    top: 293px;

    .hello {
        width: 160px;
        height: 45px;
        border-radius: 16px;
        background-color: #7B4AE21A ;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        padding-top: 10px;
        color: #7B4AE2;
        margin-bottom: 28px;
    }
    h1 {
        font-size: 52px;
        font-weight: 800;
        margin-bottom: 16px;
    }
    p {
        font-weight: 400;
        font-size: 20px;
        color: #FFFFFF80;
        margin-bottom: 25px;
    }
    .icons {
        width: 130px;
        height: 34px;
        display: flex;
        justify-content: space-between;
        color: #FFFFFF80;
    }
    .icon {
        cursor: pointer;
    }
    .icon:hover {
        color: #7B4AE2;
        transition: 0.3s;
    }
`
const AvatarAndIcons = styled.div`
    width: 555px;
    height: 517px;
    position: absolute;
    top: 203px;
    left: 550px;

    @keyframes rotate{
  to{ transform: rotate(360deg); }
}

    .react-icon {
        position: absolute;
        width: 71.5px;
        height: 71.5px;
        top: 100px;
        left: -50px;
        opacity: 55%;
    }
    .react-icon img {
        animation: rotate 5s linear infinite;
    }
    .figma-icon {
        position: absolute;
        width: 71.5px;
        height: 71.5px;
        top: 330px;
        left: -50px;
        opacity: 70%;
    }
    .figma-icon img {
        animation: rotate 5s linear infinite;
    }
    .avatar {
        position: absolute;
        top: 40px;
        right: 120px;
        animation: animate 2s infinite alternate;

        @keyframes animate {
            to{
                transform: translateY(-10px);
            }
        }
    }
    .js-icon {
        width: 71.5px;
        aspect-ratio: 1/1;
        background-color: #090E16;
        border-radius: 50%;
        position: absolute;
        top: 248px;
        right: 10px;
        text-align: center;
        opacity: 50%;
        animation: rotate 5s linear infinite;
    }
    .js-icon img {
        width: 36.8px;
        margin-top: 23%;
    }
    .avatar img {
        width: 350px;
        -webkit-filter: drop-shadow(5px 5px 5px #222222);
    filter: drop-shadow(5px 5px 5px #222222);
    }
`
const BigCircle = styled.div`
    width: 510px;
    height: 510px;
    background-color: #7B4AE233;
    border-radius: 50%;
`
const SmallCircle = styled.div`
    width: 510.3px;
    height: 510.3px;
    background: rgba(123, 74, 226, 0.2);
    filter: blur(25px);
    border-radius: 50%;
`
const Info = styled.div`
    width: 196px;
    height: 73px;
    position: absolute;
    top: 414px;
    right: 0;

    .cv {
        display: flex;
        float: right;
        gap: 8px;
        color: #7B4AE280;
        margin-bottom: 8px;
    }
    .cv:hover {
        cursor: pointer;
        color: #FFFFFF;
        transition: 0.3s;

    }
    p {
        font-weight: 600;
        font-size: 16px;
    }
    .contact-me {
        color: #7B4AE280;
        padding: 14px 15px;
        padding-left: 38px;
        height: 44px;
        width: 196px;
        display: flex;
        gap: 8px;
        align-items: center;
        text-align: center;
        border: 1px solid #7B4AE280;
        float: right;
        border-radius: 18px;
    }
    .contact-me:hover {
        background-color: #7B4AE280;
        color: #FFFFFF;
        cursor: pointer;
        transition: 0.3s;
    }
    
`



export default function Home() {
  return (
    <Section>
        <Personal>
            <div className="hello">
                <h4>👋 Hello!</h4>
            </div>
            <h1>Ben Reddad <br/>Amine</h1>
            <p>Front-end developer</p>
            <div className="icons">
            <div className="icon"><BsLinkedin size={32}/></div>
            <div className="icon"><BsGithub size={32}/></div>
            <div className="icon"><BsTwitter size={32}/></div>
            </div>
        </Personal>
        <AvatarAndIcons>
            <BigCircle>
                <SmallCircle/>
            </BigCircle>
                <div className="react-icon">
                    <img src={ReactImage} alt="" />
                </div>
                <div className="figma-icon">
                    <img src={FigmaImage} alt="" />
                </div>
                <div className="js-icon">
                    <img src={JsImage} alt="" />
                </div>
                <div className="avatar">
                    <img src={Memoji} alt="" />
                </div>
        </AvatarAndIcons>
        <Info>
            <div className="cv">
                <p>Here is my CV</p>
                <BsDownload size={16} />
            </div>
            <div className="contact-me">
                <BsWhatsapp size={20}/>
                <p>Contact Me!</p>
            </div>
        </Info>
    </Section>
  )
}
