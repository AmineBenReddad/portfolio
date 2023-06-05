import React from 'react'
import styled from 'styled-components';
import ReactImg from '../images/skills-react.png'
import JavascriptImg from '../images/skills-javascript.png'
import CssImg from '../images/skills-css.png'
import HtmlImg from '../images/skills-html.png'
import FigmaImg from '../images/skills-figma.png'
import GithubImg from '../images/skills-github.png'
import GitImg from '../images/skills-git.png'
import TypescriptImg from '../images/skills-typescript.png'
import NextjsImg from '../images/skills-nextjs.png'
import NodejsImg from '../images/skills-nodejs.png'
import TailwindImg from '../images/skills-tailwind.png'
import SassImg from '../images/skills-sass.png'
import PythonImg from '../images/skills-python.png'
import PostgreImg from '../images/skills-postgre.png'
import MysqlImg from '../images/skills-mysql.png'
import MongoImg from '../images/skills-mongo.png'


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    position: relative;

    .content {
      width: 921px;
      height: 583px;
      position: absolute;
      top: 140px;
      left: 359px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .content h1 {
      font-size: 48px;
      font-weight: 800;
      margin-top: -60px;
    }
    .skills {
      width: 234px;
      height: 45px;
      background-color: #7B4AE21A;
      color: #7B4AE2;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 16px;
      margin: 0 auto;
    }
    .skills h4 {
      font-weight: 700;
      font-size: 20px;
    }
    .icons {
      height: 146px;
      width: 921px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 32px;
    }
    .skills-content p {
      font-size: 24px;
      font-weight: 400;
      color: #FFFFFF80;
      margin-top: 10px;
    }
    

`

export default function Skills() {
  return (
    <Section>
      <div className="content">
        <div className="skills">
          <h4>‍💻 Skills · Learning</h4>
        </div>
        <h1>Technologies and skills</h1>
        <div className="skills-content">
          <p>Languages that I speak</p>
          <div className="skills-speak icons">
            <img src={ReactImg} alt="" />
            <img src={JavascriptImg} alt="" />
            <img src={CssImg} alt="" />
            <img src={HtmlImg} alt="" />
            <img src={FigmaImg} alt="" />
            <img src={GithubImg} alt="" />
            <img src={GitImg} alt="" />
          </div>
          <p>Languages that I'm learning</p>
          <div className="skills-learn icons">
          <img src={TypescriptImg} alt="" />
            <img src={NextjsImg} alt="" />
            <img src={NodejsImg} alt="" />
            <img src={TailwindImg} alt="" />
            <img src={SassImg} alt="" />
            <img src={PythonImg} alt="" />
            <img src={PostgreImg} alt="" />
            <img src={MysqlImg} alt="" />
            <img id='mongo' src={MongoImg} alt="" />
          </div>
        </div>
      </div>
    </Section>
  )
}
