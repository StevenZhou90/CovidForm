import React from 'react';
import { View, ScrollView, Button } from 'react-native';
import Form from './form'
import Login from './login'

function Health({ navigation }) {
    
    return (
        <ScrollView>
           <View>
          <Form
        action={Login}
        buttonText='Submit'
        fields={{
            fever: {
                label: 'If you have a fever as a symptom input date of onset',
            },
            cough: {
                label: 'If you have a cough as a symptom input date of onset',
            },
            shortnessOfBreath : {
                label: 'If you have a shortness of breath  as a symptom input date of onset',
            },
            diarrheaGI : {
                label: 'If you have diarrhea/GI as a symptom input date of onset',
            },
            headache: {
                label: 'If you have a headache as a symptom input date of onset',
            },
            muscleAche : {
                label: 'If you have muscle ache(s) as a symptom input date of onset',
            },
            chills: {
                label: 'If you have chills as a symptom input date of onset',
            },
            soreThroat: {
                label: 'If you have a sore throat as a symptom input date of onset',
            },
            vomiting : {
                label: 'If you have vomiting as a symptom input date of onset',
            },
            abdominalPain : {
                label: 'If you have abdominal Pain as a symptom input date of onset',
            },
            nasalCongestion : {
                label: 'If you have nasal congestion as a symptom input date of onset',
            },
            lossOfSmell : {
                label: 'If you have loss of smell as a symptom input date of onset',
            },
            lossOfTaste : {
                label: 'If you have loss of taste as a symptom input date of onset',
            },
            malaiseFatigue : {
                label: 'If you have a malaise fatigue as a symptom input date of onset',
            },
            unlistedSymptoms : {
                label: 'If you have any other symptoms add them here along with the date of onset',
            },
            dateAndResultOfTest : {
                label: 'Date and result of first and last COVID-19 tests '
            }
            
  }}
/>  
            <Button title='Next' onPress={() => navigation.navigate('Risk')}
/>
        </View> 
        </ScrollView>
    )
  }

// const Health = () => {

//     return (
//         <ScrollView>
//            <View>
//           <Form
//         action={Login}
//         buttonText='Submit'
//         fields={{
//             fever: {
//                 label: 'If you have a fever as a symptom input date of onset',
//             },
//             cough: {
//                 label: 'If you have a cough as a symptom input date of onset',
//             },
//             shortnessOfBreath : {
//                 label: 'If you have a shortness of breath  as a symptom input date of onset',
//             },
//             diarrheaGI : {
//                 label: 'If you have diarrhea/GI as a symptom input date of onset',
//             },
//             headache: {
//                 label: 'If you have a headache as a symptom input date of onset',
//             },
//             muscleAche : {
//                 label: 'If you have muscle ache(s) as a symptom input date of onset',
//             },
//             chills: {
//                 label: 'If you have chills as a symptom input date of onset',
//             },
//             soreThroat: {
//                 label: 'If you have a sore throat as a symptom input date of onset',
//             },
//             vomiting : {
//                 label: 'If you have vomiting as a symptom input date of onset',
//             },
//             abdominalPain : {
//                 label: 'If you have abdominal Pain as a symptom input date of onset',
//             },
//             nasalCongestion : {
//                 label: 'If you have nasal congestion as a symptom input date of onset',
//             },
//             lossOfSmell : {
//                 label: 'If you have loss of smell as a symptom input date of onset',
//             },
//             lossOfTaste : {
//                 label: 'If you have loss of taste as a symptom input date of onset',
//             },
//             malaiseFatigue : {
//                 label: 'If you have a malaise fatigue as a symptom input date of onset',
//             },
//             unlistedSymptoms : {
//                 label: 'If you have any other symptoms add them here along with the date of onset',
//             },
//             dateAndResultOfTest : {
//                 label: 'Date and result of first and last COVID-19 tests '
//             }
            
//   }}
// />   
//         </View> 
//         </ScrollView>
//     )
    
// }

export default Health;