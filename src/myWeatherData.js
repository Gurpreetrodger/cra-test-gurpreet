// import React, { useEffect, useState } from 'react';
// import { FlatList, Text, View } from 'react-native';

// const myWeatherData = ( {cityName} ) => {
// //   const [isLoading, setLoading] = useState(true);
// //   const [data, setData] = React.useState([]);
//   const myApiKey = "a0319e0d1bf379208232887dc0777e76"
// //   useEffect(() => {
// //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myApiKey}`)
// //       .then((response) => response.json())
// //       .then((json) => setData(json))
// //       .catch((error) => console.error(error))
// //     //   .finally(() => setLoading(false))
// //     ;
// //   }, []);



//   return (
//     //  data
//       );

//     // <View style={{ flex: 1, padding: 24 }}>
//     //   {isLoading ? <Text>Loading...</Text> : 
//     //   ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
//     //       <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
//     //       <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
//     //       <FlatList
//     //         data={data.articles}
//     //         keyExtractor={({ id }, index) => id}
//     //         renderItem={({ item }) => (
//     //           <Text>{item.id + '. ' + item.title}</Text>
//     //         )}
//     //       />
//     //     </View>
//     //   )}
//     // </View>
// //   );
// };

// export default myWeatherData;