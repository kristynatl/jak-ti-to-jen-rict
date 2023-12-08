import './style.css';

import { Fragment, useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { ageGroups } from '../../data/ageGroups';

import { ResponseOption } from '../ResponseOption';
import { ActionButton } from '../ActionButton';
import { HistoryExchange } from '../HistoryExchange';

export const ConvoScript = () => {
  const { vek, scenar } = useParams();
  const chosenAge = ageGroups.find((group) => group.id === vek);
  const convoData = chosenAge.convos.find((convo) => convo.id === scenar);
  const script = convoData.script;

  const storedConvo = localStorage.getItem(scenar);
  const initialConvo = storedConvo ? JSON.parse(storedConvo) : [];

  const [resolvedConvo, setResolvedConvo] = useState(initialConvo);
  const [action, setAction] = useState(null);
  const [currentOptions, setCurrentOptions] = useState([]);

  console.log(action);

  const scrollOnRevealRef = useRef(null);

  const navigate = useNavigate();

  const scrollOnReveal = () => {
    scrollOnRevealRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollOnReveal();
  }, [action]);

  useEffect(() => {
    localStorage.setItem(scenar, JSON.stringify(resolvedConvo));
  }, [resolvedConvo]);

  useEffect(() => {
    if (resolvedConvo.length === script.length) {
      setAction('finish');
    }
  }, []);

  const showResponses = () => {
    setAction('showOptions');
  };

  const handleNavigate = () => {
    navigate(`/nacvik-rozhovoru/${vek}`);
  };

  const selectResponse = (responseIndex, isCorrect) => {
    if (!isCorrect) {
      setCurrentOptions([...currentOptions, responseIndex]);
      setAction('tryAgain');
      return;
    }

    if (isCorrect && resolvedConvo.length + 1 !== script.length) {
      setResolvedConvo([...resolvedConvo, currentOptions]);
      setAction('continue');
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
      <div className="script__header">
        <Link to={`/nacvik-rozhovoru/${vek}`} className="back">
          <img src="/img/back-icon.png" className="back__icon" />
          <p className="back__text">zpět na výběr scénáře</p>
        </Link>
        <h2 className="script__heading">{convoData.topic}</h2>
        <p className="script__progress-value">
          {resolvedConvo.length}/{script.length}
        </p>
        <div className="script__progress-bar">
          <motion.div
            variants={progressVariants}
            animate="progress"
            className="script__progress-fill"
          ></motion.div>
        </div>
      </div>
      <div className="script__container">
        {resolvedConvo.map((exchange, index) => {
          return (
            <HistoryExchange
              scrollRef={scrollOnRevealRef}
              key={index}
              currentExchange={script[index]}
              incorrectAnswers={exchange}
              showCorrect={true}
            />
          );
        })}
        {resolvedConvo.length !== script.length ? (
          <>
            {action === 'continue' ? (
              <ActionButton
                label="Pokračovat"
                onClick={() => {
                  setAction(null);
                  setCurrentOptions([]);
                }}
              />
            ) : (
              <HistoryExchange
                scrollRef={scrollOnRevealRef}
                currentExchange={script[resolvedConvo.length]}
                incorrectAnswers={currentOptions}
                showCorrect={false}
              />
            )}
          </>
        ) : null}

        {action !== 'showOptions' ? (
          <>
            {action !== 'continue' ? (
              <ActionButton
                label={
                  action === null
                    ? 'Zobrazit reakce'
                    : action === 'finish'
                    ? 'Zkusit další scénář'
                    : 'Odpovědět znovu'
                }
                onClick={action === 'finish' ? handleNavigate : showResponses}
              />
            ) : null}
          </>
        ) : (
          script[resolvedConvo.length].responses.map((resp, index) => {
            if (currentOptions.includes(index)) {
              return null;
            }

            return (
              <Fragment key={index}>
                <div ref={scrollOnRevealRef} />
                <ResponseOption
                  order={index + 1}
                  response={resp.response}
                  onClick={() => {
                    selectResponse(index, resp.correct);
                  }}
                />
              </Fragment>
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
