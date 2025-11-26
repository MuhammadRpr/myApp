import { notes } from "@/data/notesData";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const note = notes.find((note) => note.id === Number(id));

  console.log(note);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="orange" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Note Details</Text>
      </View>
      <ScrollView>
        <Image source={note?.image} style={{ width: "100%", height: 220 }} />
        <View style={styles.content}>
          <Text style={styles.title}>{note?.title}</Text>
          <Text style={styles.date}>{note?.date}</Text>
          <Text style={styles.description}>{note?.desc}</Text>
        </View>
      </ScrollView>
      <View style={styles.bg}>
        <TouchableOpacity
          style={styles.update}
          onPress={() => router.push(`/update/${note?.id}`)}
        >
          <Text style={{ color: "white" }}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.delete}>
          <Text style={{ color: "white" }}>Delete</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 8,
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "gray",
  },
  description: {
    fontSize: 14,
    textAlign: "justify",
  },
  bg: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  update: {
    padding: 10,
    backgroundColor: "orange",
    borderRadius: 10,
    width: "48%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  delete: {
    padding: 10,
    backgroundColor: "red",
    borderRadius: 10,
    width: "48%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
