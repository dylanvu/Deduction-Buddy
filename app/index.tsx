import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import AppLayout from "@/components/AppLayout";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function Index() {
  return (
    <AppLayout>
      <View style={styles.deductionContainer}>
        <Text>Tax Deduction Amount:</Text>
        <Text>$1,000</Text>
        <Text>Sales Tax Total: $1,000</Text>
      </View>
      {/* the individual cards/buttons for navigation */}
      <View style={styles.buttonsContainer}>
        <Row>
          <Col>
            <Link href="/info" asChild>
              <Pressable style={styles.buttonText}>
                <Ionicons
                  name="information-circle-outline"
                  size={88}
                  color={Colors.darkBlue}
                />
                <Text
                  style={{
                    textAlign: "center",
                    marginLeft: 12,
                    marginRight: 12,
                  }}
                >
                  Learn about sales tax
                </Text>
              </Pressable>
            </Link>
          </Col>
          <Col>
            <Link href="/upload" asChild>
              <Pressable style={styles.buttonText}>
                <Feather name="upload" size={88} color={Colors.darkBlue} />
                <Text
                  style={{
                    textAlign: "center",
                    marginLeft: 12,
                    marginRight: 12,
                  }}
                >
                  Upload your receipt
                </Text>
              </Pressable>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link href="/view" asChild>
              <Pressable style={styles.buttonText}>
                <MaterialCommunityIcons
                  name="clipboard-text-outline"
                  size={88}
                  color={Colors.darkBlue}
                />
                <Text
                  style={{
                    textAlign: "center",
                    marginLeft: 12,
                    marginRight: 12,
                  }}
                >
                  View past receipts
                </Text>
              </Pressable>
            </Link>
          </Col>
        </Row>
      </View>
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
    borderWidth: 2,
    flex: 2,
    padding: 10,
    margin: 10,
    borderRadius: 15,
    borderColor: Colors.darkBlue,
  },
  deductionContainer: {
    padding: 10,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: Colors.lightBlue,
  },
  buttonText: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 40,
  },
});
