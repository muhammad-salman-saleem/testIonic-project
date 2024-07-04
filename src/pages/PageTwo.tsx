import React, { useState } from "react";
import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonHeader,
  IonContent,
  IonNavLink,
  IonToolbar,
  IonTitle,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel,
  IonDatetime,
  IonPicker,
} from "@ionic/react";
import "./Home.css";
import PageThree from "./PageThree";

function PageTwo() {
    const [textSelect, setTextSelect] = useState<string>("Please select the pise type");
  const isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    return utcDay !== 0 && utcDay !== 6;
  };
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Page Two</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding" >
        <div>
          <IonAccordionGroup>
            <IonAccordion value="first">
              <IonItem slot="header" color="light">
                <IonLabel>First Accordion</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                First Content
              </div>
            </IonAccordion>
            <IonAccordion value="second">
              <IonItem slot="header" color="light">
                <IonLabel>Second Accordion</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                Second Content
              </div>
            </IonAccordion>
            <IonAccordion value="third">
              <IonItem slot="header" color="light">
                <IonLabel>Third Accordion</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                Third Content
              </div>
            </IonAccordion>
          </IonAccordionGroup>
          <div style={{marginTop:"20px",marginBottom:"20px",display:"flex",justifyContent:"center"}}>
            <IonDatetime
              isDateEnabled={isWeekday}
              showDefaultTitle={true}
            ></IonDatetime>
          </div>
        </div>
        <div>
        <>
      <IonButton id="open-picker">Please select</IonButton>
      <IonPicker
        trigger="open-picker"
        columns={[
          {
            name: 'meat',
            options: [
              {
                text: 'Pepperoni',
                value: 'pepperoni',
              },
              {
                text: 'Smoked Ham',
                value: 'smoked-ham',
              },
              {
                text: 'Crispy Bacon',
                value: 'bacon',
              },
            ],
          },
          {
            name: 'veggies',
            options: [
              {
                text: 'Red onion',
                value: 'red-onion',
              },
              {
                text: 'Peppers',
                value: 'peppers',
              },
              {
                text: 'Black olives',
                value: 'black-olives',
              },
            ],
          },
          {
            name: 'crust',
            options: [
              {
                text: 'Pan style',
                value: 'pan',
              },
              {
                text: 'Hand tossed',
                value: 'hand-tossed',
              },
              {
                text: 'Stuffed crust',
                value: 'stuffed-crust',
              },
            ],
          },
        ]}
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Confirm',
            handler: (value) => {
            //   console.log(`You selected a ${value.crust.text} pizza with ${value.meat.text} and ${value.veggies.text}`);
              setTextSelect(`You selected a ${value.crust.text} pizza with ${value.meat.text} and ${value.veggies.text}`);
            },
          },
        ]}
      ></IonPicker>
    </>
        </div>
        <h4>{textSelect}</h4>
        <IonNavLink routerDirection="forward" component={() => <PageThree />}>
          <IonButton>Go to Page Three</IonButton>
        </IonNavLink>
      </IonContent>
    </>
  );
}

export default PageTwo;
