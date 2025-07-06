import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import type { ReactNode } from 'react';

interface DonneeCapteur {
  label: string;
  value: string;
  icon: ReactNode;
}

interface CapteurProps {
  nom: string;
  donnees: DonneeCapteur[];
  onRename: (nouveauNom: string) => void;
  onDelete: () => void;
}

const Capteur: React.FC<CapteurProps> = ({ nom, donnees, onRename, onDelete }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [renommageVisible, setRenommageVisible] = useState(false);
  const [nouveauNom, setNouveauNom] = useState(nom);
  const [menuPosition, setMenuPosition] = useState({ top: 0, right: 20 });

  const buttonRef = useRef<View>(null);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{nom}</Text>

        <TouchableOpacity
          ref={buttonRef}
          onPress={() => {
            buttonRef.current?.measureInWindow((x, y, width, height) => {
              setMenuPosition({ top: y + height + 4, right: 20 });
              setMenuVisible(true);
            });
          }}
        >
          <Feather name="more-vertical" size={20} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.dataContainer}>
        {donnees.map((d, index) => (
          <View key={index} style={styles.dataBox}>
            {d.icon}
            <Text style={styles.dataLabel}>{d.label}</Text>
            <Text style={styles.dataValue}>{d.value}</Text>
          </View>
        ))}
      </View>

      {/* Menu contextuel */}
      <Modal transparent visible={menuVisible} animationType="fade">
        <Pressable style={styles.absoluteFill} onPress={() => setMenuVisible(false)}>
          <View
            style={[
              styles.menu,
              {
                position: 'absolute',
                top: menuPosition.top,
                right: menuPosition.right,
              },
            ]}
          >
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false);
                setRenommageVisible(true);
              }}
            >
              <Feather name="edit-3" size={18} color="#333" />
              <Text style={styles.menuText}>Renommer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false);
                onDelete();
              }}
            >
              <Feather name="trash-2" size={18} color="#666" />
              <Text style={[styles.menuText, { color: '#666' }]}>Supprimer</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>

      {/* Modal de renommage */}
      <Modal transparent visible={renommageVisible} animationType="fade">
        <View style={styles.renameOverlay}>
          <View style={styles.renameBox}>
            <Text style={{ fontWeight: '600', marginBottom: 8 }}>Renommer le capteur</Text>
            <TextInput
              value={nouveauNom}
              onChangeText={setNouveauNom}
              style={styles.input}
              placeholder="Nouveau nom"
            />
            <View style={styles.renameButtons}>
              <TouchableOpacity onPress={() => setRenommageVisible(false)}>
                <Text style={styles.cancel}>Annuler</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  onRename(nouveauNom);
                  setRenommageVisible(false);
                }}
              >
                <Text style={styles.confirm}>Valider</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#DFF3EC',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#111',
  },
  dataContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  dataBox: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 12,
    width: '45%',
    marginBottom: 12,
    elevation: 1,
  },
  dataLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  dataValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4d8b50',
  },
  menu: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 8,
    width: 160,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    gap: 12,
  },
  menuText: {
    fontSize: 15,
    color: '#222',
  },
  absoluteFill: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  renameOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  renameBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 12,
  },
  renameButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancel: {
    color: '#999',
    fontWeight: '500',
  },
  confirm: {
    color: '#4d8b50',
    fontWeight: '600',
  },
});

export default Capteur;