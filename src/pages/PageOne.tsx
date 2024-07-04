import React from "react";
import {
  IonButton,
  IonHeader,
  IonContent,
  IonNavLink,
  IonToolbar,
  IonTitle,
  IonActionSheet,
} from "@ionic/react";

import PageTwo from "./PageTwo";
import ExploreContainer from "../components/ExploreContainer";
import type { OverlayEventDetail } from '@ionic/core';

function PageOne() {
    const logResult = (result: OverlayEventDetail) => {
        console.log(JSON.stringify(result, null, 2));
      };
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page One</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
      <IonContent class="ion-padding">
        <IonNavLink
          style={{ display: "flex", justifyContent: "center" }}
          routerDirection="forward"
          component={() => <PageTwo />}
        >
          <IonButton>Go to Page Two</IonButton>
        </IonNavLink>
        <div className="container">
      <IonButton style={{ display: "flex", justifyContent: "center" }} id="open-action-sheet">Open Action Sheat</IonButton>
      <IonActionSheet
        trigger="open-action-sheet"
        header="Action Sheat"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
        onDidDismiss={({ detail }) => logResult(detail)}
      ></IonActionSheet>
    </div>
      </IonContent>
    </>
  );
}

export default PageOne;
