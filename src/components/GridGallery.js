import React, {Component} from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

const PhotoViewer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 100px);
    grid-auto-rows: 100px;
    grid-auto-flow: dense;
    justify-content: space-between;
    grid-gap: 20px;
    margin-bottom: 1rem;
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    grid-column: 1 / -1;
    margin-bottom: 1rem;
`

const ItemOverlay = styled.div`
    background: #ffc60032;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    position: relative;
    display: grid;
    justify-items: center;
    align-items: center;
    transition: 0.2s;
    transform: translateY(100%);

    button {
        background: none;
        border: 2px solid white;
        color: white;
        text-transform: uppercase;
        background: rgba(0, 0, 0, 0.7);
        padding: 5px;
    }
`

const GalleryImage = styled.div`
    overflow: hidden;
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: 1;
    grid-row: span 2;
    grid-column: span 3;

    img {
        grid-column: 1 / -1;
        grid-row: 1 / -1;
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
    }
`


export class GridGallery extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            gallery: [],
            selectedButton: 'patio',
        }

    }




    async componentDidMount() {
        try {
            const selector = this.state.selectedButton;
            const res = await fetch(`https://res.cloudinary.com/stevelee/image/list/${selector}.json`)
            const gallery = await res.json()
            this.setState({gallery: gallery.resources})
        }
        catch(error) {
            console.log(error)    
        }
    }


    handleSelect = list => e => {
        this.setState({selectedButton: list}, this.componentDidMount)
    }

    render() {
        return (
        <CloudinaryContext style={{ gridColumn: "2 / span 2"}} cloudName="stevelee">
                <ButtonGroup>
                    <button onClick={this.handleSelect('patio')}>Patio</button>
                    <button onClick={this.handleSelect('front-yard')}>Front Yard</button>
                    <button onClick={this.handleSelect('driveway')}>Driveway</button>
                    <button onClick={this.handleSelect('fire-place')}>Fire Place</button>
                    <button onClick={this.handleSelect('patio-cover')}>Patio Cover</button>
                    <button onClick={this.handleSelect('putting-green')}>Putting Green</button>
                    <button onClick={this.handleSelect('barbeque')}>Barbeque</button>
                    <button onClick={this.handleSelect('fire-place')}>Fire Place</button>
                    <button onClick={this.handleSelect('pool-deck')}>Pool Deck</button>
                    <button onClick={this.handleSelect('fountain')}>Fountain</button>
                </ButtonGroup>
            <PhotoViewer>
                {
                this.state.gallery.length > 0 && this.state.gallery.map((data, key) => {
                    return (
                                <GalleryImage className="gallery__image" key={data.public_id}>
                                            <Image publicId={data.public_id}>
                                                <Transformation
                                                    crop="scale"
                                                    width="300"
                                                    height="200"
                                                    dpr="auto"
                                                    responsive_placeholder="blank"
                                                />
                                            </Image>
                                            <ItemOverlay className="gallery__overlay">
                                                <button>View →</button>
                                            </ItemOverlay>
                                </GalleryImage>
                    )
                })
                }
            </PhotoViewer>
        </CloudinaryContext>
        );
    }
}