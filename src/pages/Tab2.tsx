import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Tab2: React.FC = () => {
  const [joke, setJoke] = useState<string>('');

  const fetchDataCategory = async (category: string) => {
    try {
      const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
      if (response.data && response.data.value) {
        setJoke(response.data.value);
      }
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  useEffect(() => {
    // Fetch a random joke initially when component mounts
    fetchDataCategory('animal');
  }, []); // Empty dependency array means this effect runs only once on mount

  const handleFetchJoke = (category: string) => {
    fetchDataCategory(category);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Joke By Category</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Joke By Category</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="ion-padding">
          <p>{joke}</p>
          <IonButton onClick={() => handleFetchJoke('animal')}>Animal</IonButton>
          <IonButton onClick={() => handleFetchJoke('celebrity')}>Celebrity</IonButton>
          <IonButton onClick={() => handleFetchJoke('career')}>Career</IonButton>
          <IonButton onClick={() => handleFetchJoke('money')}>Money</IonButton>
          <IonButton onClick={() => handleFetchJoke('sport')}>Sport</IonButton>
          <IonButton onClick={() => handleFetchJoke('political')}>Political</IonButton>
          <IonButton onClick={() => handleFetchJoke('history')}>History</IonButton>
          <IonButton onClick={() => handleFetchJoke('food')}>Food</IonButton>
          <IonButton onClick={() => handleFetchJoke('science')}>Science</IonButton>
          <IonButton onClick={() => handleFetchJoke('religion')}>Religion</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
