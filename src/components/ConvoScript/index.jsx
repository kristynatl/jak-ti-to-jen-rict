import './style.css';
import { ResponseOption } from '../ResponseOption';
import { ActionButton } from '../ActionButton';
import { HistoryExchange } from '../HistoryExchange';
import { ageGroups } from '../../data/ageGroups';
import { useParams } from 'react-router';
import { useState } from 'react';

export const ConvoScript = () => {
  const { vek, scenar } = useParams();
  const chosenAge = ageGroups.find((group) => group.id === vek);
  const convoData = chosenAge.convos.find((convo) => convo.id === scenar);
  const script = convoData.script;

  const [action, setAction] = useState(null);
  const [resolvedConvo, setResolvedConvo] = useState([]);
  const [currentOptions, setCurrentOptions] = useState([]);

  const showResponses = () => {
    setAction('showOptions');
  };

  const selectResponse = (responseIndex, isCorrect) => {
    if (!isCorrect) {
      setCurrentOptions([...currentOptions, responseIndex]);
      setAction('tryAgain');
      return;
    }

    if (resolvedConvo.length + 1 === script.length) {
      setAction('finish');
      setResolvedConvo([...resolvedConvo, currentOptions]);
    } else {
      setResolvedConvo([...resolvedConvo, currentOptions]);
      setAction(null);
      setCurrentOptions([]);
    }
  };

  console.log(action);

  return (
    <>
      <div className="convo-script">
        {resolvedConvo.map((exchange, index) => {
          return (
            <HistoryExchange
              key={index}
              currentExchange={script[index]}
              incorrectAnswers={exchange}
              showCorrect={true}
            />
          );
        })}

        {resolvedConvo.length !== script.length ? (
          <HistoryExchange
            currentExchange={script[resolvedConvo.length]}
            incorrectAnswers={currentOptions}
            showCorrect={false}
          />
        ) : null}

        {action !== 'showOptions' ? (
          <ActionButton
            label={
              action === null
                ? 'Zobrazit reakce'
                : action === 'finish'
                ? 'Zkusit další scénář'
                : 'Odpovědět znovu'
            }
            onClick={showResponses}
          />
        ) : (
          script[resolvedConvo.length].responses.map((resp, index) => {
            if (currentOptions.includes(index)) {
              return null;
            }

            return (
              <ResponseOption
                key={index}
                order={index + 1}
                response={resp.response}
                onClick={() => {
                  selectResponse(index, resp.correct);
                }}
              />
            );
          })
        )}
      </div>

      <img
        className="convo__figure convo__figure--left"
        src="./../../pages/HomePage/img/girl.png"
        alt="Žena"
      />
      <img
        className="convo__figure convo__figure--right"
        src="./../../pages/HomePage/img/dad.png"
        alt="Chlapec"
      />
    </>
  );
};
