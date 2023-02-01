
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({

    container:{
       backgroundColor: '#131016',
       flex: 1,
       padding:24
    },
    eventName:{
       color: '#fff',
       fontSize: 24,
       fontWeight: 'bold',
       marginTop: 48
    },
     eventDate:{
       color: '#6B6B6B',
       fontSize: 16,
     },
     input:{
          flex: 1,
         backgroundColor: '#1F1E25',
         height: 56,
         borderRadius: 5,
         color: '#fff',
         padding: 16,
         fontSize: 16,
         marginRight: 12,
     },
     buttonText:{
      color: '#fff',
      fontSize: 24,
     },
     button:{
      width: 56,
      height: 56,
      backgroundColor: '#31CF67',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
     },
     form:{
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42,
     },
     listEmptyText:{
         color: '#fff',
         fontSize: 16,
         textAlign: 'center',
     },
     name:{
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 16,
     }
 
 });
 