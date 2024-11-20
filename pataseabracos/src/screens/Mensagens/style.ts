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
    gap:5,
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
    marginTop:-20,
    marginBottom:-40,
  },

  cabecalho: {
    alignItems:'center',
    justifyContent: 'center',
    fontSize: 27,
    color: '#fff',
    marginLeft: 60,
    marginTop: 20,
    padding: 0,
    fontWeight: 'bold',
    

  },

  
  messageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1.5,
    elevation: 2, 
  },

  messageIcon: {
    width: 60,
    height: 60,
    marginRight: 10,
  },

  messageName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
  },

  messageText: {
    fontSize: 17,
    color: '#666',
  },

  
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#B68458',
    paddingVertical: 20,
  },

  footerIcon: {
    width: 25,
    height: 25,
  },
});
