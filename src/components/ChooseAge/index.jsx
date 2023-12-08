import './style.css';

import { ageGroups } from '../../data/ageGroups';

import { AgeGroup } from '../AgeGroup';

export const ChooseAge = () => {
  return (
    <div className="container">
      <div className="content-section">
        <p className="content-section__text">
          Mluvit s dítětem o respektu k vlastnímu tělu i tělu druhých nemusí být
          složité. Využijte každodenní situace jako podněty k rozhovoru a
          příležitosti k učení. Na připravených scénářích si můžete vyzkoušet,
          jak by takový rozhovor mohl probíhat.
        </p>
        <h1 className="content-section__heading">
          Nejprve vyberte věkovou kategorii dítěte:
        </h1>
      </div>
      <div className="content__section ages">
        {ageGroups.map((group, index) => {
          return (
            <AgeGroup
              key={index}
              age={group.text}
              src={group.src}
              alt={group.alt}
              path={group.id}
            />
          );
        })}
      </div>
    </div>
  );
};
