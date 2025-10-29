import { Ionicons } from "@expo/vector-icons";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const notes = [
    {
    id: 1,
    image: "@/assets/images/prog1.png",
    title: "belajar",
    desc: "mudah paham",
    date: "12 juni 2024",
  },
    {
    id: 2,
    image: "@/assets/images/prog2.png",
    title: "belajar2",
    desc: "mudah paham2",
    date: "13 juni 2024",
  },
]

type Note = {
  id: number;
  image: string;
  title: string;
  desc: string;
  date: string;
}

const NoteItem = ({item} : { item: Note}) => {
  return (
<View style={styles.card}>
            <Image source={require('@/assets/images/prog1.png')} style={{width: 60, height: 60}} />

            <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.desc}</Text>
          <Text style={styles.cardDate}>{item.date}</Text>
          
            </View>
           </View>  
  )
}



export default function HomeScreen() {
  
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Image source={require('@/assets/images/logok.png')} style={{width: 32, height: 32}} />
            <Text style={styles.kodeinText}>Kodein</Text>
            <Text style={styles.notesText}>Notes</Text>
        </View>
        
        <View style={styles.content}>
           <FlatList 
           data={notes} renderItem={({ item }) => <NoteItem item={item} />}  keyExtractor={(item) => item.id.toString()} contentContainerStyle={{gap: 10}}/>
        </View>
        <TouchableOpacity style={styles.fab}>
          <Ionicons name="add" size={30} color="white" />

        </TouchableOpacity>

        
     </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: "white",
    },

    header:{
       flexDirection: "row",
       alignItems: "center",
       gap: 2,
       
    },

    kodeinText:{
        fontSize: 20,
        fontWeight: 700,
    },

    notesText:{
        fontSize: 20,
        fontWeight: 700,
        color: "#FF5B13",
    }, 

    content:{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
    },
    fab:{
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

    card:{
        flexDirection: "row",
        gap: 10,
        padding: 10,
        borderRadius: 5,
      borderWidth: 1,
        alignItems: "center",

    },
    cardContent:{
        flex: 1,
        justifyContent: "center",


    },

    cardContainer:{
      flex: 1,
      padding: 8,
      gap: 4

    },
    cardTitle:{
      fontSize: 16,
      fontWeight: "bold",
      

    },
    cardDesc:{
      fontSize: 16,

    },
    cardDate:{
      fontSize: 14,
      color: "gray",

    },
});