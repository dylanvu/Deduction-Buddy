import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import Header from "@/components/Header";
import { Link } from "expo-router";

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
            <Link href="/info" asChild>
              <Pressable>
                <Text>Learn about tax</Text>
              </Pressable>
            </Link>
          </Col>
          <Col>
            <Link href="/upload" asChild>
              <Pressable>
                <Text>Upload Sales Tax</Text>
              </Pressable>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link href="/view" asChild>
              <Pressable>
                <Text>View Records</Text>
              </Pressable>
            </Link>
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
