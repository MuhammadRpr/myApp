import { notes } from "@/data/notesData";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Note = {
  id: number;
  image: ImageSourcePropType | { uri: string };
  title: string;
  desc: string;
  date: string;
};

const NoteItem = ({ item }: { item: Note }) => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push(`/detail/${item.id}`)}>
      <View style={styles.card}>
        <Image style={{ width: 60, height: 60 }} source={item.image} />

        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDesc}>{item.desc}</Text>
          <Text style={styles.cardDate}>{item.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function HomeScreen() {
  const router = useRouter();
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("@/assets/images/logok.png")}
            style={{ width: 32, height: 32 }}
          />
          <Text style={styles.kodeinText}>Kodein</Text>
          <Text style={styles.notesText}>Notes</Text>
        </View>

        <View style={styles.content}>
          <FlatList
            data={notes}
            renderItem={({ item }) => <NoteItem item={item} />}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ gap: 10, flexGrow: 1 }}
            ListEmptyComponent={() => <EmptyData />}
          />
        </View>
        <TouchableOpacity
          style={styles.fab}
          onPress={() => router.push("/add")}
        >
          <Ionicons name="add" size={30} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const EmptyData = () => {
  return (
    <View style={styles.emptyContainer}>
      <Image
        source={require("@/assets/images/prog4.png")}
        style={{ width: 125, height: 125 }}
      />
      <Text style={styles.emptyTitle}>Add your first note</Text>
      <Text style={styles.emptyDesc}>
        Save your thoughts, tasks or inspirations
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },

  kodeinText: {
    fontSize: 20,
    fontWeight: 700,
  },

  notesText: {
    fontSize: 20,
    fontWeight: 700,
    color: "#FF5B13",
  },

  content: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  fab: {
    backgroundColor: "#FF5B13",
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 70,
    right: 20,
  },

  card: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: "center",
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
  },

  cardContainer: {
    flex: 1,
    padding: 8,
    gap: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardDesc: {
    fontSize: 16,
  },
  cardDate: {
    fontSize: 14,
    color: "gray",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  emptyDesc: {
    fontSize: 14,
    color: "gray",
  },
});
