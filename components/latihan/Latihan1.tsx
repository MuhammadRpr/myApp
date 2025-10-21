import { Text, TextInput, View } from "react-native";

export default function Latihan1() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{fontSize: 30, fontWeight: "bold",}}>muhammad</Text>

<View style={{width: "100%", padding: 20, backgroundColor: "white", borderRadius: 10}}>
      <Text>isi nama</Text>
      <TextInput placeholder="nama"  style={{
          borderRadius: 10,
          padding: 8,
          marginVertical: 10,
          borderWidth: 1,
        }}
        />

        <Text>isi kelas</Text>
      <TextInput placeholder="kelas" 
      style={{
          borderRadius: 10,
          padding: 8,
          marginVertical: 10,
          borderWidth: 1,
        }}/>


        <Text>isi hobi</Text>
      <TextInput placeholder="hobi"  style={{
        borderRadius: 10,
          padding: 8,
          marginVertical: 10,
          borderWidth: 1,
        }}/>
        </View>
    </View>

    
  );
}
