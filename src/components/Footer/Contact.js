import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledContact = styled.div`
    grid-area: footer-contact;
    padding: 1rem;
    margin: 0 1rem;
`

const ContactHeader = styled.div`
    margin: 1rem 0;
    font-size: 2rem;
`

const ContactUs = () => (
    <StyledContact>
        <form 
            name="contact" 
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            <input type="text" placeholder="Your Name" name="name"/>
            <button>Send</button>
        </form>
    </StyledContact>
)

export default ContactUs

