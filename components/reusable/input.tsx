import React from 'react' ;
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

const Input = (props: TextInputProps) => {
    return (
        <TextInput
            style={[styles.input, props.style]}
            placeholderTextColor= "#5658b0"
            {...props}
        />
    );
};

const styles = StyleSheet.create ({
    input: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 10,
        borderColor: '#4d00c1',
        borderWidth: 1,
        width:  '100%',
        height: 40,
        marginBottom: 10,
        alignItems: 'center',
        fontWeight: "bold",
    }
})

export default Input;