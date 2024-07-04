import React, { useState } from "react";
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonBadge,
  IonRippleEffect,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonChip,
  IonAvatar,
  IonIcon,
  IonFooter,
  IonNavLink,
  IonButton,
} from "@ionic/react";
import "./PageThree.css";
import { Camera, CameraResultType } from "@capacitor/camera";
import { closeCircle } from "ionicons/icons";
import PageFour from "./PageFour";

function PageThree() {
  const [capturedImage, setCapturedImage] = useState<string | undefined>();
  const formatNumber = (num: number) => {
    if (num < 1000) {
      return num.toString();
    } else if (num < 1000000) {
      return (num / 1000).toFixed(2) + "k";
    } else {
      return (num / 1000000).toFixed(2) + "M";
    }
  };

  const capturePicture = async () => {
    try {
      const photo = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
      });

      console.log("Photo captured:", photo?.webPath);
      setCapturedImage(photo?.webPath);
    } catch (error) {
      console.error("Error capturing photo:", error);
    }
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Page Three</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel>Followers</IonLabel>
            <IonBadge color="primary">22k</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Likes</IonLabel>
            <IonBadge color="secondary">118k</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Stars</IonLabel>
            <IonBadge color="tertiary">34k</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Completed</IonLabel>
            <IonBadge color="success">80</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Warnings</IonLabel>
            <IonBadge color="warning">70</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Notifications</IonLabel>
            <IonBadge color="danger">{formatNumber(2234561)}</IonBadge>
          </IonItem>
        </IonList>
        <div className="wrapper">
          <b>Click on a shape to see the ripple</b>

          <div
            className="ion-activatable ripple-parent circle "
            onClick={capturePicture}
          >
            Capture Picture
            <IonRippleEffect type="unbounded"></IonRippleEffect>
          </div>
          <IonChip>
            <IonAvatar>
              <img alt="Silhouette of a person's head" src={capturedImage} />
            </IonAvatar>
            <IonLabel>Muhammad Salman</IonLabel>
            <IonIcon icon={closeCircle}></IonIcon>
          </IonChip>
          {capturedImage && (
            <IonCard>
              <img
                alt="Silhouette of mountains"
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  marginTop: "20px",
                }}
                src={capturedImage}
              />
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                Here's a small text description for the card content. Nothing
                more, nothing less.
              </IonCardContent>
            </IonCard>
          )}
        </div>
        
      <IonNavLink routerDirection="forward" component={() => <PageFour />}>
          <IonButton>Go to Page Four</IonButton>
        </IonNavLink>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>Footer</IonTitle>
        </IonToolbar>
      </IonFooter>
    </>
  );
}

export default PageThree;
