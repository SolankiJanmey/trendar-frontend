import React from 'react'
import Svg, { Rect, Circle, Path } from 'react-native-svg';

export const LikedTabIcon = (props: any) => {
    return (
        <Svg width="60" height="48" viewBox="0 0 60 48" fill="none">
            <Path d="M25.5 16C22.4624 16 20 18.4625 20 21.5C20 27 26.5 32 30 33.1631C33.5 32 40 27 40 21.5C40 18.4625 37.5375 16 34.5 16C32.6398 16 30.9953 16.9235 30 18.3369C29.0047 16.9235 27.3601 16 25.5 16Z" fill={props?.color || "#ADAFBB"} stroke="#ADAFBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <Circle cx="38" cy="18" r="5" fill="#E94057" stroke="#F3F3F3" stroke-width="2" />
        </Svg>
    )
}
