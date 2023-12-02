import './style.css';
import { ResponseOption } from '../ResponseOption';
import { ConvoBubble } from '../ConvoBubble';
import { ResponseFeedback } from '../ResponseFeedback';
import { ageGroups } from '../../data/ageGroups';
import { useParams } from 'react-router';
import { useState } from 'react';

export const ConvoScript = () => {
  const { vek, scenar } = useParams();
  const chosenAge = ageGroups.find((group) => group.id === vek);
  const convoData = chosenAge.convos.find((convo) => convo.id === scenar);
  const script = convoData.script;

  const [exchangeIndex, setExchangeIndex] = useState(0);

  const exchanges = script.slice(0, exchangeIndex + 1);

  return (
    <>
      <div className="convo-script">
        {exchanges.map((ex) => {
          return (
            <ConvoBubble
              speaker="child"
              status="neutral"
              content={ex.statement}
            />
          );
        })}
        <ConvoBubble speaker="child" status="neutral" content="Hola" />
        <ConvoBubble speaker="adult" status="incorrect" content="Jak je?" />
        <ConvoBubble speaker="adult" status="correct" content="Tralalá" />
        <ResponseFeedback status="false" content="Toto je červený feedback" />
        <ResponseFeedback status="true" content="Toto je zelený feedback" />
        <ResponseOption
          order="A"
          response="Víš, když jsi u někoho doma na návštěvě, musíš poslouchat jejich pravidla."
        />
        <ResponseOption
          order="B"
          response="Jeho táta se asi bál, že vám bude zima a nastydnete."
        />
        <ResponseOption
          order="C"
          response="Proč si myslíš, že se jeho táta tak zlobil?"
        />
      </div>

      <img
        className="how-to__figure left"
        src="./../pages/App/img/girl.png"
        alt="Žena"
      />
      <img
        className="how-to__figure right"
        src="./../pages/App/img/dad.png"
        alt="Chlapec"
      />
    </>
  );
};
