import './style.css';
import { ResponseOption } from '../ResponseOption';
import { ActionButton } from '../ActionButton';
import { ConvoBubble } from '../ConvoBubble';
import { ResponseFeedback } from '../ResponseFeedback';
import { ageGroups } from '../../data/ageGroups';
import { useParams } from 'react-router';
import { Fragment, useState } from 'react';

export const ConvoScript = () => {
  const { vek, scenar } = useParams();
  const chosenAge = ageGroups.find((group) => group.id === vek);
  const convoData = chosenAge.convos.find((convo) => convo.id === scenar);
  const script = convoData.script;

  const [responsesVisible, setResponsesVisible] = useState('hide');
  const [displayedConvo, setDisplayedConvo] = useState([null]);

  const previousConvo = displayedConvo.slice(0, displayedConvo.length - 1);

  const showResponses = () => {
    setResponsesVisible('show');
  };

  const selectResponse = (responseIndex) => {
    if (displayedConvo.length === script.length) {
      setResponsesVisible('finish');
      setDisplayedConvo([...previousConvo, responseIndex]);
    } else {
      setDisplayedConvo([...previousConvo, responseIndex, null]);
    }
  };

  return (
    <>
      <div className="convo-script">
        {displayedConvo.map((exchange, index) => {
          return (
            <Fragment key={index}>
              <ConvoBubble
                speaker="child"
                status="neutral"
                content={script[index].statement}
              />
              {exchange !== null ? (
                <>
                  <ConvoBubble
                    speaker="adult"
                    status={
                      script[index].responses[exchange].correct
                        ? 'correct'
                        : 'incorrect'
                    }
                    content={script[index].responses[exchange].response}
                  />
                  <ResponseFeedback
                    status={
                      script[index].responses[exchange].correct
                        ? 'true'
                        : 'false'
                    }
                    content={script[index].responses[exchange].feedback}
                  />
                </>
              ) : null}
            </Fragment>
          );
        })}

        {responsesVisible !== 'show' ? (
          <ActionButton
            label={
              responsesVisible === 'hide'
                ? 'Zobrazit reakce'
                : 'Zkusit další scénář'
            }
            onClick={showResponses}
          />
        ) : (
          script[displayedConvo.length - 1].responses.map((resp, index) => {
            return (
              <>
                <ResponseOption
                  key={index}
                  order={index + 1}
                  response={resp.response}
                  onClick={() => {
                    selectResponse(index);
                  }}
                />
              </>
            );
          })
        )}
      </div>

      {/* <img
        className="how-to__figure left"
        src="./../pages/App/img/girl.png"
        alt="Žena"
      />
      <img
        className="how-to__figure right"
        src="./../pages/App/img/dad.png"
        alt="Chlapec"
      /> */}
    </>
  );
};
