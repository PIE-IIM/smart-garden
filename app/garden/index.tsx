import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import Onglets from '@/components/jardin/onglets';
import Plantes from '@/components/jardin/plantes';
import Capteur from '@/components/jardin/capteur';
import globalStyle from '@/styles/global';
import { Feather } from '@expo/vector-icons';

export default function Garden() {
  const [ongletActif, setOngletActif] = useState<'plantes' | 'calendrier' | 'capteurs'>('plantes');

  const [plantes, setPlantes] = useState([
    { id: 1, nom: "Carottes", stade: "semis", recolte: "70j" },
  ]);

  const [capteurs, setCapteurs] = useState([
    {
      id: 1,
      nom: "Capteur 1",
      donnees: [
        {
          label: "Température",
          value: "25 °C",
          icon: <Feather name="thermometer" size={20} color="#4d8b50" />,
        },
        {
          label: "Luminosité",
          value: "71%",
          icon: <Feather name="sun" size={20} color="#4d8b50" />,
        },
        {
          label: "Humidité du sol",
          value: "50%",
          icon: <Feather name="droplet" size={20} color="#4d8b50" />,
        },
      ],
    }
  ]);

  const ajouterPlante = () => {
    setPlantes([...plantes, {
      id: Date.now(),
      nom: "Nouvelle plante",
      stade: "graine",
      recolte: "90j"
    }]);
  };

  const supprimerPlante = (id: number) => {
    setPlantes(plantes.filter(plante => plante.id !== id));
  };

  const ajouterCapteur = () => {
    const numero = capteurs.length + 1;
    setCapteurs([...capteurs, {
      id: Date.now(),
      nom: `Capteur ${numero}`,
      donnees: [
        {
          label: "Température",
          value: "25 °C",
          icon: <Feather name="thermometer" size={20} color="#4d8b50" />,
        },
        {
          label: "Luminosité",
          value: "71%",
          icon: <Feather name="sun" size={20} color="#4d8b50" />,
        },
        {
          label: "Humidité du sol",
          value: "50%",
          icon: <Feather name="droplet" size={20} color="#4d8b50" />,
        },
      ],
    }]);
  };

  const supprimerCapteur = (id: number) => {
    setCapteurs(capteurs.filter(capteur => capteur.id !== id));
  };

  const renommerCapteur = (id: number, nouveauNom: string) => {
  setCapteurs(capteurs.map(c =>
    c.id === id ? { ...c, nom: nouveauNom } : c
  ));
};


  return (
    <View style={[globalStyle.background, styles.container]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>
          <Text style={styles.titleBlack}>Mon </Text>
          <Text style={styles.titleGreen}>Jardin</Text>
        </Text>

        <Onglets actif={ongletActif} onChange={setOngletActif} />

        {ongletActif === 'plantes' && (
          <>
            {plantes.map((plante) => (
              <Plantes
                key={plante.id}
                nom={plante.nom}
                stade={plante.stade}
                recolte={plante.recolte}
                onPress={() => supprimerPlante(plante.id)} // à personnaliser
              />
            ))}
          </>
        )}

        {ongletActif === 'capteurs' && (
          <>
            {capteurs.map((capteur) => (
              <Capteur
                key={capteur.id}
                nom={capteur.nom}
                donnees={capteur.donnees}
                onRename={(nouveauNom) => renommerCapteur(capteur.id, nouveauNom)}
                onDelete={() => supprimerCapteur(capteur.id)}
              />
            ))}
          </>
        )}

        {ongletActif === 'calendrier' && (
          <View>
            <Text>📅 Calendrier</Text>
          </View>
        )}
      </ScrollView>

      {ongletActif === 'plantes' && (
        <TouchableOpacity style={styles.addButton} onPress={ajouterPlante}>
          <Text style={styles.addButtonText}>ajouter une plante</Text>
        </TouchableOpacity>
      )}

      {ongletActif === 'capteurs' && (
        <TouchableOpacity style={styles.addButton} onPress={ajouterCapteur}>
          <Text style={styles.addButtonText}>ajouter un capteur</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    paddingBottom: 80,
  },
  scrollContent: {
    paddingBottom: 140,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  titleBlack: {
    color: '#1a1a1a',
  },
  titleGreen: {
    color: '#4d8b50',
  },
  addButton: {
    position: 'absolute',
    bottom: 120,
    left: 20,
    right: 20,
    borderWidth: 1,
    borderColor: '#4d8b50',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  addButtonText: {
    color: '#4d8b50',
    fontWeight: '500',
    textTransform: 'uppercase',
    fontSize: 14,
  },
});
