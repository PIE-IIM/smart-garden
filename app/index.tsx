// app/index.tsx (mise à jour)
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { UserActions } from '@/store/actions/userActions';

export default function Index() {
  const dispatch = useAppDispatch();
  const userActions = new UserActions(dispatch);
  const { user } = useAppSelector(state => state.user);

  const handleLogout = () => {
    userActions.clearUserAction();
    // Vous pouvez ajouter ici d'autres actions de nettoyage si nécessaire
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart Garden</Text>
      
      {user ? (
        // Utilisateur connecté
        <View style={styles.userContainer}>
          <Text style={styles.welcomeText}>Bienvenue, {user.name}</Text>
          <TouchableOpacity 
            style={[styles.button, styles.logoutButton]}
            onPress={handleLogout}
          >
            <Text style={styles.buttonText}>Se déconnecter</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Utilisateur non connecté
        <View style={styles.authButtons}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => router.replace('/register')}
          >
            <Text style={styles.buttonText}>Créer un compte</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.loginButton]}
            // onPress={() => router.replace('/login')}
          >
            <Text style={styles.buttonText}>Se connecter</Text>
          </TouchableOpacity>
        </View>
      )}
      
      {/* Autres éléments de votre page d'accueil */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  userContainer: {
    alignItems: 'center',
    gap: 20,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 10,
  },
  authButtons: {
    gap: 15,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 5,
  },
  loginButton: {
    backgroundColor: '#2196F3',
  },
  logoutButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
