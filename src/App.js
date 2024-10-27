/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from 'react';
import Gallery from './Gallery';
import styled from 'styled-components';
import spotify from './logo.svg'
import facebook from './facebook-svgrepo-com.svg'

function App() {

  const [shrink, setShrink] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 50) { // Thay đổi giá trị này để điều chỉnh độ cao cuộn
      setShrink(true)
    } else {
      setShrink(false)
    }
  }

  const scrollToSpotify = () => {
    const iframe = document.getElementById('spotify-iframe')
    if (iframe) {
      iframe.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div>
      <H1 className={shrink ? 'shrink' : ''}>
        Môn Môn
        <a onClick={scrollToSpotify}>
          <Logo src={spotify} alt="Spotify Logo" />
        </a>
        <a href='https://www.facebook.com/profile.php?id=100085656587491' target="_blank" rel="noopener noreferrer">
          <Logo src={facebook} alt='Facebook logo' />
        </a>
      </H1>
      <Content>
        <Gallery />
        <SpotifyEmbed />
      </Content>
    </div>
  );
}

const SpotifyEmbed = () => {
  return (
    <IframeContainer>
      <iframe
        id='spotify-iframe'
        src="https://open.spotify.com/embed/playlist/0uXBsqXO56szOvxNgMnP0M?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
      </iframe>
    </IframeContainer>
  );
};

export default App;

const H1 = styled.div`
  font-family: "Dancing Script", cursive;
  margin: 0;
  overflow: hidden;
  transition: 0.4s;
  position: fixed;
  top: 0;
  background-color: rgba(248, 251, 238, 1);
  width: 100%;
  padding: 2.6rem 0.625rem;
  font-size: 2.5rem;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;

  &.shrink {
    font-size: 1.8rem; /* Kích thước khi thu nhỏ */
    padding: 1.8rem 0.625rem; /* Padding khi thu nhỏ */
    background-color: rgba(248, 251, 238, 0.6);
  }
`;

const Logo = styled.img`
  width: 30px; /* Kích thước logo */
  margin-left: 1rem; /* Khoảng cách giữa logo và tiêu đề */
  vertical-align: middle; /* Căn giữa logo với văn bản */
  opacity: 0.6;
`;

const IframeContainer = styled.div`
  margin: 2rem 0;
`;

const Content = styled.div`
  margin-top: 120px; /* Điều chỉnh khoảng cách dựa trên chiều cao của H1 */
`;