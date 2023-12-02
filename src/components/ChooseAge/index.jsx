import './style.css';
import { AgeGroup } from '../AgeGroup';

export const ChooseAge = ({ ageGroups }) => {
  return (
    <div className="practice">
      <div className="practice__section text">
        <p>
          Mluvit s dítětem o respektu k vlastnímu tělu i tělu druhých nemusí být
          složité. Využijte každodenní situace jako podněty k rozhovoru a
          příležitosti k učení. Na připravených scénářích si můžete vyzkoušet,
          jak by takový rozhovor mohl probíhat.
        </p>
        <h1>Nejprve vyberte věkovou kategorii dítěte:</h1>
      </div>
      <div className="practice__section ages">
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
