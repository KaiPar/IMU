 import React from 'react';
 import {
   StyleSheet,
   Text,
   View,
 } from 'react-native';

 const Header = () => {
   return (
     <View>
       <Text style={styles.Header}>Inetrial Measurement Unit Data</Text>
     </View>
   );
 };

 const styles = StyleSheet.create({
   Header: {
     textAlign: 'center',
     fontSize: 25,
     fontWeight: 'bold',
     color: 'white',
     paddingTop: 30
   }
 });

 export default Header;
