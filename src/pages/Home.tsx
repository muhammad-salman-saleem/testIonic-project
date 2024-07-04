import { IonNav, IonPage } from "@ionic/react";
import PageOne from "./PageOne";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonNav root={() => <PageOne />}></IonNav>
    </IonPage>
  );
};

export default Home;
