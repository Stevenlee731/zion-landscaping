import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledDetails = styled.div`
    grid-area: footer-dev-details;
    margin-top: 1rem;
    padding: 1rem 0;
    display: grid;
    justify-content: center;
    border-top: 1px solid grey;
    width: 100%;
`

const DevDetails = () => (
    <StyledDetails>
        Copyright @ Zion Landscaping 2018
    </StyledDetails>
)

export default DevDetails