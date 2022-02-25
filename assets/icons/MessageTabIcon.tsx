import React from 'react'
import Svg, { Rect, Path } from 'react-native-svg';

export const MessageTabIcon = (props: any) => {
    return (
        <Svg width="60" height="48" viewBox="0 0 60 48" fill="none">
            <Path d="M40 24C40 29.5229 35.5229 34 30 34C27.0133 34 20 34 20 34C20 34 20 26.5361 20 24C20 18.4771 24.4771 14 30 14C35.5229 14 40 18.4771 40 24Z" fill={props?.color || "#ADAFBB"} stroke="#ADAFBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M25 21H34" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M25 25H34" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M25 29H30" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}
