import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

const Tab1: React.FC = () => {
  const [joke, setJoke] = useState<string>('');

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      if (response.data && response.data.value) {
        setJoke(response.data.value);
      }
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Appel fetchData au chargement initial de la page
  }, []);

  const handleFetchJoke = () => {
    fetchData(); // Appel fetchData lorsque le bouton est cliqué
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Random Joke</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">random Joke</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="ion-padding">
          <p>{joke}</p>
          <IonButton onClick={handleFetchJoke}>New Joke</IonButton> {/* Bouton pour récupérer une nouvelle blague */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
