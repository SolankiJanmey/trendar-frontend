import React from 'react'
import Svg, { Path } from 'react-native-svg';

export const UserProfileTabIcon = (props: any) => {
    return (
        <Svg width="60" height="48" viewBox="0 0 60 48" fill="none">
            <Path d="M30 22C31.933 22 33.5 20.433 33.5 18.5C33.5 16.567 31.933 15 30 15C28.067 15 26.5 16.567 26.5 18.5C26.5 20.433 28.067 22 30 22Z" fill={props?.color || "#ADAFBB"} stroke="#ADAFBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M21 32.4V33H39V32.4C39 30.1598 39 29.0397 38.5641 28.184C38.1806 27.4314 37.5686 26.8195 36.816 26.436C35.9603 26 34.8402 26 32.6 26H27.4C25.1598 26 24.0397 26 23.1841 26.436C22.4314 26.8195 21.8195 27.4314 21.436 28.184C21 29.0397 21 30.1598 21 32.4Z" fill={props?.color || "#ADAFBB"} stroke="#ADAFBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}