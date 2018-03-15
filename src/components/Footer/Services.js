import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledServices = styled.div`
    grid-area: footer-services;
    padding: 1rem;
    display: grid;
    align-content: flex-start;
    align-items: start;
    grid-template-rows: 1.5fr repeat(auto, 1fr);
    margin: 0 1rem;
`

const ServiceChild = styled.li`
    margin-top: 1rem;
    list-style: none;

    a {
        color: white;
        text-decoration: none;
    }

    a:hover {
        color: #7aba1e;
    }
`

const ServiceHeader = styled.h2`
    margin: 0;
    padding-bottom: 1rem;
    font-size: 2rem;
    grid-column: 1/-1;
    border-bottom: 1px solid grey;
`



const Services = () => (
    <StyledServices>
        <ServiceHeader>
            Our Services
        </ServiceHeader>
        <ServiceChild>
            <Link to="/">Landscape Design</Link>
        </ServiceChild>
        <ServiceChild>
            <Link to="/">Landscape Installations</Link>
        </ServiceChild>
        <ServiceChild>
            <Link to="/">Landscape Maintenance</Link>
        </ServiceChild>
    </StyledServices>
)


export default Services

