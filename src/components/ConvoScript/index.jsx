import './style.css';
import { ResponseOption } from '../ResponseOption';
import { ActionButton } from '../ActionButton';
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
  const [responseIndex, setResponseIndex] = useState(null);
  const [responsesVisible, setResponsesVisible] = useState(false);

  const exchanges = script.slice(0, exchangeIndex + 1);

  const showResponses = () => {
    setResponsesVisible(true);
  };

  return (
    <>
      <div className="convo-script">
        {exchanges.map((ex, index) => {
          return (
            <>
              <ConvoBubble
                key={index}
                speaker="child"
                status="neutral"
                content={ex.statement}
              />
              {responseIndex !== null ? (
                <ConvoBubble
                  speaker="adult"
                  status={
                    ex.responses[responseIndex].correct
                      ? 'correct'
                      : 'incorrect'
                  }
                  content={ex.responses[responseIndex].response}
                />
              ) : null}
            </>
          );
        })}

        {responsesVisible === false ? (
          <ActionButton label="Zobrazit reakce" onClick={showResponses} />
        ) : (
          exchanges[exchangeIndex].responses.map((resp, index) => {
            return (
              <ResponseOption
                key={index}
                order={index + 1}
                response={resp.response}
              />
            );
          })
        )}

        <ResponseFeedback status="true" content="Toto je zelený feedback" />
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
