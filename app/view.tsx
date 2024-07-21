// view sales tax
import { Text, View, StyleSheet, FlatList, TouchableOpacity }from "react-native";
import { Link } from "expo-router";
import AppLayout from "@/components/AppLayout";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import React, { useEffect, useState } from "react"; 
import { setItem, getItem, clear } from '@/utils/AsyncStorage';

export default function ViewScreen() {
  const [expanded, setExpanded] = useState(false);
  const [storedReceipts, setStoredReceipts] = useState<receiptData[]>([]);

  interface receiptData {
    id: number;
    description: string;
    amount: string;
    month: string;
    day: string;
    year: string;
    tax: string;
    state: string;
  }

  const data: receiptData[] = [
    { id: 1, description: "Test Item", amount: "100", month: "10", day: "01", year: "2002", tax: "8", state: "California"},
  ];


  useEffect(() => {
    const loadData = async () => {
      const data = await getItem('stored-receipts');
      if (data) {
        setStoredReceipts(data);
      }
      else {
        setStoredReceipts([]);
      }
    };

    loadData();
  }, []);

  interface ItemProps {
    description: string;
    day: string;
    month: string;
    year: string;
    tax: string;
  }

  const Item: React.FC<ItemProps> = ({description, day, month, year, tax}) => (
    <View>
      <Row>
        <Col>
          <Text style={Fonts.header}>{day}/{month}/{year}</Text>
          <Text style={Fonts.body}>{description}</Text>
        </Col>
        <Col>
          <Text style={Fonts.header}>Deduction Amount</Text>
          <Text style={Fonts.subheader}>{tax}</Text>
        </Col>
      </Row>
    </View>
  );
  
  const MyList = () => (
    <FlatList
      data={storedReceipts}
      renderItem={({ item }) => <Item description={item.description} day={item.day} month={item.month} year={item.year} tax={item.tax} />}
      keyExtractor={item => item.id.toString()}
    />
  );
  
  const clearRecords = async () => {
    await clear();
  }
  
  return (
    <AppLayout>

      
      {/*title of page*/}
      <View style={styles.titleContainer}>
        <View>
          <View style={styles.centeredView}>
              <Text style={[Fonts.header, {color: Colors.whiteForFont }]}>
                Receipts Record
              </Text>
          </View>
        </View>
      </View>

      {/*List of reciept info*/}
      <View>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        {/* <Text>{title}</Text> */}
      </TouchableOpacity>
      {/* {expanded && <Text>{description}</Text>} */}
    </View>
      

      

    <View style={styles.itemTouchable}>
      <MyList/>
    </View>

    <TouchableOpacity onPress={clear} style={styles.buttonContainer}>
      <View style={styles.centeredView}>
        <Text style={[Fonts.header, {color: Colors.whiteForFont}]}>
          Clear History
        </Text>
      </View>
    </TouchableOpacity>

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
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1
  },
  "2col": {
    flexDirection:"column",
  },
  titleContainer: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: Colors.inBetweenBlue,
    borderTopWidth: 7,
    borderTopColor: Colors.inBetweenBlue,
    padding: 30,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemContainer: { 
    marginBottom: 15, 
    padding: 10, 
    backgroundColor: "white", 
    borderRadius: 10, 
    elevation: 3, 
  }, 
  itemTouchable: { 
      borderRadius: 10, 
      overflow: "hidden", 
  }, 
  itemTitle: { 
      fontSize: 18, 
      fontWeight: "bold", 
      color: "#333", 
  }, 
  itemContent: { 
      marginTop: 10, 
      fontSize: 14, 
      color: "#666", 
  }, 

});