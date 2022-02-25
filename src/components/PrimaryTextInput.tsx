import React from "react";
import { StyleSheet, TextInput } from "react-native";

export const PrimaryTextInput = (props: any) => {
    const {
        inputRef, value, onChangeText, inputStyle, placeholder, keyboardType, secureTextEntry, multiline, numberOfLines, maxLength, onBlur, onFocus, onSubmitEditing
    } = props;
    return (
        <TextInput
            ref={inputRef}
            value={value}
            onChangeText={onChangeText}
            style={inputStyle}
            placeholder={placeholder}
            keyboardType={keyboardType || "default"}
            secureTextEntry={secureTextEntry || false}
            multiline={multiline || false}
            numberOfLines={numberOfLines || 2}
            maxLength={maxLength}
            onBlur={onBlur}
            onFocus={onFocus}
            onSubmitEditing={onSubmitEditing}
        />
    )
};

const styles = StyleSheet.create({
    defaultStyle: {
        color: "#000",
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 24,

    },
});
