import { Text, View, StyleSheet } from "react-native";
import Header from "@/components/Header";

export default function Index() {
  return (
    <View>
      <Header />
      <View
        style={{
          flex: 2,
          marginHorizontal: "auto",
        }}
      >
        {/* the individual cards/buttons for navigation */}
        <Row>
          <Col>
            <Text>Learn about tax</Text>
          </Col>
          <Col>
            <Text>Upload Sales Tax</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text>View Records</Text>
          </Col>
        </Row>
      </View>
    </View>
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
});
