import { createGlobalStyle } from 'styled-components';

const Globalstyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'DM Sans';
    }

    img {
        width: 100%;
        height: auto;
    }

    h1 {
        font-weight: bolder;
    }

    button {
        color: #fff;
        border: none;
        background: black;
        padding: .5rem 1.5rem;
        font-weight: 700;
        font-size: .7rem;
        line-height: 1.6rem;
        letter-spacing: .1rem;
        text-transform: uppercase;
        cursor: pointer;
    }

    nav {
        border: 1px solid black;
        min-height: 4rem;
        padding: 0 10rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        svg {
            margin-right: 2rem;
        }
        button {
            @media (max-width: 600px) {
                display: none;
            }
        }
        // Laptop
        @media (max-width: 1020px) {
            padding: 0 2.2rem;
        
        }
        // Tablet 
        @media (max-width: 768px) {
            padding: 0 .5rem;
        }
        // Mobile View
        @media (max-width: 600px) {
            padding-top: 1rem;
        }
    }

    hr {
        height: .1rem;
        width: 80%;
        background: #c6c6c6;
        display: none; 
        // Mobile
        @media(max-width: 600px) {
            display: flex;
        }
    }

    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        li {
            margin: 0 1rem;
            text-transform: uppercase;
            font-weight: bold;
            line-height: 1.6rem;
            font-size: .75rem;
            cursor: pointer;
            letter-spacing: .2rem;
            @media (max-width: 600px) {
                padding: 1rem 0;
            }
        }
        // Mobile View
        @media (max-width: 600px) {
            overflow: hidden;
            flex-direction: column;
            width: 100%;
            margin-top: 1.8rem;
            z-index: 10;
        }
        button {
            @media (max-width: 600px) {
                display: flex;
                margin-bottom: 2rem;
            }
        }
    }
`
export default Globalstyle;