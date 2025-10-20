import { Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text>muhammad</Text>
      isi nama
      <TextInput placeholder="nama"  style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
        }}/>
        isi kelas
      <TextInput placeholder="kelas"  style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
        }}/>
        isi hobi
      <TextInput placeholder="hobi"  style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
        }}/>
    </View>

    
  );
}
