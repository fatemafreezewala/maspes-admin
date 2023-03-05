import React from 'react'
import {SvgXml} from 'react-native-svg'

const Icon4 = ({color}) => {
    const tab1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_414_2856)">
    <path d="M4 4H6V6H4V4Z" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 18H6V20H4V18Z" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18 4H20V6H18V4Z" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18 11H20V13H18V11Z" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11 11H13V13H11V11Z" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 11H6V13H4V11Z" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11 4H13V6H11V4Z" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11 18H13V20H11V18Z" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18 18H20V20H18V18Z" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_414_2856">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
`
return (<SvgXml xml={tab1}></SvgXml>)
}

export default Icon4