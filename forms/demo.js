import React from 'react';
import { ScrollView, View, Button } from 'react-native';
import Form from './form'
import Login from './login'

function Demo({ navigation }) {
    return (
        <ScrollView>
        <View> 
           <Form
            action={Login}
            buttonText='Submit'
            fields={{
                preferredName : {
                    label: 'Preferred Name',
                },
                gender: {
                    label: 'Gender',
                },
                address: {
                    label: 'Address', 
                },
                tribalAffiliation : {
                    label: 'Tribal Affiliation ',
                },
                gender: {
                    label: 'Gender',
                },
                phoneumber : {
                    label: 'Phone Number ',
                },
                emailAddress : {
                    label: 'Email Address ',
                    inputProps: {
                        keyboardType: 'email-address',
                      },
                },
                okToText  : {
                    label: 'Ok to Text ',
                },
                okEmail : {
                    label: 'Ok email ',
                },
                race: {
                    label: 'Race',
                },
                bestWayToReach: {
                    label: 'Best way to reach patient for follow up ',
                },
                dateOfInterview: {
                    label: 'Date of interview, along with any dates of interview attempts ',
                },
                clinicalCourse: {
                    label: 'Does patient’s COVID-19 clinical course included any of the following: hospitalization, intensive care unit (ICU), ventilator, extracorporeal membrane oxygenation (ECMO), other clinical management or pneumonia, stroke, myocardial infarction (heart attack), among other complications. '
                },
                preexistingConditions: {
                    label: 'Preexisting conditions ex: chronic lung disease, diabetes, severe obesit'
                }
      }}
    /> 
                    <Button title='Next' onPress={() => navigation.navigate('Health')}
/>
        </View>
        </ScrollView>
        )
  }
  
// const Demo = () => {
//     return (
//     <ScrollView>
//     <View> 
//        <Form
//         action={Login}
//         buttonText='Submit'
//         fields={{
//             preferredName : {
//                 label: 'Preferred Name',
//             },
//             gender: {
//                 label: 'Gender',
//             },
//             address: {
//                 label: 'Address', 
//             },
//             tribalAffiliation : {
//                 label: 'Tribal Affiliation ',
//             },
//             gender: {
//                 label: 'Gender',
//             },
//             phoneumber : {
//                 label: 'Phone Number ',
//             },
//             emailAddress : {
//                 label: 'Email Address ',
//                 inputProps: {
//                     keyboardType: 'email-address',
//                   },
//             },
//             okToText  : {
//                 label: 'Ok to Text ',
//             },
//             okEmail : {
//                 label: 'Ok email ',
//             },
//             race: {
//                 label: 'Race',
//             },
//             bestWayToReach: {
//                 label: 'Best way to reach patient for follow up ',
//             },
//             dateOfInterview: {
//                 label: 'Date of interview, along with any dates of interview attempts ',
//             },
//             clinicalCourse: {
//                 label: 'Does patient’s COVID-19 clinical course included any of the following: hospitalization, intensive care unit (ICU), ventilator, extracorporeal membrane oxygenation (ECMO), other clinical management or pneumonia, stroke, myocardial infarction (heart attack), among other complications. '
//             },
//             preexistingConditions: {
//                 label: 'Preexisting conditions ex: chronic lung disease, diabetes, severe obesit'
//             }
//   }}
// /> 
//     </View>
//     </ScrollView>
//     )
    
// }

export default Demo;