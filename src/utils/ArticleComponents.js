import React from 'react'
import styled from 'styled-components'
import SwipeableViews from 'react-swipeable-views';
import { virtualize, autoPlay } from 'react-swipeable-views-utils';



function textAlignment ({ alignment }) {
    let $alignment;
    if (alignment == "center") $alignment = "center";
    else if (alignment == "left") $alignment = "left";
    else if (alignment == "right") $alignment = "right";
    else alignment = "center";
 
    return `text-align: ${$alignment}`;
}

function positionAlignment ({ position, isCSS }) {
    let $position;
    console.log(isCSS, 'steve')
    if (position === "full") $position = "2 / span 2";
    else if (position === "left") $position = "2 / span 1";
    else if (position === "right") $position = "3 / span 1";
    else $position = "2 / span 2";

    if (isCSS === true)
    {
        return { gridColumn: $position }
    }
    else {
        return `grid-column: ${$position}`
    }

}

export const Paragraph = styled.p`
  ${positionAlignment};
  ${textAlignment};
`

export const HeaderOne = styled.h1`
  ${positionAlignment};
  ${textAlignment};
`

export const HeaderTwo = styled.h2`
  ${positionAlignment};
  ${textAlignment};
`

export const Overlay = styled.div`
    grid-area: banner;
    z-index: 4;
    position: relative;
    background-color: rgba(0,0,0,0.5);
`

export const Divider = styled.hr`
  width: ${props => props.half ? "50%" : "100%"};
  ${positionAlignment};
  color: ${props => props.primary ? 'grey' : '#7aba1e'}
`

export const MaskHeader = styled.h1`
    grid-column: 2/ span 2;
    grid-row: 1/ span 1;
    z-index: 5;
    font-size: 3rem;
    align-self: center;
    text-align: center;
    color: white;
`


const AutoPlaySwipe = autoPlay(SwipeableViews)

const styles = {
    slide: {
      padding: 15,
      minHeight: 100,
      color: '#fff',
    },
    slide1: {
      background: '#FEA900',
    },
    slide2: {
      background: '#B3DC4A',
    },
    slide3: {
      background: '#6AC0FF',
    },
  };
  
export const Gallery = (props) => {
    const style = positionAlignment(props)
    return (
    <AutoPlaySwipe style={style} interval={4000} enableMouseEvents={true} >
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
        slide n°1
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>
        slide n°2
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>
        slide n°3
        </div>
    </AutoPlaySwipe>
    )
};
