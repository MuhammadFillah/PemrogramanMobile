import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function TiketScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Tiket Perjalanan Anda</Text>

      <View style={styles.ticketCard}>
        {/* Top Header Ticket */}
        <View style={styles.ticketHeader}>
          <Text style={styles.brandText}>Nusantara Tour Pass</Text>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>AKTIF</Text>
          </View>
        </View>

        {/* Ticket Details */}
        <View style={styles.ticketBody}>
          <Text style={styles.destinationName}>Labuan Bajo & TN Komodo</Text>
          <Text style={styles.ticketSub}>3 Hari 2 Malam (All Inclusive)</Text>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <View>
              <Text style={styles.label}>Nama Penumpang</Text>
              <Text style={styles.value}>Budi Santoso</Text>
            </View>
            <View>
              <Text style={styles.label}>Kode Booking</Text>
              <Text style={styles.value}>NT-88921</Text>
            </View>
          </View>

          <View style={[styles.infoRow, { marginTop: 14 }]}>
            <View>
              <Text style={styles.label}>Tanggal Masuk</Text>
              <Text style={styles.value}>12 Nov 2026</Text>
            </View>
            <View>
              <Text style={styles.label}>Jam Kumpul</Text>
              <Text style={styles.value}>07:30 WITA</Text>
            </View>
          </View>

          <View style={styles.divider} />

          {/* Barcode Statis */}
          <View style={styles.barcodeContainer}>
            <Image
              source={{ uri: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=NT-88921' }}
              style={styles.qrCode}
            />
            <Text style={styles.barcodeSub}>Tunjukkan QR Code ini kepada petugas</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadText}>📥 Unduh E-Tiket (PDF)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0284C7', padding: 20, justifyContent: 'center' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center', marginBottom: 20 },
  ticketCard: { backgroundColor: '#FFFFFF', borderRadius: 20, overflow: 'hidden', elevation: 5 },
  ticketHeader: { backgroundColor: '#0F172A', padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  brandText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 14 },
  statusBadge: { backgroundColor: '#10B981', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  statusText: { color: '#FFFFFF', fontSize: 10, fontWeight: 'bold' },
  ticketBody: { padding: 20 },
  destinationName: { fontSize: 18, fontWeight: 'bold', color: '#0F172A' },
  ticketSub: { fontSize: 12, color: '#64748B', marginTop: 2 },
  divider: { height: 1, backgroundColor: '#E2E8F0', marginVertical: 16, borderStyle: 'dashed' },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between' },
  label: { fontSize: 11, color: '#94A3B8' },
  value: { fontSize: 14, fontWeight: 'bold', color: '#1E293B', marginTop: 2 },
  barcodeContainer: { alignItems: 'center', marginTop: 10 },
  qrCode: { width: 120, height: 120 },
  barcodeSub: { fontSize: 11, color: '#94A3B8', marginTop: 8 },
  downloadButton: { backgroundColor: '#FFFFFF', padding: 14, borderRadius: 12, alignItems: 'center', marginTop: 20 },
  downloadText: { color: '#0284C7', fontWeight: 'bold', fontSize: 14 },
});