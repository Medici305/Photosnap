import styled from 'styled-components';

export const Line = styled.div`
    height: .1rem;
    width: 80%;
    background: #c6c6c6;
    display: none;
    // Mobile
    @media(max-width: 600px) {
        display: flex;
    }
`;

// export const Shadow = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     min-height: 100vh;
//     background: rgba(0,0,0,.3);
//     //overflow-y: scroll;
// `;