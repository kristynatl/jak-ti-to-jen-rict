import { Link } from 'react-router-dom';
import './style.css';
import { useParams } from 'react-router';
import { TopicOption } from '../TopicOption';

export const ChooseConvo = ({ ageGroups }) => {
  const { id } = useParams();
  const ageGroupData = ageGroups.find((group) => group.id === id);

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
        <TopicOption order={1} topic="Zkoumání vlastního těla" />
        <TopicOption order={2} topic="Kde se berou děti" />
        <TopicOption order={3} topic="Soukromí" />
        <TopicOption order={4} topic="Potěšení ve vztahu" />
        <TopicOption order={5} topic="Osobní hranice" />
      </div>
    </div>
  );
};
