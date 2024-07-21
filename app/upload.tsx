// view records
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import AppLayout from "@/components/AppLayout";
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { SelectList } from 'react-native-dropdown-select-list';
import { setItem, getItem } from '@/utils/AsyncStorage';

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

  const data = [
    { key: 'Alabama', value: 'Alabama' },
    { key: 'Alaska', value: 'Alaska' },
    { key: 'Arizona', value: 'Arizona' },
    { key: 'Arkansas', value: 'Arkansas' },
    { key: 'California', value: 'California' },
    { key: 'Colorado', value: 'Colorado' },
    { key: 'Connecticut', value: 'Connecticut' },
    { key: 'Delaware', value: 'Delaware' },
    { key: 'Florida', value: 'Florida' },
    { key: 'Georgia', value: 'Georgia' },
    { key: 'Hawaii', value: 'Hawaii' },
    { key: 'Idaho', value: 'Idaho' },
    { key: 'Illinois', value: 'Illinois' },
    { key: 'Indiana', value: 'Indiana' },
    { key: 'Iowa', value: 'Iowa' },
    { key: 'Kansas', value: 'Kansas' },
    { key: 'Kentucky', value: 'Kentucky' },
    { key: 'Louisiana', value: 'Louisiana' },
    { key: 'Maine', value: 'Maine' },
    { key: 'Maryland', value: 'Maryland' },
    { key: 'Massachusetts', value: 'Massachusetts' },
    { key: 'Michigan', value: 'Michigan' },
    { key: 'Minnesota', value: 'Minnesota' },
    { key: 'Mississippi', value: 'Mississippi' },
    { key: 'Missouri', value: 'Missouri' },
    { key: 'Montana', value: 'Montana' },
    { key: 'Nebraska', value: 'Nebraska' },
    { key: 'Nevada', value: 'Nevada' },
    { key: 'New Hampshire', value: 'New Hampshire' },
    { key: 'New Jersey', value: 'New Jersey' },
    { key: 'New Mexico', value: 'New Mexico' },
    { key: 'New York', value: 'New York' },
    { key: 'North Carolina', value: 'North Carolina' },
    { key: 'North Dakota', value: 'North Dakota' },
    { key: 'Ohio', value: 'Ohio' },
    { key: 'Oklahoma', value: 'Oklahoma' },
    { key: 'Oregon', value: 'Oregon' },
    { key: 'Pennsylvania', value: 'Pennsylvania' },
    { key: 'Rhode Island', value: 'Rhode Island' },
    { key: 'South Carolina', value: 'South Carolina' },
    { key: 'South Dakota', value: 'South Dakota' },
    { key: 'Tennessee', value: 'Tennessee' },
    { key: 'Texas', value: 'Texa' },
    { key: 'Utah', value: 'Utah' },
    { key: 'Vermont', value: 'Vermont' },
    { key: 'Virginia', value: 'Virginia' },
    { key: 'Washington', value: 'Washington' },
    { key: 'West Virginia', value: 'West Virginia' },
    { key: 'Wisconsin', value: 'Wisconsin' },
    { key: 'Wyoming', value: 'Wyoming' },
  ]

  const handleInputChange = (field : string, value : string) => {
    setInfo({
      ...info,
      [field]: value,
    });
  };

  const clearInfo = () => {
    setInfo({
      description: '',
      amount: '',
      month: '',
      day: '',
      year: '',
      tax: '',
      state: ''
    });
  };

  const handleSubmit = async () => {
    console.log(info);

    let totalTax = await getItem("total-tax");
    if (totalTax) {
      totalTax = parseFloat(totalTax);
      let newTax = parseFloat(info.tax);
      totalTax = totalTax + newTax;
    }
    setItem("total-tax", totalTax);

    clearInfo();
  };

  

  return (
    <AppLayout>

      {/*title*/} 
     {/*title of page*/}
     <View style={[styles.titleContainer, styles.shadow]}>
        <View>
          <View style={[styles.titleContent, styles.centeredView]}>
              <Text style={Fonts.header}>
                Upload your sales tax info!
              </Text>
          </View>
        </View>
      </View>

      <View style = {{paddingTop: 50, paddingHorizontal: 20}}>

        {/* Item Bought Field */}
        <Text style={[Fonts.subheader, {paddingHorizontal: 5}]}>
          Description of Receipt:
        </Text>
        <Row>
          <TextInput 
          style={styles.textBox}
          value={info.description}
          onChangeText={(newText) => handleInputChange("description", newText)} />
        </Row>

        {/* Amount Field */}
        <Text style={[Fonts.subheader, {paddingHorizontal: 5, paddingTop: 25}]}>
          Item Amount:
        </Text>
        <Row>
          <TextInput 
          style={styles.textBox}
          value={info.amount}
          onChangeText={(newText) => handleInputChange("amount", newText)} />
        </Row>

        {/* Date Field */}
        <Text style={[Fonts.subheader, {paddingHorizontal: 5, paddingTop: 25}]}>
          Date of Purchase:
        </Text>

       <Row>
          <Col>
            <View>
              <TextInput 
              style={styles.dateContainer}
              value={info.month}
              onChangeText={(newText) => handleInputChange("month", newText)} />
            </View>
            <View style = {styles.centeredView}>
              <Text style={[Fonts.body, {color: Colors.inBetweenBlue}]}>month</Text>
            </View>
          </Col>
          
          <Col>
            <View>
              <TextInput 
              style={[styles.dateContainer]}
              value={info.day}
              onChangeText={(newText) => handleInputChange("day", newText)} />
            </View>
            <View style = {styles.centeredView}>
              <Text style={[Fonts.body, {color: Colors.inBetweenBlue}]}>day</Text>
            </View>
          </Col>

          <Col>
            <View>
              <TextInput 
              style={styles.dateContainer}
              value={info.year}
              onChangeText={(newText) => handleInputChange("year", newText)} />
            </View>
            <View style = {styles.centeredView}>
              <Text style = {[Fonts.body, {color: Colors.inBetweenBlue}]}>year</Text>
            </View>
          </Col>
      </Row>

        {/* Tax Amount Field */}
        <Text style={[Fonts.subheader, {paddingHorizontal: 5, paddingTop: 25}]}>
          Sales Tax Amount:
        </Text>
        <Row>
          <TextInput
          style={styles.textBox}
          value={info.tax}
          onChangeText={(newText) => handleInputChange("tax", newText)} />
        </Row>


        {/* State of Purchase Field */}
        <Text style={[Fonts.subheader, {paddingHorizontal: 5, paddingTop: 30}]}>
          State of residence:
        </Text>
        <View>
          <SelectList
            setSelected={(val : string) => handleInputChange("state", val)}
            data={data}
            save="value"
            boxStyles={styles.selectionContainer}
            dropdownStyles={styles.selectionList}
            dropdownItemStyles={styles.selection}
          />
        </View>

          
      
        {/*Continue Button*/}   
        <TouchableOpacity onPress={handleSubmit} style={styles.buttonContainer}>
          <View style={styles.centeredView}>
            <Text style={[Fonts.header, {color: Colors.whiteForFont}]}>
              Continue
            </Text>
          </View>
        </TouchableOpacity>

      
      </View >

      
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: "row",
  },
  "2col": {
    flex:1,

  },
  buttonContainer:{
    marginLeft: "70%",
    marginTop: 40,
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: Colors.darkBlue,
    borderColor: Colors.darkBlue,
    height: 45
  },

  selectionContainer:{
    flex: 2,
    height: 40,
    backgroundColor: Colors.white,
    borderColor: Colors.darkBlue,
    borderWidth: 2,
    margin: 4,
    borderRadius: 12,
  },

  selectionList:{
    width: '100%',
    maxHeight: 130,
    borderWidth: 0.1,
    borderColor: '#ccc',
    borderRadius: 1,
    marginTop: 0, 
  },

  selection:{
    width: '100%',
    maxHeight: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 0.1,
    borderColor: '#D9D9D9',
    backgroundColor: '#F4F4F4',
  },

  dateContainer:{
    height: 45,
    backgroundColor: Colors.white,
    borderColor: Colors.darkBlue,
    borderWidth: 2,
    marginLeft: 4,
    marginTop: 4,
    borderRadius: 12,
    width: "90%",
    textAlign: "center",


  },
  textBox: {
    flex: 1,
    height: 40,
    backgroundColor: Colors.white,
    borderColor: Colors.darkBlue,
    borderWidth: 2,
    paddingLeft: 8,
    margin: 4,
    borderRadius: 12,
    width: "100%"
  },
  displayText: {
    fontSize: 20,
  },

  titleContainer: {

    backgroundColor: Colors.lightBlue,
    borderTopWidth: 7,
    borderTopColor: Colors.darkBlue,
  },
  titleCol: {
    padding: 1,
    paddingLeft: 7,
    paddingRight: 7,
  },
  shadow: {
    shadowColor: Colors.darkBlue,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
  titleContent: {
    padding: 20,
  },
});
