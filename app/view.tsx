// view sales tax
import { Text, View, StyleSheet, FlatList, TouchableOpacity }from "react-native";
import { Link } from "expo-router";
import AppLayout from "@/components/AppLayout";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import React, { useState } from "react"; 

export default function ViewScreen() {

  const data = [
    {
      id: 1,
      title: 'Item 1',
      description: 'This is the description for item 1',
    },
    {
      id: 2,
      title: 'Item 2',
      description: 'This is the description for item 2',
    },
    // ...
  ];
  const ExpandableItem = ({ title, description }) => {
    const [expanded, setExpanded] = useState(false);
  
    return (
      <View>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <Text>{title}</Text>
        </TouchableOpacity>
        {expanded && <Text>{description}</Text>}
      </View>
    );
  };

  const MyList = () => (
    <FlatList
      data={data}
      renderItem={({ item }) => <ExpandableItem title={item.title} description={item.description} />}
      keyExtractor={item => item.id.toString()}
    />
  );

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
    paddingHorizontal: 16,
    paddingTop: 10,
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