import styled from 'styled-components'
import { darkTheme } from '../Themes/themes.component'
import { device } from '../../media'




export const LogoButton = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
font-family: 'Damion',cursive;
position: fixed;
left: 2rem;
top: 2rem;
z-index:3;

@media ${device.mobileM} {
    font-size: large;
}

@media ${device.mobileL} {
    font-size: x-large;
}
`