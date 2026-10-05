/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

// Import semua screen yang sudah kamu buat
import HomeScreen from './src/screen/HomeScreen';
import DetailScreen from './src/screen/DetailScreen';
import BookingScreen from './src/screen/BookingScreen';
import TicketScreen from './src/screen/tiketScreen';
import ProfileScreen from './src/screen/ProfilScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* 
        GANTI KOMPONEN DI BAWAH INI SESUAI FILE YANG INGIN DITAMPILKAN:
        - <HomeScreen />
        - <DetailScreen />
        - <BookingScreen />
        - <TicketScreen />
        - <ProfileScreen />
      */}
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});