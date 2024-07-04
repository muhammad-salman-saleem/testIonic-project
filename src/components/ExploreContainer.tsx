/** @format */

import { useRef, useState } from "react";
import "./ExploreContainer.css";
import {
  IonAlert,
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonRow,
} from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";
import InputControls from "./InputControls";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const [calculatedWeight, setCalculatedWeight] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState<string>("");
  const [calcUnits, setCalcUnits] = useState<"mkg" | "ftlb">("mkg");

  const weightCalculator = () => {
    try {
      const weight = weightInputRef.current!.value;
      const height = heightInputRef.current!.value;
      if (!weight || !height) {
        return;
      }
      const weightConversion = calcUnits === "mkg" ? 1 : 2.2;
      const heightConversion = calcUnits === "mkg" ? 1 : 3.38;
      const convertedWeight = +weight / weightConversion;
      const convertedHeight = +height / heightConversion;
      const bmi = convertedWeight / (convertedHeight * convertedHeight);
      setCalculatedWeight(bmi);
    } catch (error: any) {
      setIsOpen(true);
      setErrMessage(error.message);
      error(error.message);
    }
  };
  const weightReset = () => {
    try {
      weightInputRef.current!.value = "";
      heightInputRef.current!.value = "";
      setCalculatedWeight(null);
    } catch (error: any) {
      setIsOpen(true);
      setErrMessage(error.message);
      error(error.message);
    }
  };
  const setCalUnitHandler = (selectedValue: "mkg" | "ftlb") => {
    setCalcUnits(selectedValue);
  };
  return (
    <div id="container">
      <IonRow>
        <InputControls
          selectedValue={calcUnits}
          onSelectValue={setCalUnitHandler}
        />
      </IonRow>
      <IonList>
        <IonItem>
          <IonInput
            label={calcUnits === "mkg" ? "Weight in kg" : "Weight in lbs"}
            placeholder={`Enter your weight in ${
              calcUnits === "mkg" ? "kg" : "lbs"
            }`}
            type="number"
            ref={weightInputRef}
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonInput
            label={calcUnits === "mkg" ? "Height in meter" : "Height in feet"}
            placeholder={`Enter your height ${
              calcUnits === "mkg" ? "meter" : "feet"
            }`}
            type="number"
            ref={heightInputRef}
          ></IonInput>
        </IonItem>
        <div className="button_group">
          <IonButton
            className="buttonIonic"
            shape="round"
            onClick={weightCalculator}
          >
            <IonIcon slot="start" icon={calculatorOutline} />
            Calculate BMI
          </IonButton>
          <IonButton className="buttonIonic" shape="round" onClick={weightReset}>
            <IonIcon slot="start" icon={refreshOutline} />
            Reset
          </IonButton>
        </div>
      </IonList>
      {calculatedWeight !== null && (
        <IonCard>
          <IonCardContent>
            <h4>Your BMI is: {calculatedWeight}</h4>
          </IonCardContent>
        </IonCard>
      )}
      <IonAlert
        isOpen={isOpen}
        header="Error About the Input"
        message={errMessage}
        buttons={["Close"]}
        onDidDismiss={() => setIsOpen(false)}
      ></IonAlert>
    </div>
  );
};

export default ExploreContainer;
