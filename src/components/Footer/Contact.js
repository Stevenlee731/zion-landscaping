import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledContact = styled.div`
    grid-area: footer-contact;
    padding: 1rem;
    margin: 0 1rem;
`

const ContactHeader = styled.h2`
    margin: 0;
    padding-bottom: 1rem;
    font-size: 2rem;
    grid-column: 1/-1;
    border-bottom: 1px solid grey;
`

const StyledForm = styled.form`
    display: grid;
    margin-top: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
`

const StyledTextArea = styled.textarea`
    grid-column: 1/-1;

`

const ContactButton = styled.button`
    border-radius: 2px;
    border-color: #21a700;
    background-color: #7aba1e;
    widtH: 100%;
    grid-column: 1/-1;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    min-height: 40px;
`

const ContactUs = () => (
    <StyledContact>
        <ContactHeader>
            Contact Us!
        </ContactHeader>
        <StyledForm
            name="contact" 
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            <label for="name">
                Name: <input type="text" id="name"></input>
            </label>
            <label for="email">
                Email: <input type="text" id="email"></input>
            </label>
            <StyledTextArea name="textarea" rows="6" cols="50">Write something here</StyledTextArea>
            <ContactButton>Send</ContactButton>
        </StyledForm>
    </StyledContact>
)

export default ContactUs

