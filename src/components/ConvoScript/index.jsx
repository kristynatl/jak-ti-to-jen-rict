import './style.css';
import { ResponseOption } from '../ResponseOption';
import { ActionButton } from '../ActionButton';
import { HistoryExchange } from '../HistoryExchange';
import { ageGroups } from '../../data/ageGroups';
import { useParams } from 'react-router';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

  const progressVariants = {
    progress: {
      width: `${(resolvedConvo.length / script.length) * 100}%`,
    },
  };

  return (
    <>
      <div className="convo-script">
        <Link to={`/nacvik-rozhovoru/${vek}`} className="back">
          <span>&#8249;</span>
          <p>zpět na výběr scénáře</p>
        </Link>
        <div className="convo-script__header">
          <h2>{convoData.topic}</h2>
          <div className="convo-script__progress-bar">
            <motion.div
              variants={progressVariants}
              animate="progress"
              className="convo-script__progress-fill"
            ></motion.div>
            <p className="convo-script__progress">
              {resolvedConvo.length}/{script.length}
            </p>
          </div>
        </div>
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
        src="/img/girl.webp"
        alt="Žena"
      />
      <img
        className="convo__figure convo__figure--right"
        src="/img/dad.webp"
        alt="Chlapec"
      />
    </>
  );
};
