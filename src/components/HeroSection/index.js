import React, {useState} from 'react'
import Video from '../../videos/video2.mp4'
import { Button } from '../ButtonElement'

import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP,
    HeroH3, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = ()=> {
        setHover(!hover);
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Ice Calee</HeroH1>
                <HeroP>Front-end Developer</HeroP>
                {/* <HeroP>Based in Seoul, South Korea.</HeroP> */}
                <HeroH3>Welcome To My Website</HeroH3>
                {/* <HeroP>HTML5 / CSS3 (Sass) / JavaScript (React.js) / Node.js </HeroP> */}
                <HeroBtnWrapper>
                    <Button to="resume" onMouseEnter={onHover} onMouseLeave={onHover}>Get my resume{hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
