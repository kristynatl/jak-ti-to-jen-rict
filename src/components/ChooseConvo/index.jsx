import './style.css';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { ageGroups } from '../../data/ageGroups';

import { TopicOption } from '../TopicOption';
import { useState } from 'react';

export const ChooseConvo = () => {
  const { vek } = useParams();
  const ageGroupData = ageGroups.find((group) => group.id === vek);

  const getConvoState = (convo) => {
    const savedConvo = JSON.parse(localStorage.getItem(convo.id));

    let state = 'notStarted';

    if (savedConvo !== null) {
      if (savedConvo.length === convo.script.length) {
        state = 'finished';
      } else {
        state = 'inProgress';
      }
    }
    return state;
  };

  return (
    <>
      <div className="topics__header">
        <Link to="/nacvik-rozhovoru" className="back">
          <img src="/img/back-icon.png" className="back__icon" />
          <p className="back__text">zpět na výběr věkové kategorie</p>
        </Link>
        <h2 className="selected-age__age">{ageGroupData.text}</h2>
      </div>
      <div className="container container--margin">
        <div className="content-section">
          <img
            className="selected-age__image"
            src={ageGroupData.src}
            alt={ageGroupData.alt}
          />
          <h1 className="content-section__heading center">
            Vyberte jeden z následujících scénářů:
          </h1>
        </div>
        <div className="content-section topics-list">
          {ageGroupData.convos.map((convo, index) => {
            return (
              <TopicOption
                state={getConvoState(convo)}
                key={index}
                order={index + 1}
                topic={convo.topic}
                path={convo.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
