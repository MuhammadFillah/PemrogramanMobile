// === Dashboard ===
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const CATEGORIES = ['Semua', 'Pantai', 'Gunung', 'Budaya', 'Kuliner'];

const DESTINATIONS = [
  {
    id: '1',
    name: 'Labuan Bajo',
    location: 'Nusa Tenggara Timur',
    price: 'Rp 2.500.000',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600',
  },
  {
    id: '2',
    name: 'Candi Borobudur',
    location: 'Magelang, Jawa Tengah',
    price: 'Rp 350.000',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600',
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Halo, Penjelajah! 👋</Text>
          <Text style={styles.subGreeting}>Jelajahi keindahan Indonesia</Text>
        </View>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100?img=33' }}
          style={styles.avatar}
        />
      </View>

      {/* Search Bar Statis */}
      <View style={styles.searchBar}>
        <Text style={styles.searchText}>🔍 Cari destinasi impianmu...</Text>
      </View>

      {/* Kategori */}
      <Text style={styles.sectionTitle}>Kategori</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
        {CATEGORIES.map((cat, index) => (
          <View
            key={index}
            style={[styles.categoryBadge, index === 0 && styles.activeCategory]}>
            <Text style={[styles.categoryText, index === 0 && styles.activeCategoryText]}>
              {cat}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Destinasi Populer */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Destinasi Populer</Text>
        <Text style={styles.seeAll}>Lihat Semua</Text>
      </View>

      <FlatList
        horizontal
        data={DESTINATIONS}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardLocation}>📍 {item.location}</Text>
              <View style={styles.cardFooter}>
                <Text style={styles.cardPrice}>{item.price}</Text>
                <Text style={styles.cardRating}>⭐ {item.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA', padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 },
  greeting: { fontSize: 22, fontWeight: 'bold', color: '#1E293B' },
  subGreeting: { fontSize: 14, color: '#64748B', marginTop: 2 },
  avatar: { width: 48, height: 48, borderRadius: 24 },
  searchBar: { backgroundColor: '#FFFFFF', padding: 14, borderRadius: 12, marginTop: 20, elevation: 2 },
  searchText: { color: '#94A3B8', fontSize: 14 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#0F172A', marginTop: 24, marginBottom: 12 },
  categoryContainer: { flexDirection: 'row' },
  categoryBadge: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, backgroundColor: '#E2E8F0', marginRight: 10 },
  activeCategory: { backgroundColor: '#0284C7' },
  categoryText: { color: '#475569', fontWeight: '600' },
  activeCategoryText: { color: '#FFFFFF' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  seeAll: { color: '#0284C7', fontWeight: '600', marginTop: 12 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 16, width: 220, marginRight: 16, overflow: 'hidden', elevation: 3, marginBottom: 20 },
  cardImage: { width: '100%', height: 140 },
  cardContent: { padding: 12 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#1E293B' },
  cardLocation: { fontSize: 12, color: '#64748B', marginVertical: 4 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  cardPrice: { fontSize: 14, fontWeight: 'bold', color: '#0284C7' },
  cardRating: { fontSize: 12, fontWeight: '600', color: '#F59E0B' },
});