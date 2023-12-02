export const ResponseFeedback = ({ status, content }) => {
  return <div className={`convo__feedback ${status}`}>{content}</div>;
};
