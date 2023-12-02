import { Link } from 'react-router-dom';
import './style.css';
import { useParams } from 'react-router';
import { TopicOption } from '../TopicOption';
import { ageGroups } from '../../data/ageGroups';

export const ChooseConvo = () => {
  const { vek } = useParams();
  const ageGroupData = ageGroups.find((group) => group.id === vek);

  return (
    <div className="choose-convo">
      <div className="choose-convo__section">
        <Link to="/nacvik-rozhovoru" className="back">
          <span>&#8249;</span>
          <p>zpět na výběr věkové kategorie</p>
        </Link>
        <img
          className="choose-convo__image"
          src={ageGroupData.src}
          alt={ageGroupData.alt}
        />
        <h2>{ageGroupData.text}</h2>
        <span className="choose-convo__underline" />
        <h1>Vyberte jeden z následujících scénářů:</h1>
      </div>
      <div className="choose-convo__section">
        {ageGroupData.convos.map((convo, index) => {
          return (
            <TopicOption
              key={index}
              order={index + 1}
              topic={convo.topic}
              path={convo.id}
            />
          );
        })}
      </div>
    </div>
  );
};
