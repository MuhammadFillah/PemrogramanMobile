/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <AppContent />
//     </SafeAreaProvider>
//   );
// }

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.tsx"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';

// Import data statis dari file data.ts
import { DESTINATIONS, REVIEWS } from './data';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<number>(1);
  const [selectedItem, setSelectedItem] = useState(DESTINATIONS[0]);

  // SCREEN 1: LANDING PAGE (Menggunakan Image biasa menggantikan ImageBackground)
  const renderScreen1 = () => (
    <View style={styles.heroContainer}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80' }}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.overlay}>
        <Text style={styles.heroTitle}>Jelajah Nusantara</Text>
        <Text style={styles.heroSubtitle}>Temukan keindahan destinasi impianmu di Indonesia</Text>
        <TouchableOpacity style={styles.btnPrimary} onPress={() => setCurrentScreen(2)}>
          <Text style={styles.btnText}>Mulai Jelajah</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // SCREEN 2: HOMEPAGE / KATALOG
  const renderScreen2 = () => (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Jelajahi Wisata</Text>
      
      <View style={styles.banner}>
        <Text style={styles.bannerText}>🎉 Promo Wisata Lokal Diskon 30%!</Text>
      </View>

      <Text style={styles.sectionTitle}>Destinasi Populer</Text>
      {DESTINATIONS.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          onPress={() => {
            setSelectedItem(item);
            setCurrentScreen(3);
          }}
        >
          <Image source={{ uri: item.image }} style={styles.cardImage} />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardSubtitle}>{item.location}</Text>
            <Text style={styles.cardRating}>⭐ {item.rating}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  // SCREEN 3: DETAIL DESTINASI
  const renderScreen3 = () => (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectedItem.image }} style={styles.detailImage} />
      <View style={styles.detailContent}>
        <Text style={styles.detailTitle}>{selectedItem.name}</Text>
        <Text style={styles.detailLocation}>📍 {selectedItem.location}</Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoBadge}>⭐ {selectedItem.rating}</Text>
          <Text style={styles.infoBadge}>Tiket: {selectedItem.price}</Text>
        </View>

        <Text style={styles.sectionTitle}>Deskripsi</Text>
        <Text style={styles.description}>{selectedItem.description}</Text>

        <TouchableOpacity style={styles.btnPrimary} onPress={() => setCurrentScreen(2)}>
          <Text style={styles.btnText}>Kembali ke Katalog</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  // SCREEN 4: GALERI & ULASAN
  const renderScreen4 = () => (
    <View style={styles.containerPadding}>
      <Text style={styles.headerTitle}>Ulasan Pengunjung</Text>
      <FlatList
        data={REVIEWS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reviewCard}>
            <Text style={styles.reviewerName}>{item.name}</Text>
            <Text style={styles.reviewRating}>Rating: {item.rating}</Text>
            <Text style={styles.reviewComment}>"{item.comment}"</Text>
          </View>
        )}
      />
    </View>
  );

  // SCREEN 5: PROFIL AGEN & KONTAK
  const renderScreen5 = () => (
    <View style={styles.containerCenter}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' }}
        style={styles.avatar}
      />
      <Text style={styles.profileName}>Nusantara Travel Agent</Text>
      <Text style={styles.profileRole}>Layanan Informasi Wisata Resmi</Text>

      <View style={styles.contactBox}>
        <Text style={styles.contactText}>📧 Email: info@nusantaratravel.com</Text>
        <Text style={styles.contactText}>📞 Telepon: +62 812 3456 7890</Text>
        <Text style={styles.contactText}>🌐 Website: www.nusantaratravel.com</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      
      {/* AREA RENDER SCREEN */}
      <View style={{ flex: 1 }}>
        {currentScreen === 1 && renderScreen1()}
        {currentScreen === 2 && renderScreen2()}
        {currentScreen === 3 && renderScreen3()}
        {currentScreen === 4 && renderScreen4()}
        {currentScreen === 5 && renderScreen5()}
      </View>

      {/* BOTTOM NAVIGATION */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => setCurrentScreen(1)}>
          <Text style={currentScreen === 1 ? styles.navActive : styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen(2)}>
          <Text style={currentScreen === 2 ? styles.navActive : styles.navText}>Katalog</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen(3)}>
          <Text style={currentScreen === 3 ? styles.navActive : styles.navText}>Detail</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen(4)}>
          <Text style={currentScreen === 4 ? styles.navActive : styles.navText}>Ulasan</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen(5)}>
          <Text style={currentScreen === 5 ? styles.navActive : styles.navText}>Profil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// STYLESHEET
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  containerPadding: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
  containerCenter: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#f8f9fa' },
  heroContainer: { flex: 1, justifyContent: 'center' },
  overlay: { backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  heroTitle: { fontSize: 28, fontWeight: 'bold', color: '#ffffff', textAlign: 'center' },
  heroSubtitle: { fontSize: 16, color: '#e0e0e0', textAlign: 'center', marginVertical: 15 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', marginVertical: 15, color: '#1a1a1a', paddingHorizontal: 15 },
  banner: { backgroundColor: '#0284c7', padding: 15, borderRadius: 10, marginHorizontal: 15, marginBottom: 15 },
  bannerText: { color: '#ffffff', fontWeight: 'bold', textAlign: 'center' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginHorizontal: 15, marginVertical: 10 },
  card: { backgroundColor: '#ffffff', borderRadius: 10, marginHorizontal: 15, marginBottom: 15, overflow: 'hidden', elevation: 2 },
  cardImage: { width: '100%', height: 150 },
  cardBody: { padding: 12 },
  cardTitle: { fontSize: 16, fontWeight: 'bold' },
  cardSubtitle: { color: '#666', fontSize: 14, marginVertical: 4 },
  cardRating: { color: '#d97706', fontWeight: 'bold' },
  detailImage: { width: '100%', height: 220 },
  detailContent: { padding: 20 },
  detailTitle: { fontSize: 24, fontWeight: 'bold' },
  detailLocation: { fontSize: 16, color: '#666', marginVertical: 5 },
  infoRow: { flexDirection: 'row', gap: 10, marginVertical: 10 },
  infoBadge: { backgroundColor: '#e0f2fe', color: '#0369a1', padding: 8, borderRadius: 6, fontWeight: 'bold' },
  description: { lineHeight: 22, color: '#444', marginBottom: 20 },
  reviewCard: { backgroundColor: '#ffffff', padding: 15, borderRadius: 8, marginBottom: 10, elevation: 1 },
  reviewerName: { fontWeight: 'bold', fontSize: 16 },
  reviewRating: { color: '#d97706', marginVertical: 2 },
  reviewComment: { fontStyle: 'italic', color: '#555' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 15 },
  profileName: { fontSize: 20, fontWeight: 'bold' },
  profileRole: { color: '#666', marginBottom: 20 },
  contactBox: { backgroundColor: '#ffffff', padding: 15, borderRadius: 10, width: '100%', marginBottom: 20, elevation: 1 },
  contactText: { fontSize: 14, marginVertical: 5 },
  btnPrimary: { backgroundColor: '#0284c7', paddingVertical: 12, paddingHorizontal: 25, borderRadius: 8, marginTop: 10 },
  btnText: { color: '#ffffff', fontWeight: 'bold', textAlign: 'center' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#ffffff', paddingVertical: 12, borderTopWidth: 1, borderColor: '#e2e8f0' },
  navText: { color: '#64748b', fontWeight: '500' },
  navActive: { color: '#0284c7', fontWeight: 'bold' },
});