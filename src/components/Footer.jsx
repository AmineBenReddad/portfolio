import React from 'react'
import styled from 'styled-components';
import { IconName, BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";



const Section = styled.div`
    scroll-snap-align: end;
    height: 88px;
    width: 100vw;
    background-color: #7B4AE20D;
    display: flex;
    align-items: center;
    gap: 250px;


    .copyright {
      margin-left: 50px;
      width: 457px;
    }
    .icons {
      width: 130px;
        height: 34px;
        display: flex;
        justify-content: space-between;
        color: #FFFFFF80;
    }
    .icon:hover {
      cursor: pointer;
      color: #7B4AE2;
      transition: 0.3s;
    }
`

export default function Footer() {
  return (
    <Section>
      <div className="copyright">
        <p>Copyright © Amine Ben Reddad · 2023</p>
      </div>
      <div className="icons">
            <div className="icon"><BsLinkedin size={32}/></div>
            <div className="icon"><BsGithub size={32}/></div>
            <div className="icon"><BsTwitter size={32}/></div>
            </div>
    </Section>
  )
}
