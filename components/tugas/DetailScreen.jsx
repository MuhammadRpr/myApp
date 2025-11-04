import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.appBar}>
                <Ionicons name="arrow-back" size={24} color="orange" />
                <Text style={styles.appBarTitle}>Note Details</Text>
            </View>
            <ScrollView>
                <Image
                    source={require("@/assets/images/prog0.png")}
                    style={{ width: '100%', height: 220 }} />
                <View style={styles.content}>
                    <Text style={styles.title}>Belajar Programming</Text>
                    <Text style={styles.date}>Selasa, 13 Mei 2025</Text>
                    <Text style={styles.description}>Mulailah dengan memahami dasar JavaScript seperti fungsi, array, dan async/await. Pelajari konsep component di React dan gunakan functional component serta hooks seperti useState dan useEffect. Bangun proyek kecil seperti to-do list untuk latihan.

                    </Text>
                    <Text style={styles.description}>Gunakan dokumentasi resmi React dan manfaatkan React Developer Tools untuk debugging. Terakhir, bergabunglah dengan komunitas agar semangat belajar tetap terjaga.

                    </Text>
                    <Text style={styles.description}>Gunakan dokumentasi resmi React dan manfaatkan React Developer Tools untuk debugging. Terakhir, bergabunglah dengan komunitas agar semangat belajar tetap terjaga.

                    </Text>
                    <Text style={styles.description}>Gunakan dokumentasi resmi React dan manfaatkan React Developer Tools untuk debugging. Terakhir, bergabunglah dengan komunitas agar semangat belajar tetap terjaga.

                    </Text>
                    <Text style={styles.description}>Gunakan dokumentasi resmi React dan manfaatkan React Developer Tools untuk debugging. Terakhir, bergabunglah dengan komunitas agar semangat belajar tetap terjaga.

                    </Text>
                    <Text style={styles.description}>Gunakan dokumentasi resmi React dan manfaatkan React Developer Tools untuk debugging. Terakhir, bergabunglah dengan komunitas agar semangat belajar tetap terjaga.

                    </Text>
                    <Text style={styles.description}>Gunakan dokumentasi resmi React dan manfaatkan React Developer Tools untuk debugging. Terakhir, bergabunglah dengan komunitas agar semangat belajar tetap terjaga.

                    </Text>
                    <Text style={styles.description}>Gunakan dokumentasi resmi React dan manfaatkan React Developer Tools untuk debugging. Terakhir, bergabunglah dengan komunitas agar semangat belajar tetap terjaga.

                    </Text>
                    <Text style={styles.description}>Gunakan dokumentasi resmi React dan manfaatkan React Developer Tools untuk debugging. Terakhir, bergabunglah dengan komunitas agar semangat belajar tetap terjaga.

                    </Text>
                    <Text style={styles.description}>Gunakan dokumentasi resmi React dan manfaatkan React Developer Tools untuk debugging. Terakhir, bergabunglah dengan komunitas agar semangat belajar tetap terjaga.

                    </Text>
                </View>
            </ScrollView>
            <View style={styles.bg}>
                <TouchableOpacity style={styles.update}>
                    <Text style={{ color: "white" }}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.delete}><Text style={{ color: "white" }}>Delete</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
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
        alignItems: "center"
    },
    delete: {
        padding: 10,
        backgroundColor: "red",
        borderRadius: 10,
        width: "48%",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
    },
});