import { useState } from 'react';
import { TopicCard } from './TopicCard.tsx';

type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  topics: Topic[];
};

export function Accordion({ topics }: Props) {
  const [currentTopicId, setCurrentTopicId] = useState();

  return (
    <div className="max-w-[450px] m-auto mt-[20px] align-middle">
      {/* Purely for styling */}
      {topics.map((obj) => (
        <TopicCard
          key={obj.id}
          obj={obj}
          display={obj.id === currentTopicId}
          onTitleClick={() =>
            obj.id !== currentTopicId
              ? setCurrentTopicId(obj.id)
              : setCurrentTopicId(undefined)
          }
        />
      ))}
    </div>
  );
}
