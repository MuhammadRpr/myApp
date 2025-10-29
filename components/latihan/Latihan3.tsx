import { FlatList, Text, View } from "react-native";

export default function Latihan3() {
  return (

    <View>
        
        <Text>Latihan 3</Text>
        <FlatList data={products} 
        renderItem={({item}) => <ProductItem name={item.name} price={item.price} />}
        keyExtractor={(item) => item.id.toString()}
        />
       
    </View>
    
  )
}

type ProductItemProps = {
  name: string;
  price: number;
}

const ProductItem = ({name, price}: ProductItemProps) => {
  return (
    <View style={{padding: 10, borderBottomWidth: 1, borderBottomColor: 'blue', marginBottom: 10}}>
      <Text>{name}</Text>
      <Text>{price}</Text>
    </View>
  )
}

const products = [
  { id: 10, name: 'Product 10', price: 103 },
  { id: 11, name: 'Product 11', price: 105 },
  { id: 12, name: 'Product 12', price: 104 },
  { id: 13, name: 'Product 13', price: 104 },
  { id: 14, name: 'Product 14', price: 107 },
  { id: 15, name: 'Product 15', price: 101 },
  { id: 16, name: 'Product 16', price: 103 },
  { id: 17, name: 'Product 17', price: 101 },
  { id: 18, name: 'Product 18', price: 109 },
  { id: 19, name: 'Product 19', price: 106 },
  { id:20, name: 'Product 20', price: 106 },
  { id:21, name: 'Product 21', price: 103 },
  { id:22, name: 'Product 22', price: 100 },
  { id:23, name: 'Product 23', price: 106 },
]