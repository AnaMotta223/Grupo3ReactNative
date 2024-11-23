import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },

  imagemdeFundo: {
    flex: 1,
    width: '100%',
  },

  header: {
    backgroundColor: '#B68458',
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    zIndex: 2, 
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    width: 50,
    height: 50,
    marginTop: 22,
  },

  cabecalho: {
    fontSize: 27,
    color: '#000',
    marginLeft: 43,
    fontFamily: "ZillaSlab_700Bold",
    marginTop: 22,
  },

  messageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginHorizontal: 15,
    marginVertical: 20,
    borderRadius: 12,
    padding: 15,
    elevation: 5, 
  },

  messageIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },

  messageName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
    textAlign: 'center', //
  },

  messageText: {
    fontSize: 15,
    color: '#666',
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 45,
  },

  popupButton: {
    backgroundColor: '#708D73',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 50,
    marginTop: 10,
  },

  popupButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',  
  },

  modalContent: {
    backgroundColor: '#F3E6CE',
    padding: 20,
    borderRadius: 12,
    width: '85%', 
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },

  modalImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },

  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    color: '#444',
    marginBottom: 20,
  },
  
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },

  button: {
    backgroundColor: '#708D73',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});