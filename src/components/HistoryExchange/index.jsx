import { Fragment } from 'react';
import { ConvoBubble } from '../ConvoBubble';
import { ResponseFeedback } from '../ResponseFeedback';

export const HistoryExchange = ({
  currentExchange,
  incorrectAnswers,
  showCorrect,
  scrollRef,
}) => {
  const correctAnswer = currentExchange.responses.find(
    (response) => response.correct,
  );

  return (
    <>
      <ConvoBubble
        speaker="child"
        status="neutral"
        content={currentExchange.statement}
      />
      {incorrectAnswers.map((answerIndex) => {
        return (
          <Fragment key={answerIndex}>
            <ConvoBubble
              scrollRef={scrollRef}
              speaker="adult"
              status="incorrect"
              content={currentExchange.responses[answerIndex].response}
            />
            <ResponseFeedback
              status="false"
              content={currentExchange.responses[answerIndex].feedback}
            />
          </Fragment>
        );
      })}

      {showCorrect && (
        <>
          <ConvoBubble
            scrollRef={scrollRef}
            speaker="adult"
            status="correct"
            content={correctAnswer.response}
          />
          <ResponseFeedback status="true" content={correctAnswer.feedback} />
        </>
      )}
    </>
  );
};
