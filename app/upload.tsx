// view records
import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { Link } from "expo-router";
import AppLayout from "@/components/AppLayout";

export default function UploadScreen() {
  const [info, setInfo] = useState({
    description: '',
    amount: '',
    month: '',
    day: '',
    year: '',
    tax: '',
    state: ''
  });

  const handleInputChange = (field : string, value : string) => {
    setInfo({
      ...info,
      [field]: value,
    });
  };

  

  return (
    <AppLayout>
      <View style={styles.deductionContainer}>
        <Text style={styles.header}>Upload your sales tax info!</Text>
      </View>

      <Col>

        {/* Item Bought Field */}
        <Text>Description</Text>
        <Row>
          <TextInput 
          style={styles.textBox}
          placeholder="Enter Text"
          value={info.description}
          onChangeText={(newText) => handleInputChange("description", newText)} />
        </Row>

        {/* Amount Field */}
        <Text>Amount</Text>
        <Row>
          <TextInput 
          style={styles.textBox}
          placeholder="0"
          value={info.amount}
          onChangeText={(newText) => handleInputChange("amount", newText)} />
        </Row>

        {/* Date Field */}
        <Text>Date of Purchase</Text>
        <Row>
          <TextInput 
          style={styles.textBox}
          placeholder="Month"
          value={info.month}
          onChangeText={(newText) => handleInputChange("month", newText)} />

          <TextInput 
          style={styles.textBox}
          placeholder="Day"
          value={info.day}
          onChangeText={(newText) => handleInputChange("day", newText)} />

          <TextInput 
          style={styles.textBox}
          placeholder="Year"
          value={info.year}
          onChangeText={(newText) => handleInputChange("year", newText)} />
        </Row>

        {/* Tax Amount Field */}
        <Text>Sales tax Amount:</Text>
        <Row>
          <TextInput
          style={styles.textBox}
          placeholder="0"
          value={info.tax}
          onChangeText={(newText) => handleInputChange("tax", newText)} />
        </Row>


        {/* State of Purchase Field */}
        <Text>State of residence:</Text>
        <Row>
          <TextInput
          style={styles.textBox}
          placeholder="Enter State"
          value={info.state}
          onChangeText={(newText) => handleInputChange("state", newText)} />
        </Row>

      </Col>
      <Button title='Submit'/>
    </AppLayout>
  );
}

// generic row component wrapper
function Row({ children }: { children: React.ReactNode }) {
  return <View style={styles.row}>{children}</View>;
}

// generic two column component
const Col = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles[`2col`]}>{children}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  "2col": {
    borderWidth: 1,
    flex: 2,
    padding: 10,
    margin: 10,
  },
  deductionContainer: {
    padding: 10,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    textAlign: "center"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  textBoxContainer: {
    marginBottom: 20,
  },
  textBox: {
    flex: 1,
    height: 40,
    backgroundColor: 'lightgray',
    paddingLeft: 8,
    margin: 4
  },
  displayText: {
    fontSize: 20,
  },
});
