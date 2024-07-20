import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import AppLayout from "@/components/AppLayout";

export default function Index() {
  return (
    <AppLayout>
      <View style={styles.deductionContainer}>
        <Text>Tax Deduction Amount:</Text>
        <Text>$1,000</Text>
        <Text>Sales Tax Total: $1,000</Text>
      </View>
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
});
