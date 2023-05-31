import { useState } from 'react';
import { StyleSheet, Text, TextInput,ToastAndroid, TouchableOpacity, View, Button } from 'react-native';
import { sendMail } from '../Utility/sendMail';


export const Homecreen = ()=>{

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const  handleSubmit = async () => {
    if(validateEmail(email) && validateMobileNumber(number)){
        sendMail(name , number, email, message);
       
        console.log('Submitted:', name, number, email, message);
    }
    else{
        ToastAndroid.show("PLease Provide Correct email and Mobile Number.", ToastAndroid.SHORT)
    }

  };

  function validateMobileNumber(number) {
    const regex = /^\d{10}$/; // 10 digits only
    return regex.test(number);
  }
  
  // Validate email address
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format validation
    return regex.test(email);
  }



  return (

    
    <View style={styles.container}>

    <Text style={styles.titleText}>Intern Task</Text>
       
          <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName} />
          <TextInput
              style={styles.input}
              placeholder="Number"
              value={number}
              onChangeText={setNumber}
              keyboardType="numeric" />
          <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address" />
          <TextInput
              style={styles.input}
              placeholder="Message"
              value={message}
              onChangeText={setMessage}
              multiline />
          <View style={styles.appButtonContainer}>

              <TouchableOpacity onPress={handleSubmit}>
                  <Text style={styles.appButtonText}>Button</Text>
              </TouchableOpacity>
          </View>
      </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  titleText : {
    fontSize : 30,
    fontFamily : 'Arial',
    style : 'bold',
    marginBottom : 100,
    textAlign: 'center'
  },
  input: {
    marginBottom: 10,
    padding: 10,
    margin : 5,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  messageInput: {
    height: 100,
  },
  buttonContainer : {
    alignSelf: 'center',
    width : 350,
    marginTop : 20,
    marginBottom: 20,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#4D73BD",
    borderRadius: 10,
    margin : 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
});

