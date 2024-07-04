import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react'
import React from 'react'

interface InputControlsProps {
  selectedValue: "mkg" | "ftlb";
  onSelectValue:(value:"mkg" | "ftlb")=>void;
}

const InputControls: React.FC<InputControlsProps> = ({ selectedValue,onSelectValue }) => {
    const inputChangeHandler=(event:CustomEvent)=>{
        onSelectValue(event.detail.value)
    }
  return (
    <IonSegment value={selectedValue} onIonChange={inputChangeHandler}>
      <IonSegmentButton value="mkg">
        <IonLabel>m/kg</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="ftlbs">
        <IonLabel>ft/lbs</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
}

export default InputControls;
