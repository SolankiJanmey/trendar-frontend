import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RangeSlider, { Slider } from 'react-native-range-slider-expo';
import { Colors } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const PrimaryRange = ({
    minValue, maxValue, setMinValue, setMaxValue
}: any) => {

    const [fromValue, setFromValue] = useState(minValue);
    const [toValue, setToValue] = useState(maxValue);

    return (
            <View style={{ marginBottom:hp(-5)}}>
                <RangeSlider
                    min={minValue}
                    max={maxValue}
                    fromKnobColor={"#E94057"}
                    toKnobColor={"#E94057"}
                    fromValueOnChange={setMinValue}
                    toValueOnChange={setMaxValue}
                    showRangeLabels={false}
                />
                {/* <Text>from value:  {fromValue}</Text>
                <Text>to value:  {toValue}</Text> */}
            </View>

    );
};

const styles = StyleSheet.create({
    container: {  },
})

