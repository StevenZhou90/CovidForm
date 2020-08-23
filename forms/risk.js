import React from 'react';
import { View, Button } from 'react-native';
import Form from './form'
import Login from './login'

const submit = async () => {
    const values = getValues();
    const result = await action(...values);
    console.log(result);
  };

const Risk = () => {
    return (
        <View>
           <Form
        action={Login}
        buttonText='Submit'
        fields={{
            knownContact : {
                label: 'Known contact with confirmed case',
            },
            occupation : {
                label: 'Occupation and workplace, if employed ',
            },
            firstResponder : {
                label: 'If the patient is a Health Care Provider or First responder gather name and address of setting and whether it is a hospital, ambulatory care, urgent care, long-term care, hospice, ambulance company, fire department, law enforcement, etc. ',
            },
            setting : {
                label: 'If the patient lives or works in a congregate setting, gather name and address of setting and whether it is correctional facility, dorm, group home, nursing home, homeless shelter, food processing plant, multi-family household, multi-generational or high occupancy household, etc ',
            },
  }}
/> 
            <Button title='Submit' onPress={submit}/>        
            </View>
       
    )
    
}

export default Risk;