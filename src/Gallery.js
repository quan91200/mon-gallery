import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import Img1 from './images/1.jpg'
import Img2 from './images/2.jpg'
import Img3 from './images/3.jpg'
import Img4 from './images/4.jpg'
import Img5 from './images/5.jpg'
import Img6 from './images/6.jpg'
import Img7 from './images/7.jpg'
import Img8 from './images/8.jpg'
import Img9 from './images/9.jpg'
import Img10 from './images/10.jpg'
import Img11 from './images/11.jpg'
import Img12 from './images/12.jpg'
import Img13 from './images/13.jpg'
import Img14 from './images/14.jpg'
import Img15 from './images/15.jpg'
import Img16 from './images/16.jpg'

const Gallery = () => {

    let data = [
        {
            id: 1,
            imgSrc: Img1
        },
        {
            id: 2,
            imgSrc: Img2
        },
        {
            id: 3,
            imgSrc: Img3
        },
        {
            id: 4,
            imgSrc: Img4
        },
        {
            id: 5,
            imgSrc: Img5
        },
        {
            id: 6,
            imgSrc: Img6
        },
        {
            id: 7,
            imgSrc: Img7
        },
        {
            id: 8,
            imgSrc: Img8
        },
        {
            id: 9,
            imgSrc: Img9
        },
        {
            id: 10,
            imgSrc: Img10
        },
        {
            id: 11,
            imgSrc: Img11
        },
        {
            id: 12,
            imgSrc: Img12
        },
        {
            id: 13,
            imgSrc: Img13
        },
        {
            id: 14,
            imgSrc: Img14
        },
        {
            id: 15,
            imgSrc: Img15
        },
        {
            id: 16,
            imgSrc: Img16
        },
    ]

    const [model, setModel] = useState(false)
    const [tempImgSrc, setTempImgSrc] = useState('')

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc)
        setModel(true)
    }

    const closeModal = () => {
        setModel(false)
    }

    return (
        <>
            <Modal open={model} onClick={closeModal}>
                <img
                    alt=''
                    src={tempImgSrc}
                />
            </Modal>
            <Container>
                {data.map((item) => {
                    return (
                        <Pics key={item.id} onClick={() => getImg(item.imgSrc)}>
                            <img
                                alt={item.description || 'Gallery image'}
                                src={item.imgSrc}
                                style={{ width: '100%' }}
                            />
                        </Pics>
                    )
                })}
            </Container>
        </>
    )
}

export default Gallery

const Container = styled.div`
    -webkit-column-count: 5;
    -moz-column-count: 5;
    column-count: 5;
    -webkit-column-width: 20%;
    -moz-column-width: 20%;
    column-width: 20%;
    padding: 0 1rem;

    @media (max-width: 1300px){
        -webkit-column-count: 4;
        -moz-column-count: 4;
        column-count: 4;
    }
    
    @media (max-width: 1200px) {
        -webkit-column-count: 3;
        -moz-column-count: 3;
        column-count: 3;
    }
`;

const Pics = styled.div`
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease;
    cursor: pointer;
    margin-bottom: 1rem;

    &:hover {
        transform: scale(1.01);
        -webkit-box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        filler: opacity(.8);
    }
`

const Modal = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: fixed;
    inset: 0;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    transition: opacity 0.4s ease, visibility 0.4s ease, transform 0.5s ease;
    opacity: 0;
    visibility: hidden;
    transform: scale(0);
    background-color: #000000;
    overflow-y: hidden;
    
    ${props => props.open && css`
        visibility: visible;
        opacity: 1;
        transform: scale(1);
    `}

    .img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        display: block;
        line-height: 0;
        box-sizing: border-box;
        padding: 1.25rem 1.25rem;
        margin: 0 auto;
    }
`