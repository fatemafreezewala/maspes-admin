import React from 'react'
import {SvgXml} from 'react-native-svg'

const Icon5 = ({color}) => {
    const tab1 = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17V5H10L12 7H21V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17Z" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 11V15" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10 13H14" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
`
return (<SvgXml xml={tab1}></SvgXml>)
}

export default Icon5