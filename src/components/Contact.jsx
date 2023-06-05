import React from 'react'
import styled from 'styled-components';
import { IconName, BsWhatsapp } from "react-icons/bs";
import EmailImage from '../images/email.png'
import CopyImage from '../images/copy.png'
import ArrowUp from '../images/ArrowUp.png'




const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    position: relative;

    .content {
      width: 663px;
      height: 447px;
      position: absolute;
      top: 300px;
      left: 550px;
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .contact {
      width: 138px;
        height: 45px;
        border-radius: 16px;
        background-color: #7B4AE21A ;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        padding-top: 10px;
        color: #7B4AE2;
        margin: 0 auto;
    }
    h1 {
      font-weight: 900;
      font-size: 48px;
    }
    .whatsapp-email {
      display: flex;
      align-items: center;
      gap: 40px;
      margin: 0 auto;
      width: 450px;
    }
    .whatsapp {
        color: #7B4AE280;
        padding: 14px 15px;
        padding-left: 32px;
        height: 60px;
        width: 246px;
        display: flex;
        gap: 8px;
        align-items: center;
        text-align: center;
        border: 1px solid #7B4AE280;
        border-radius: 18px;
    }
    .whatsapp:hover {
      background-color: #25D366;
      color: #FFFFFF;
      cursor: pointer;
      transition: 0.3s;
    }
    .whatsapp p {
      font-weight: 600;
      font-size: 20px;
    }
    .email {
      height: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    .email h4 {
      font-size: 20px;
      font-weight: 400;
      color: #7B4AE2;
    }
    .email p {
      color: #FFFFFF80;
    }
    #copy {
      cursor: pointer;
    }
    .back {
      display: flex;
      width: auto;
      gap: 8px;
      align-items: center;
      cursor: pointer;
    }
    .back p {
      font-size: 20px;
      font-weight: 600;
      color: #7B4AE280;
    }
`

export default function Contact() {
  return (
    <Section>
        <div className="content">
            <div className="contact">
                <h4>📬 Contact</h4>
            </div>
            <h1>Contact me!</h1>
            <div className="whatsapp-email">
              <div className="whatsapp">
                  <BsWhatsapp size={25}/>
                  <p>Whatsapp</p>
              </div>
              <div className="email">
                <img src={EmailImage} alt="" style={{width: "40px"}}/>
                <h4>E-mail:</h4>
                <p>benreddadamine@gmail.com</p>
                <img id='copy' src={CopyImage} alt="" style={{width: "32px"}}/>
              </div>
            </div>
            <div className="back">
              <p>Back to top</p>
              <img src={ArrowUp} alt="" />
            </div>
        </div>
    </Section>
  )
}
