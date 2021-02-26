import React, { useState } from 'react';
import styled from 'styled-components';
// Animation
import { motion } from 'framer-motion';
import { slide } from '../Animation';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Line } from '../util';
import logo from '../images/home/desktop/chart.png';

const Nav = () => {
    // State
    const [menu, setMenu] = useState(false);
    return (
        <nav>
            {/* 1. Logo */}
            <Logo>
                <img src={logo} alt="logo" />
                <h1>PHOTOSNAP</h1>

            </Logo>

            {/* 2. Hamburger */}
            <Hamburger onClick={() => setMenu(!menu)}>
                <FontAwesomeIcon size='2x' icon={menu ? faTimes : faBars} />
            </Hamburger>
            {/* 3. Drop-down Menu */}
            <Menu
                menu={menu}
                variants={slide}
                initial='hidden'
                animate='show'
            >
                <li>Stories</li>
                <li>Features</li>
                <li>Pricing</li>
                <hr/>
                <button>
                    Get An Invite
                </button>
            </Menu>
            {/* 4. Invite Button */}
            <button>
                Get An Invite
            </button>
        </nav>
    )
}

const Logo = styled.div`
    display: flex;
    img {
        width: 2rem;
        height: auto;
    }
    margin-left: 2rem;
    h1 {
        margin-left: 1rem;
    }
`;

const Hamburger = styled.div`
    display: none;
    cursor: pointer;
    svg {
        transition: all .5s ease-in-out;
    }
    // Mobile View
    @media (max-width: 600px) {
        display: inline;
    }
`;

const Menu = styled(motion.ul)`
    height: ${({ menu }) => (menu ? '25rem' : '0')};
    transition: height .3s ease-in;
    button {
        display: none;
            // Mobile View
        @media (max-width: 600px) {
            display: flex;
        }
    }

`;


export default Nav;
