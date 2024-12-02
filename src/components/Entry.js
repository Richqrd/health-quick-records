import React from "react";
import { 
    Box,
    Input,
    Text} from '@chakra-ui/react'

const Entry = (props) => {

    
    const handleInputChange = (event) => {
        const newValue = event.target.value;

        props.editFunc(prevState => ({
            ...prevState, // Copy all current attributes
            [props.label]: newValue // Update the specific attribute
        }));
        console.log("yes")
      };

    return (
    <Box mb={2}>
    <Text style={{ fontStyle: 'italic' }}>{props.label}</Text>
    
        {props.editable === 1 ? (
            <Input placeholder={props.query[props.label] || "Not found"} onChange={handleInputChange} />
        ) : (
            <span>{props.query[props.label] || 'Not found'}</span>
        )}

    </Box>
    );
}

export default Entry