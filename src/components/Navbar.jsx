import React from 'react'
import styled from 'styled-components';
import logo from '../images/logo.png'

const Nav = styled.div`
    background-color: #7B4AE20D;
    scroll-snap-align: start;
    position: fixed;
    width: 1640px;
    height: 64px;
    margin-top: 50px;
    border-radius: 18px;
    a {
    text-decoration: none;
    }
    .links {
        color: #FFFFFF80;
    }
`
const Container = styled.div`
    width: 1640px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 23px;
`
const Logo = styled.div`
    width: 93px;
    margin-top: 5px;
`
const Links = styled.div`
    display: flex;
    gap: 17px;
    font-weight: 400;
    font-size: 18px;
`


export default function Navbar() {
  return (
    <Nav>
        <Container>
            <Logo>
                <img src={logo} alt="" style={{width:"93px"}}/>
            </Logo>
            <Links>
                <a className='links' href="#">Home</a>
                <a className='links' href="#">About</a>
                <a className='links' href="#">Projects</a>
                <a className='links' href="#">Skills</a>
                <a className='links' href="#">Contact</a>
            </Links>
        </Container>
    </Nav>
  )
}
