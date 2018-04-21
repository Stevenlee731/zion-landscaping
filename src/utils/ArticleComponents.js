import React, {Component} from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

function textAlignment ({ alignment }) {
    let $alignment;
    if (alignment == "center") $alignment = "center";
    else if (alignment == "left") $alignment = "left";
    else if (alignment == "right") $alignment = "right";
    else alignment = "center";
 
    return `text-align: ${$alignment}`;
}

export function positionAlignment ({ position, isCSS }) {
    let $position;
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
    background-color: rgba(0,0,0,0.3);
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

const ServiceList = styled.ul`
  list-style-type: none;
  text-align: center;
  padding: 0; 
`



export const ServiceContainer = () => (
  <StyledContainer>
    <HeaderTwo alignment="center">
      Our Services
    </HeaderTwo>
    <ServiceList>
      <li>Innovative Landscape Design</li>
      <li>3D Design Consultation</li>
      <li>Luxury Swimming Pools & Spas</li>
      <li>Custom Concrete or Stone Decking</li>
      <li>Custom Masonry Work</li>
      <li>Built-In Barbecues</li>
      <li>Outdoor Fireplaces</li>
      <li>Waterfalls, Fountains & Rock Design</li>
      <li>Patio Covers</li>
      <li>Premium Trex Decking</li>
      <li>Professional Plant Designers</li>
    </ServiceList>
  </StyledContainer>
)

export const StyledContainer = styled.div`
  ${positionAlignment};
  ${textAlignment};
`