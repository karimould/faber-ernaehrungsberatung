import React from "react";
import detailsimage from "../../../img/hannover/Details_Hannover.jpg";

import "./details.scss";

// const Details = () => (
//   <div className="container details-container">
//     <div className="details-container-img" />
//     <div className="grid-oben">
// <h2 className="farbverlauf">
//   Ihre erfahrene Ernährungsberatung aus Langenhagen bei Hannover
// </h2>
// <p>
//   Du möchtest konsequent abnehmen, deine Ziele erreichen ohne dabei auf
//   ein bestimmtes Essen oder deinen Lieblingssnack verzichten zu müssen? Ob
//   Abnehmen, das Zunehmen, die Verdauung Optimieren, oder die Führung eines
//   gesünderen und bewussteren Lebens, egal welches Ziel du hast, bei uns
//   bist du genau richtig. Unsere Ernährungsberatung unterstützt dich dabei,
//   dass du deine liebsten Mahlzeiten essen kannst, nicht auf den Griff zur
//   Chipstüte verzichten musst und trotzdem langfristig deine Erfolge
//   erreichst. Ob in Hannover oder Umgebung, wir sind für dich da um
//   Gemeinsam deine Ernährung zu optimieren. Sollte deine Zeit für ein
//   persönliches Treffen zu kurz sein, kann deine Ernährungsberatung auch
//   per Telefon oder Skype ohne Einschränkungen stattfinden.
// </p>
//     </div>
//     <div className="grid-mitte-links farbverlauf">
//       <h2>Drei gute Gründe die für uns sprechen:</h2>
//     </div>
//     <div className="grid-links">
//       <div className="grund-container">
//         <span className="big-number-left blau">1</span>
//         <p className="p-container-left">
//           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
//           commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
//           et magnis dis parturient montes.
//         </p>
//       </div>
//     </div>
//     <div className="grid-rechts">
//       <div className="grund-container">
//         <span className="big-number-right blau">2</span>
//         <p className="p-container-right">
//           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
//           commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
//           et magnis dis parturient montes.
//         </p>
//       </div>
//     </div>
//     <div className="grid-bottom">
//       <div className="grund-container">
//         <span className="big-number-bottom blau">3</span>
//         <p className="p-container-bottom">
//           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
//           commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
//           et magnis dis parturient montes.
//         </p>
//       </div>
//     </div>
//   </div>
// );

const Details = () => (
  <div className="container">
    <div className="design-header">
      <h2 className="farbverlauf">
        Ihre erfahrene Ernährungsberatung aus Langenhagen bei Hannover
      </h2>
      <p>
        Du möchtest konsequent abnehmen, deine Ziele erreichen ohne dabei auf
        ein bestimmtes Essen oder deinen Lieblingssnack verzichten zu müssen? Ob
        Abnehmen, das Zunehmen, die Verdauung Optimieren, oder die Führung eines
        gesünderen und bewussteren Lebens, egal welches Ziel du hast, bei uns
        bist du genau richtig. Unsere Ernährungsberatung unterstützt dich dabei,
        dass du deine liebsten Mahlzeiten essen kannst, nicht auf den Griff zur
        Chipstüte verzichten musst und trotzdem langfristig deine Erfolge
        erreichst. Ob in Hannover oder Umgebung, wir sind für dich da um
        Gemeinsam deine Ernährung zu optimieren. Sollte deine Zeit für ein
        persönliches Treffen zu kurz sein, kann deine Ernährungsberatung auch
        per Telefon oder Skype ohne Einschränkungen stattfinden.
      </p>
    </div>
    <div className="background" />
    <div className="gruende-container">
      <div className="gruende-header">
        <h2 className="farbverlauf">Drei gute Gründe die für uns sprechen:</h2>
      </div>
      <div className="flex container-left">
        <span className="big-number-left blau">1</span>
        <p className="p-container-left">
          Der Döner zwischendurch ist zu verlockend? Kein Problem, das ist bei
          uns erlaubt! In deiner Ernährungsumstellung verzichtest mit uns nicht
          komplett auf Lebensmittel die du liebst.
        </p>
      </div>
      <div className="flex container-right">
        <span className="big-number-right blau">2</span>
        <p className="p-container-right">
          Bei uns gibt es keinen Einheitsbrei denn vorgefertigte Ernährungspläne
          sind uns ein Fremdwort! Es gibt für dich nur individuell auf dich
          angepasste Ernährungspläne, die auf Wunsch jederzeit verändert werden.
        </p>
      </div>
      <div className="flex container-bottom ">
        <span className="big-number-bottom blau">3</span>
        <p className="p-container-bottom">
          Egal an welchen Tagen du fragen hast, wir sind für dich da ! Ob per
          Telefon, per E-Mail, Whatsapp oder einfach direkt in Hannover zu einem
          Stück Schokoladenkuchen. Wir haben für dich immer Zeit.
        </p>
      </div>
    </div>
  </div>
);

export default Details;
