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
    paddingVertical: 35,
    paddingHorizontal: 20,
    gap: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  
  },

  logo: {
    width: 50,
    height: 50,
    marginTop: -20,
    marginBottom: -40,
  },

  cabecalho: {
    fontSize: 27,
    color: '#000',
    marginLeft: 60,
    marginTop: 20,
    fontFamily: "ZillaSlab_700Bold",
  },

  messageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)' ,
    marginHorizontal: 10,
    marginVertical: 30,
    borderRadius: 10,
    
  },

  messageIcon: {
    width: 90,
    height: 90,
    marginBottom:10,
    marginRight: -40,
    alignSelf: 'auto',
    borderRadius:45,
  },

  messageName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#666',
    textAlign: 'center',
   
  },

  messageText: {
    fontSize: 17,
    color: '#666',
    textAlign: 'center',        
    width: '80%',
    marginTop: 10, 
    marginBottom: 10,
    marginLeft: 45,
  
  },

  popupButton: {
    backgroundColor: '#708D73',  
    paddingVertical: 10,
    borderRadius: 50,
    paddingLeft: 10,
    width: 250, 
    marginBottom: 10,
    marginLeft:60,
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  
  },

  modalContent: {
    backgroundColor: '#F7EDD5',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },

  modalImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },

  modalMessage: {
    fontSize: 20,
    textAlign: 'center',
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
  textAlign: 'center',
  },

 
});