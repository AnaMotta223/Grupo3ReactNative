import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  container: { 
    flex: 1,
    
  },
  
  imagemdeFundo: {
    flex: 1,
    
  },
  header: {
    backgroundColor: "#B68458",
    flexDirection: "row",
    height:90,
    width:'100%',
    textAlign: "center",

  },

  headerTitle: {
    marginTop:20,
    fontSize:24,
    alignSelf: "center",
    marginLeft: 25,
    fontFamily: "ZillaSlab_700Bold"
    
  },

  headerimg: {
        marginTop:40,
        marginLeft:10,

  },

  messagesList: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 80, 
  },

  
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 30,
  },

  
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ddd', 
    borderRadius: 20, 
    paddingHorizontal: 12,
    marginRight: 8,
    backgroundColor: '#F3E6CE',
  },

  enviarButton: {
    backgroundColor: '#708D73',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
  },

  enviarButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16, 
  },

  
  message: {
    padding: 12,
    marginVertical: 4,
    borderRadius: 10,
    maxWidth: '80%',
  },

  
  yourMessage: {
    backgroundColor: '#D2C2A4',
    alignSelf: 'flex-end',
  },

  
  otherMessage: {
    backgroundColor: '#F3E6CE',
    alignSelf: 'flex-start',
  },
  
  messageText: {
    fontSize: 16,
    color: '#333', 
  },

  
  card: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
    backgroundColor: '#F7EDD5',
    padding: 16,
    borderRadius: 8,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#555',
    textAlign: 'center',
  },

  cardText: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },

  cardCloseButton: {
    backgroundColor: '#708D73',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    borderColor: 'black',
  },

  cardCloseButtonText: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 15,
  },

  
  optionsContainer: {
    justifyContent: 'flex-start',
    marginTop: 20,
  },

  optionButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    margin: 5,
    alignItems: 'center',
    elevation: 2, 
  },

  optionButtonText: {
    color: '#333',
    fontSize: 14,
    textAlign: 'center', 
  },
});

export default styles;
