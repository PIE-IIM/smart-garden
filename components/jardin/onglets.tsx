import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Onglet = 'plantes' | 'calendrier' | 'capteurs';

interface OngletsProps {
  actif: Onglet;
  onChange: (onglet: Onglet) => void;
}

const Onglets: React.FC<OngletsProps> = ({ actif, onChange }) => {
  const onglets: { id: Onglet; label: string }[] = [
    { id: 'plantes', label: 'Plantes' },
    { id: 'calendrier', label: 'Calendrier' },
    { id: 'capteurs', label: 'Capteurs' },
  ];

  return (
    <View style={styles.container}>
      {onglets.map((onglet) => (
        <TouchableOpacity
          key={onglet.id}
          onPress={() => onChange(onglet.id)}
          style={[
            styles.tab,
            actif === onglet.id && styles.tabActif
          ]}
        >
          <Text style={[
            styles.text,
            actif === onglet.id && styles.textActif
          ]}>
            {onglet.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#DCE1D4', 
    padding: 4,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 999,
  },
  tabActif: {
    backgroundColor: '#DCE1D4',
  },
  text: {
    color: '#444',
  },
  textActif: {
    color: '#000',
    fontWeight: '600',
  },
});

export default Onglets;