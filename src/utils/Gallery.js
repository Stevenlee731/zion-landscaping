import React, {Component} from 'react'
import styled from 'styled-components'
import SwipeableViews from 'react-swipeable-views';
import { virtualize, autoPlay } from 'react-swipeable-views-utils';
import Img from 'gatsby-image'
import { HeaderTwo, positionAlignment } from './ArticleComponents';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

const AutoPlaySwipe = autoPlay(SwipeableViews)

// const styles = {
//     slide: {
//       padding: 15,
//       minHeight: 300,
//       color: '#fff',
//     },
//     slide1: {
//       background: '#FEA900',
//     },
//     slide2: {
//       background: '#B3DC4A',
//     },
//     slide3: {
//       background: '#6AC0FF',
//     },
//   };
  
// const Gallery = (props) => {
//     return (
//       <CloudinaryContext cloudName="stevelee">
//         <AutoPlaySwipe interval={400000} enableMouseEvents={true} >
        
//         </AutoPlaySwipe>
//     </CloudinaryContext>
//     )
// };

export class GalleryContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gallery: []
    }
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://res.cloudinary.com/stevelee/image/list/front-yard.json')
      const gallery = await res.json()
      this.setState({gallery: gallery.resources})
    }
    catch(error) {
      console.log(error)
    }
  }

  render() {
    let x = {color: "black"}
    console.log(this.props)
    const style = Object.assign({}, positionAlignment(this.props), x)

    return (
      <div style={style}>
        <HeaderTwo alignment="center">
          Check Out Our Work
        </HeaderTwo>

        {this.state.gallery === 'steve' ? <div>steve</div> : <Gallery gallery={this.state.gallery} />}
      </div>
    )
  }
}