import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

const MENU_ITEMS = [
  { id: 1, title: 'Riwayat Pesanan', icon: '📜' },
  { id: 2, title: 'Metode Pembayaran', icon: '💳' },
  { id: 3, title: 'Pusat Bantuan', icon: '❓' },
  { id: 4, title: 'Pengaturan Akun', icon: '⚙️' },
];

export default function ProfilScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Profile */}
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100?img=33' }}
          style={styles.profileAvatar}
        />
        <Text style={styles.userName}>Budi Santoso</Text>
        <Text style={styles.userEmail}>budi.santoso@email.com</Text>
      </View>

      {/* Stats Box */}
      <View style={styles.statsCard}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Perjalanan</Text>
        </View>
        <View style={styles.statBorder} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Ulasan</Text>
        </View>
        <View style={styles.statBorder} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>350</Text>
          <Text style={styles.statLabel}>Poin</Text>
        </View>
      </View>

      {/* Menu Options */}
      <Text style={styles.sectionTitle}>Pengaturan & Menu</Text>
      {MENU_ITEMS.map((menu) => (
        <TouchableOpacity key={menu.id} style={styles.menuCard}>
          <Text style={styles.menuIcon}>{menu.icon}</Text>
          <Text style={styles.menuTitle}>{menu.title}</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Keluar Akun</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA', padding: 20 },
  profileHeader: { alignItems: 'center', marginTop: 30 },
  profileAvatar: { width: 90, height: 90, borderRadius: 45, borderWidth: 3, borderColor: '#0284C7' },
  userName: { fontSize: 20, fontWeight: 'bold', color: '#0F172A', marginTop: 12 },
  userEmail: { fontSize: 13, color: '#64748B', marginTop: 2 },
  statsCard: { backgroundColor: '#FFFFFF', borderRadius: 16, flexDirection: 'row', padding: 16, marginTop: 20, elevation: 2, justifyContent: 'space-around' },
  statItem: { alignItems: 'center' },
  statNumber: { fontSize: 18, fontWeight: 'bold', color: '#0284C7' },
  statLabel: { fontSize: 11, color: '#64748B', marginTop: 2 },
  statBorder: { width: 1, backgroundColor: '#E2E8F0' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#0F172A', marginTop: 24, marginBottom: 12 },
  menuCard: { backgroundColor: '#FFFFFF', padding: 14, borderRadius: 12, flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  menuIcon: { fontSize: 18, marginRight: 12 },
  menuTitle: { flex: 1, fontSize: 14, color: '#1E293B', fontWeight: '500' },
  menuArrow: { fontSize: 20, color: '#94A3B8' },
  logoutButton: { backgroundColor: '#FEE2E2', padding: 14, borderRadius: 12, alignItems: 'center', marginTop: 20, marginBottom: 40 },
  logoutText: { color: '#EF4444', fontWeight: 'bold', fontSize: 14 },
});