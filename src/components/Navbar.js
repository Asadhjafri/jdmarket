import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import Menu from '../images/menu.svg';


const Nav = styled.nav`
    height:60px;
    display:flex;
    justify-content:space-between;
    padding:1rem 2rem;
    z-index:100;
    position:fixed;
    width:100%;
    background:#000;
`;

// Created custom styles to be re used in different parts.
const NavLink = css `
    color:#fff;
    display:flex;
    align-items:center;
    padding: 0 1rem;
    height:100%;
    cursor:pointer;
    text-decoration:none;
`;

// call navlink custom style to be used for logo.
const Logo = styled(Link)`
    ${NavLink};
    font-size:1.1rem;
    font-style:italic;
`;

// set media query for navlinks to change to menu bars for mobile/tablet.
const MenuBars=styled.i`
    display:none;

    @media screen and (max-width:768px){
        display:block;
        background-image: url(${Menu});
        background-size: contain;
        height:28px;
        width:28px;
        cursor:pointer;
        position:absolute;
        right: 100px;
        top:33px;
        ${'' /* transform:translate(1425%, 65%) */}
    }
`;

// navmenu div contains all navlinks. Added media query to make links disappear when on mobile/tablet.
const NavMenu=styled.div`
    display:flex;
    align-items:center;
    margin-right:20px;

    @media screen and (max-width:768px){
        display:none;
    }
`;

// call navlink custom style and adding hover effect to individual links.
const NavMenuLinks=styled(Link)`
    ${NavLink};
    &:hover{
        transform:translateY(-2px)
    }
`;

// styled nav button. Added media query to make button disappear when on mobile/tablet.
const NavBtn=styled.div`
    display:flex;
    align-items:center;
    margin-right:24px;

    @media screen and (max-width:768px){
        display:none;
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo to="/">JDM マチセチミ</Logo>
            <MenuBars />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}> 
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'>
                    Contact Us
                </Button>
            </NavBtn>
        </Nav>
    )
};

export default Navbar;