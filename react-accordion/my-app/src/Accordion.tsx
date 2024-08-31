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
  const [currentTopic, setCurrentTopic] = useState('');

  return (
    <div className="max-w-[450px] m-auto mt-[20px] align-middle">
      {/* Purely for styling */}
      {topics.map((obj) => (
        <TopicCard
          key={obj.id}
          title={obj.title}
          content={obj.content}
          currentTopic={currentTopic}
          onTitleClick={(str) =>
            currentTopic !== str ? setCurrentTopic(str) : setCurrentTopic('')
          }
        />
      ))}
    </div>
  );
}
