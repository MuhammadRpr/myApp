import { Text, TouchableOpacity, View } from "react-native";

export default function Latihan4() {
  return (
    <>
    <View>
        <Text>Latihan 4</Text>
        <TouchableOpacity style={{padding: 10, backgroundColor: 'blue', borderRadius: 5, alignItems: 'center', margin: 10}}>
          <Text style={{color: 'white'}}>Press Me</Text>
        </TouchableOpacity>
        </View>
        </>
  )
}