
import {Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import {styles} from './styles';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export function Home() {

  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState<string>('');

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert('participante existe','participante já foi adicionado na lista');
     
    }
    setParticipants(prevState=> [...prevState, participantName]);
    setParticipantName('');

   
  }

  function handleParticipantDelete(name: string) {
    const deleteParticipant = () => {
      setParticipants(participants.filter(participant => participant !== name));
      // Alert.alert("Deletado!")
    }


    Alert.alert('deletar participante',`deseja deletar ${name} da lista de presença?`,[
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => deleteParticipant()
      }
    ])
   
}


  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
       <Text style={styles.eventDate}>data do evento</Text>
      <View style={styles.form}>
        <TextInput style={styles.input}  placeholder='Nome do participante' placeholderTextColor="#6b6b6b" onChangeText={text=> setParticipantName(text)} value={participantName}/>
         <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>+</Text>
         </TouchableOpacity>
      </View>

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map(participant => (
        
            <Participant  key={participant} name={participant} onRemove={()=>handleParticipantDelete(participant)}/>
        
        ))}
      </ScrollView>

    */}
     
     <Text style={styles.name}>Participantes</Text>
     <FlatList 
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant 
            key={item} 
            name={item} 
            onRemove={() => handleParticipantDelete(item)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />



    </View>
  );
}