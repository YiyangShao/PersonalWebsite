import { StyleSheet } from 'react-native';

/**
 * Global styles used across the app to maintain consistency
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  // Social media section
  socialContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  socialLinks: {
    flexDirection: 'row',
    marginTop: 10,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
});

export default styles;
