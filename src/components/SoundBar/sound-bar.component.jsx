import React, { useRef, useState } from 'react';

import music from '../../assets/audio/portfolio.mp3';
import { Box, Line } from './sound-bar.styles';

const SoundBar = () => {

    const ref = useRef(null);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

        if(!click){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }
    return (
        <Box onClick={() => handleClick()}>
            <Line click={click}/>
            <Line click={click}/>
            <Line click={click}/>
            <Line click={click}/>
            <Line click={click}/>


            <audio src={music} ref={ref}  loop />
        </Box>
    )
}

export default SoundBar
