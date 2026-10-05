import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function DetailScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800' }}
          style={styles.bannerImage}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Labuan Bajo & TN Komodo</Text>
          <Text style={styles.location}>📍 Manggarai Barat, Nusa Tenggara Timur</Text>

          {/* Quick Info */}
          <View style={styles.infoRow}>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Durasi</Text>
              <Text style={styles.infoValue}>3 Hari 2 Malam</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Rating</Text>
              <Text style={styles.infoValue}>⭐ 4.9 (120)</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Suhu</Text>
              <Text style={styles.infoValue}>28°C</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Deskripsi</Text>
          <Text style={styles.description}>
            Nikmati keindahan keajaiban dunia alami di Labuan Bajo. Paket tur ini mencakup perjalanan mengelilingi pulau-pulau eksotis dengan kapal Phinisi, trekking di Pulau Padar, serta melihat langsung satwa purba Komodo di habitat aslinya.
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.priceLabel}>Total Harga</Text>
          <Text style={styles.priceValue}>Rp 2.500.000 <Text style={styles.perPerson}>/orang</Text></Text>
        </View>
        <TouchableOpacity style={styles.bookingButton}>
          <Text style={styles.bookingText}>Pesan Sekarang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  bannerImage: { width: '100%', height: 280 },
  contentContainer: { padding: 20, borderTopLeftRadius: 24, borderTopRightRadius: 24, backgroundColor: '#FFFFFF', marginTop: -20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#0F172A' },
  location: { fontSize: 14, color: '#64748B', marginTop: 4 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 },
  infoBox: { backgroundColor: '#F1F5F9', padding: 12, borderRadius: 12, alignItems: 'center', width: '30%' },
  infoLabel: { fontSize: 12, color: '#64748B' },
  infoValue: { fontSize: 13, fontWeight: 'bold', color: '#0284C7', marginTop: 4 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#0F172A', marginBottom: 8 },
  description: { fontSize: 14, color: '#475569', lineHeight: 22 },
  bottomBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, borderTopWidth: 1, borderColor: '#E2E8F0', backgroundColor: '#FFFFFF' },
  priceLabel: { fontSize: 12, color: '#64748B' },
  priceValue: { fontSize: 18, fontWeight: 'bold', color: '#0284C7' },
  perPerson: { fontSize: 12, color: '#64748B', fontWeight: 'normal' },
  bookingButton: { backgroundColor: '#0284C7', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 12 },
  bookingText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 14 },
});