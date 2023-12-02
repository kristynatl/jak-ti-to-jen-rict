export const ConvoBubble = ({ speaker, status, content }) => {
  return <div className={`convo__bubble ${speaker} ${status}`}>{content}</div>;
};
