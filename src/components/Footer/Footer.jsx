import * as React from 'react';
import { styled } from '@mui/system';
import './Footer.css'
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import AppStore from 'E:/ReactHomeWork/watchit/src/image/AppStore.png';
import GooglePlay from 'E:/ReactHomeWork/watchit/src/image/GooglePlay.png';

const StyledGrayCircle = styled('div')({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: 'rgba(53,58,58,1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '15px'
});
const Footer = () =>{
return(
<footer>
    <div className='footer-section1'>
        <div className='footer-links'>
            <span><a href='#' className='link'>Terms Of Use</a></span>
            <span><a href='#' className='link'>Privacy-Policy</a></span>
            <span><a href='#' className='link'>FAQ</a></span>
            <span><a href='#' className='link'>Watch List</a></span>
        </div>
        <div className='footerText'>
            <p>
                ©2023 WATCHIT. All Rights Reserved. All videos and shows on this platform
                are trademarks of, and all related images and content are the property of,
                Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.
            </p>
        </div>
    </div>

    <div className='footer-section2'>
        <div className='section2-title'>
            <p>Follow Us:</p>
        </div>
        <div className='icon'>
            <StyledGrayCircle className='facehover'>
                <FacebookTwoToneIcon sx={{width: "30px", height: "30px"}}/>
            </StyledGrayCircle>
            <StyledGrayCircle className='twitterhover'>
                <TwitterIcon/>
            </StyledGrayCircle>
            <StyledGrayCircle className='googlehover'>
                <GoogleIcon/>
            </StyledGrayCircle>
            <StyledGrayCircle className='githover'>
                <GitHubIcon/>
            </StyledGrayCircle>
        </div>
    </div>

        <div className='footer-section3'>
            <div className='section3-title'>
                <p>Watchit App</p>
            </div>
            <div className='section3-icon'>
                <a href='#'><img className='googleIcon' src={GooglePlay} alt='Google Play'/></a>
                <a href='#'><img className='appstoreIcon' src={AppStore} alt='App Store'/></a>
            </div>
        </div>
</footer>
)}


export default Footer;