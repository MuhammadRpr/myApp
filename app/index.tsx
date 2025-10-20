import { Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text>muhammad</Text>
      <Text>isi nama</Text>
      <TextInput placeholder="nama"  style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
        }}/>
        <Text>isi kelas</Text>
      <TextInput placeholder="kelas"  style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
        }}/>
        <Text>isi hobi</Text>
      <TextInput placeholder="hobi"  style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
        }}/>
    </View>

    
  );
}
