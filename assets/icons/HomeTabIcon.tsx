import React from 'react'
import Svg, { Rect } from 'react-native-svg';

export const HomeTabIcon = (props: any) => {
    return (
        <Svg width="60" height="48" viewBox="0 0 60 48" fill="none">
            <Rect x="27.499" y="16.4976" width="13" height="18" rx="2" fill={props?.color || "#ADAFBB"} stroke="#F3F3F3" />
            <Rect x="18.3916" y="16.489" width="13" height="18" rx="2" transform="rotate(-15 18.3916 16.489)" fill={props?.color || "#ADAFBB"} stroke="#F3F3F3" />
        </Svg>
    )
}
