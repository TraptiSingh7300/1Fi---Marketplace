import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import { PRODUCTS } from '../mockData';

export default function MarketplaceScreen() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [selectedEmi, setSelectedEmi] = useState(null);

  useEffect(() => {
    // Simulate API fetch delay
    setTimeout(() => {
      const data = PRODUCTS[0];
      setProduct(data);
      setSelectedVariant(data.variants[0]);
      setSelectedEmi(data.emiPlans[0]);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#0052FF" style={{ flex: 1 }} />;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>₹{product.basePrice.toLocaleString('en-IN')}</Text>

        <Text style={styles.sectionTitle}>Select Variant</Text>
        <View style={styles.row}>
          {product.variants.map((variant) => (
            <TouchableOpacity
              key={variant}
              style={[styles.chip, selectedVariant === variant && styles.chipActive]}
              onPress={() => setSelectedVariant(variant)}
            >
              <Text style={selectedVariant === variant ? styles.textActive : styles.text}>{variant}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Select EMI Plan</Text>
        {product.emiPlans.map((plan) => (
          <TouchableOpacity
            key={plan.tenureMonths}
            style={[styles.emiCard, selectedEmi?.tenureMonths === plan.tenureMonths && styles.emiActive]}
            onPress={() => setSelectedEmi(plan)}
          >
            <Text style={styles.emiText}>{plan.tenureMonths} Months</Text>
            <Text style={styles.emiSub}>₹{plan.monthlyAmount}/mo ({plan.interestRate}% Interest)</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.ctaButton}>
        <Text style={styles.ctaText}>
          {selectedEmi ? `Proceed with ₹${selectedEmi.monthlyAmount}/mo` : 'Select a Plan'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  scroll: { padding: 16 },
  image: { width: '100%', height: 200, resizeMode: 'contain' },
  title: { fontSize: 20, fontWeight: 'bold', marginTop: 12 },
  price: { fontSize: 18, color: '#0052FF', marginVertical: 8, fontWeight: '600' },
  sectionTitle: { fontSize: 14, color: '#666', marginTop: 16, marginBottom: 8, fontWeight: '600' },
  row: { flexDirection: 'row', gap: 8 },
  chip: { padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 8 },
  chipActive: { borderColor: '#0052FF', backgroundColor: '#e6edea' },
  text: { color: '#333' },
  textActive: { color: '#0052FF', fontWeight: 'bold' },
  emiCard: { padding: 12, borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 8, marginBottom: 8 },
  emiActive: { borderColor: '#0052FF', backgroundColor: '#f0f4ff' },
  emiText: { fontWeight: 'bold', fontSize: 15 },
  emiSub: { color: '#666', fontSize: 13, marginTop: 2 },
  ctaButton: { backgroundColor: '#0052FF', padding: 16, alignItems: 'center', margin: 16, borderRadius: 8 },
  ctaText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});