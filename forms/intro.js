import React from 'react';
import { View, Button } from 'react-native';
import Form from './form'
import Login from './login'

function Intro({ navigation }) {
    return (
        <View>
            <Form
         action={Login}
         buttonText='Submit'
         fields={{
             Name: {
                 label: 'Name',
             },
             dateOfBirth: {
                 label: 'Date of Birth',
             },
             primaryLanguage: {
                 label: 'Primary Language', 
             },
             useOfInterpreter: {
                 label: 'Use of Interpreter?',
             },
   }}
 /> 
            <Button title='Next' onPress={() => navigation.navigate('Demographics')}
/>
        </View>
        
     );
  }

// const Intro = () => {
//     return (
        
//        <Form
//         action={Login}
//         buttonText='Submit'
//         fields={{
//             Name: {
//                 label: 'Name',
//             },
//             dateOfBirth: {
//                 label: 'Date of Birth',
//             },
//             primaryLanguage: {
//                 label: 'Primary Language', 
//             },
//             useOfInterpreter: {
//                 label: 'Use of Interpreter?',
//             },
//   }}
// /> 
//     )
    
// }

export default Intro;