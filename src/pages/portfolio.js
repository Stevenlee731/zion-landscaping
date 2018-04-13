import React, {Component, Fragment} from 'react'
import Link from 'gatsby-link'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

class Portfolio extends Component {
  
  state = {
    gallery: []
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
    return (
      <Fragment>
        <h1>Porfolio</h1>
          <CloudinaryContext cloudName="CLOUDNAME">
              {
                  this.state.gallery.map(data => {
                      return (
                          <div className="responsive" key={data.public_id}>
                              <div className="img">
                                  <a target="_blank" href={`https://res.cloudinary.com/christekh/image/upload/${data.public_id}.jpg`}>
                                      <Image publicId={data.public_id}>
                                          <Transformation
                                              crop="scale"
                                              width="300"
                                              height="200"
                                              dpr="auto"
                                              responsive_placeholder="blank"
                                          />
                                      </Image>
                                  </a>
                                  <div className="desc">Created at {data.created_at}</div>
                              </div>
                          </div>
                      )
                  })
              }
          </CloudinaryContext>
      </Fragment>
    )
  }
}

export default Portfolio

