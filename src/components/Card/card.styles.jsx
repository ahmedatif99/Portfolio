import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { device } from "../../media"

export const Box = styled(motion.li)`
width: 16rem;
height: 40vh;
background-color: ${props => props.theme.text};
color:${props => props.theme.body};
padding: 1.5rem 2rem;
margin-right: 8rem;
border-radius: 10px 70px 10px 70px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid ${props => props.theme.body};
transition: all 0.2s ease;
&:hover{
background-color: ${props => props.theme.body};
color:${props => props.theme.text};
border: 1px solid ${props => props.theme.text};
}

@media ${device.tablet} {
        width: 150px;
    }
`
export const Title = styled.h2`
font-size: calc(1em + 0.5vw);
`

export const Description = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-family: 'Karla',sans-serif;
font-weight: 500;
`
export const Tags = styled.div`
border-top: 2px solid ${props =>props.theme.body};
padding-top: 0.5rem;
display:flex;
flex-wrap:wrap;
${Box}:hover &{
border-top: 2px solid ${props =>props.theme.text};
}
`
export const Tag = styled.span`
margin-right:1rem;
font-size:calc(0.8em + 0.3vw);
`

export const Footer = styled.footer`
display: flex;
justify-content: space-between;
`

export const Link = styled(NavLink)`
background-color: ${props =>props.theme.body};
color: ${props =>props.theme.text};
text-decoration: none;
padding:0.5rem calc(2rem + 2vw);
border-radius: 10px 50px 10px 50px;
font-size:calc(1em + 0.5vw);
${Box}:hover &{
    background-color: ${props =>props.theme.text};
    color: ${props =>props.theme.body};
}
`

export const Git = styled(NavLink)`
color: inherit;
text-decoration: none;
${Box}:hover &{
    &>*{
        fill:${props =>props.theme.text};
    }
}
`

// Framer motion configuration
export const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}