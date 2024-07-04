import React, { useEffect, useState } from "react";
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonFab,
  IonFabButton,
  IonFabList,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonAvatar,
  IonItem,
  IonLabel,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
} from "@ionic/react";
import "./PageThree.css";
import { chevronUpCircle, colorPalette, globe, document } from "ionicons/icons";

function PageFour() {
  const [items, setItems] = useState<string[]>([]);

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 50; i++) {
      newItems.push(`Item ${1 + items.length + i}`);
    }
    setItems([...items, ...newItems]);
  };

  useEffect(() => {
    generateItems();
  }, []);
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Page Four</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton size="small">
            <IonIcon icon={chevronUpCircle}></IonIcon>
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton>
              <IonIcon icon={document}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={colorPalette}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={globe}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>
        <IonGrid>
          <IonRow>
            <IonCol>1</IonCol>
            <IonCol>2</IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow>
            <IonCol>1</IonCol>
            <IonCol>2</IonCol>
            <IonCol>3</IonCol>
          </IonRow>
        </IonGrid>

        <IonContent class="ion-padding">
          <IonList>
            {items.map((item, index) => (
              <IonItemSliding key={item}>
                <IonItem key={item}>
                  <IonAvatar slot="start">
                    <img
                      src={"https://picsum.photos/80/80?random=" + index}
                      alt="avatar"
                    />
                  </IonAvatar>
                  <IonLabel>{item}</IonLabel>
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption onClick={()=>alert("Process Edited")}>Edit</IonItemOption>
                </IonItemOptions>
                <IonItemOptions side="start">
                  <IonItemOption onClick={()=>alert("Process deleated")}>Delete</IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))}
          </IonList>
          <IonInfiniteScroll
            onIonInfinite={(ev) => {
              generateItems();
              setTimeout(() => ev.target.complete(), 1000);
            }}
          >
            <IonInfiniteScrollContent
              loadingText="Please wait..."
              loadingSpinner="bubbles"
            ></IonInfiniteScrollContent>
          </IonInfiniteScroll>
        </IonContent>
      </IonContent>
    </>
  );
}

export default PageFour;
