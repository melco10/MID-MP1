import React, {useState} from 'react'

import {  TextInput, StyleSheet, View, Text, Image , TouchableOpacity, ScrollView} from 'react-native';
import { Button, List, MD3Colors , IconButton} from 'react-native-paper';


export default function App () {
  

const [enteredGoalText, setEnteredGoalText ] = useState('');
const [courseGoals, setCourseGoals] =useState([]);

  function goalInputHandler (enteredText) {

    setEnteredGoalText(enteredText);
  }

  function addGoalHandler (){

    setCourseGoals ((currentCourseGoals) => [...currentCourseGoals, enteredGoalText]);
    
    setEnteredGoalText('');
  }

  function handleDelete(index) {
    setCourseGoals(currentCourseGoals => {
      // Create a copy of the current courseGoals array
      const updatedGoals = [...currentCourseGoals];
      // Remove the goal at the specified index
      updatedGoals.splice(index, 1);
      return updatedGoals;
    });
  }

  return (

<ScrollView>
  <View style={styles.appContainer}> 
    <Text style={styles.title}>Goal Creator</Text>
    <View style={styles.inputContainer}>  
      <TextInput 
        style={styles.textInput} 
        placeholder='Add Goal. eg...Eat many' 
        onChangeText={goalInputHandler} 
        value={enteredGoalText} 
      /> 
      <Button
        mode="contained"
        onPress={addGoalHandler}
        color="#1B1A55" 
        style={{ borderRadius:10 }}
      >
        +
      </Button>
    </View>

    <List.Section style={[styles.goalList, { flexDirection: 'row', flexWrap: 'wrap' }]}>
  {courseGoals.map((goal, index) => (
    <List.Item
      key={index}
      title={<Text style={styles.goalText}>{goal}</Text>}
      style={[
        styles.goalsContainer,
        {
          margin: 5,
          textAlign: 'center',
          fontSize: 25,
          backgroundColor: index % 4 === 0 ? '#332941' : index % 4 === 1 ? '#3B3486' : index % 4 === 2 ? '#F8E559' : '#864AF9',
        },
      ]}
      right={() => (
        <TouchableOpacity onPress={() => handleDelete(index)}>
          <Image
            style={{ width: 15, height: 15, marginLeft: 20, marginTop: 8 }}
            source={require('./assets/delete-1487-svgrepo-com.svg')}
          />
        </TouchableOpacity>
      )}
    />
  ))}
</List.Section>
  </View>
</ScrollView>

  );

}




const styles = StyleSheet.create({

appContainer: {
  paddingTop:20,
  paddingHorizontal: 16, 
},

title: {
    textAlign: 'center',
    fontWeight: '900', // Font weight 900
    padding: 20,
    fontSize: 20,
    color: '#f95738', // Text color
    textTransform: 'uppercase'
  },
inputContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: 24,
  borderBottomWidth: 2,

},
textInput: {
 borderWidth: 1,
 width: '100%',
 marginRight: 8,
 padding: 8,
 borderRadius: 10
},
goalsContainer: {
    backgroundColor: '#40A2E3',
    paddingRight: 15, 
},
goalText: {
  color: 'white'
}




});