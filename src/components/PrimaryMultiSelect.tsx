import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import { Colors } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const PrimaryMultiSelect = ({
    dropDownStyle, containerStyle, placeholderStyle,
    selectedTextStyle, data, labelField, valueField, placeholder, onBlur,
    value, onChange, selectedStyle
}: any) => {

    const [selected, setSelected] = useState([]);

    const getSelectedValues = (item:any) => {
        setSelected(item);
        onBlur(item);
    }

    return (
        <View style={styles.container}>
            <MultiSelect
                style={[styles.dropdown, dropDownStyle]}
                containerStyle={[containerStyle, { marginTop: hp(-5) }]}
                placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
                selectedTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
                data={data}
                labelField={labelField || "label"}
                valueField={valueField || "value"}
                placeholder={placeholder || "Select item"}
                value={value || selected}
                onChange={item => {getSelectedValues(item) }}
                selectedStyle={[styles.selectedStyle, selectedStyle]}
                // onBlur={getSelectedValues}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    dropdown: {
        height: 50,
        backgroundColor: 'transparent',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 14,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    icon: {
        marginRight: 5,
    },
    selectedStyle: {
        borderRadius: 12,
    },
})

