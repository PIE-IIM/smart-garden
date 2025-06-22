import { Vegetable } from './models/models';

export const vegetablesFixture: Vegetable[] = [
  {
    name: 'Tomate',
    description:
      'Plante fruitière très populaire, nécessite beaucoup de lumière et de chaleur.',
    caracteristiques: [
      'Besoin ensoleillement élevé',
      'Sensible au mildiou',
      'Croissance verticale',
    ],
    semis: ['février', 'mars', 'avril'],
    plantation: ['avril', 'mai', 'juin'],
    recolte: ['juillet', 'août', 'septembre', 'octobre'],
    affinites: ['Basilic', 'Carotte', 'Oignon'],
    mauvais_voisins: ['Pomme de terre', 'Fenouil'],
  },
  {
    name: 'Basilic',
    description:
      "Herbe aromatique facile à cultiver, aime la chaleur et l'humidité.",
    caracteristiques: [
      'Aime la chaleur',
      'Pousse rapide',
      'Aromatique puissante',
    ],
    semis: ['mars', 'avril', 'mai'],
    plantation: ['mai', 'juin'],
    recolte: ['juin', 'juillet', 'août', 'septembre'],
    affinites: ['Tomate', 'Poivron', 'Aubergine'],
    mauvais_voisins: ['Rue officinale'],
  },
];
