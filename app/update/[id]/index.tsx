import { notes } from "@/data/notesData";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const images = [
  require("@/assets/images/prog5.png"),
  require("@/assets/images/prog6.png"),
  require("@/assets/images/prog7.png"),
  require("@/assets/images/prog8.png"),
];

export default function UpdateScreen() {
  const [selectedImage, setSelectedImage] = useState<Number>(0);
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const note = notes.find((note) => note.id === Number(id));
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDesc(note.desc);

      const imageIndex = images.findIndex((img) => img === note.image);

      setSelectedImage(imageIndex);
    }
  }, [note]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="orange" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Update Note</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Note Title"
          style={styles.inputTitle}
          selectionColor={"orange"}
          value={title}
        />
        <TextInput
          placeholder="Note Content"
          style={styles.inputContent}
          selectionColor={"orange"}
          multiline={true}
          value={desc}
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {images.map((img, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.boxImage,
                selectedImage === index && styles.imageSelected,
              ]}
              onPress={() => setSelectedImage(index)}
            >
              <Image style={styles.image} source={img} />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
  inputTitle: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    backgroundColor: "white",
  },
  inputContent: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    backgroundColor: "white",
    height: 100,
    textAlignVertical: "top",
  },
  form: {
    padding: 20,
  },
  boxImage: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    backgroundColor: "white",
    marginBottom: "90%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  imageSelected: {
    borderWidth: 2,
    borderColor: "orange",
  },
  buttonContainer: {
    justifyContent: "flex-end",
  },
  button: {
    width: "100%",
    backgroundColor: "#FF5B13",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
