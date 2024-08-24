import { StyleSheet } from "react-native";
import colortheme from './colors';

const styles = StyleSheet.create({

  card: {
    padding: 20,
    backgroundColor: colortheme.secondary,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 25,
  },

  title1: {
    color: colortheme.primary,
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold'
  },
  iconContainer: {
    position: 'absolute',
    top: 10, // Ajusta según lo necesites
    right: 10, // Ajusta según lo necesites
    zIndex: 1, // Asegura que el ícono esté encima del contenido
},
  subtitle: {
    color: '#1a1a1afc',
    fontSize: 16,
    fontWeight: 'bold'
  },
  titleArt: {
    color: colortheme.primary,
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 15
  },
  title: {
    fontSize: 20,
    padding: 5,
  },
  subInfo: {
    fontSize: 9,
  },
  picture: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  imageDetails: {
    width: 500,
    height: 500,
    margin: 0,
    justifyContent: 'start',
    alignItems: 'top'
  },
  
  logo: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#110303'
  },
  container: {
    flex: 1,
    backgroundColor: colortheme.background,
    margin:50
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  text: {
    color: colortheme.text,
    fontSize: 18,
  },
  text2: {
    color: colortheme.text,
    fontSize: 16,
  },
  button: {
    backgroundColor: colortheme.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    margin: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    alignItems: 'center',
  },
  buttonInline: {
    borderColor: colortheme.primary,
    borderWidth: 2, // Ancho del borde
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    margin: 5,
    alignItems: 'center',
    backgroundColor: 'transparent', // Fondo transparente
  },
  buttonText: {
    color: colortheme.background,
    fontSize: 16,
  },
  buttonInlineText: {
    color: colortheme.primary, // Color del texto que coincide con el borde
    fontSize: 16,
    fontWeight: 'bold',
  },
  section: {
    paddingVertical: 20,
    fontSize: 16,
  },
  input: {
    backgroundColor: "#FFFF",
    height: 40,
    marginVertical: 12,
    paddingLeft: 20,
    borderRadius: 8,
    justifyContent: 'flex-start'
  },
  validationText: {
    paddingLeft: 10,
    color: colortheme.primary, 
    fontSize: 13, 
    textAlign: 'left',
  },
  containerImage: {           // Ocupa todo el espacio disponible
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center',     // Centra horizontalmente
  },
});

export default styles;