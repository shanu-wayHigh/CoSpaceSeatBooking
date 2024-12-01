import React from 'react';
import globalStore from 'src/Store/store';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { observer } from 'mobx-react';

interface headingTextProps {
    text?: string
}

const HeadingText = observer((props = {} as headingTextProps) => {
    const { text = ''} = props || {};
    
    return (
        globalStore?.isMobile ? (
            <div className='flexWrapper'>
              <h2 className='headingText'>
                {text}
              </h2>
              <span className='rightArrowIcon'>
                <ArrowRightAltIcon/>  
              </span>
            </div>
          ) 
        :
        <h2 className='flexWrapper headingText'>
            {text}
        </h2>
    )
})


export {HeadingText}
export default HeadingText