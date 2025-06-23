import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ImageSourcePropType } from 'react-native';

interface CartePlanteProps {
  nom: string;
  stade: string;
  recolte: string;
  onPress?: () => void;
}

const CartePlante: React.FC<CartePlanteProps> = ({ nom, stade, recolte, onPress }) => {
  // Image selon le nom
  const getImage = (): ImageSourcePropType => {
    switch (nom.toLowerCase()) {
      case 'carottes':
        return { uri: 'https://www.educatout.com/images/medium/Championne-la-carotte.jpg' };
      case 'tomates':
        return { uri: 'https://url-vers-tomates.jpg' };
      default:
        return require('@/assets/images/default.png'); 
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={getImage()} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.nom}>{nom}</Text>
        <Text style={styles.detail}>Stade: {stade}</Text>
        <Text style={styles.detail}>Récolter dans {recolte}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#7a7a7a" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F4F6E6',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 12,
    elevation: 2, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  nom: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  detail: {
    fontSize: 13,
    color: '#555',
  },
});

export default CartePlante;
