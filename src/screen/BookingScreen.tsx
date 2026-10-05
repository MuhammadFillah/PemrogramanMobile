import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function BookingScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Formulir Pemesanan</Text>

      {/* Summary Card */}
      <View style={styles.summaryCard}>
        <Text style={styles.itemTitle}>Paket Wisata Labuan Bajo</Text>
        <Text style={styles.itemDate}>📅 Tanggal: 12 November 2026</Text>
        <Text style={styles.itemGuest}>👤 Jumlah: 2 Dewasa</Text>
      </View>

      {/* Input Fields Statis */}
      <Text style={styles.sectionTitle}>Data Pemesan</Text>
      
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nama Lengkap</Text>
        <View style={styles.dummyInput}><Text style={styles.inputText}>Budi Santoso</Text></View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.dummyInput}><Text style={styles.inputText}>budi.santoso@email.com</Text></View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nomor WhatsApp</Text>
        <View style={styles.dummyInput}><Text style={styles.inputText}>+62 812-3456-7890</Text></View>
      </View>

      {/* Rincian Biaya */}
      <Text style={styles.sectionTitle}>Rincian Pembayaran</Text>
      <View style={styles.paymentDetail}>
        <View style={styles.row}><Text style={styles.textLeft}>Tiket (2x)</Text><Text style={styles.textRight}>Rp 5.000.000</Text></View>
        <View style={styles.row}><Text style={styles.textLeft}>Biaya Layanan</Text><Text style={styles.textRight}>Rp 25.000</Text></View>
        <View style={[styles.row, styles.totalRow]}>
          <Text style={styles.totalText}>Total Biaya</Text>
          <Text style={styles.totalPrice}>Rp 5.025.000</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Lanjutkan Pembayaran</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA', padding: 20 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#0F172A', marginTop: 20, marginBottom: 16 },
  summaryCard: { backgroundColor: '#0284C7', padding: 16, borderRadius: 16, marginBottom: 20 },
  itemTitle: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  itemDate: { color: '#E0F2FE', fontSize: 13, marginTop: 8 },
  itemGuest: { color: '#E0F2FE', fontSize: 13, marginTop: 2 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#0F172A', marginBottom: 12 },
  inputGroup: { marginBottom: 14 },
  label: { fontSize: 12, color: '#64748B', marginBottom: 6 },
  dummyInput: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#CBD5E1', padding: 12, borderRadius: 10 },
  inputText: { color: '#1E293B', fontSize: 14 },
  paymentDetail: { backgroundColor: '#FFFFFF', padding: 16, borderRadius: 12, marginBottom: 24 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  textLeft: { color: '#64748B', fontSize: 14 },
  textRight: { color: '#1E293B', fontSize: 14, fontWeight: '500' },
  totalRow: { borderTopWidth: 1, borderColor: '#E2E8F0', paddingTop: 10, marginTop: 4 },
  totalText: { fontWeight: 'bold', color: '#0F172A', fontSize: 15 },
  totalPrice: { fontWeight: 'bold', color: '#0284C7', fontSize: 16 },
  payButton: { backgroundColor: '#10B981', padding: 16, borderRadius: 12, alignItems: 'center', marginBottom: 40 },
  payButtonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 },
});