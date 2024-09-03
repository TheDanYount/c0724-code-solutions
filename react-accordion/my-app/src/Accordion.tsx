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
  const [currentTopicId, setCurrentTopicId] = useState<null | number>(null);

  return (
    <div className="max-w-[450px] m-auto mt-[20px] align-middle">
      {/* Purely for styling */}
      {topics.map((obj) => (
        <TopicCard
          key={obj.id}
          id={obj.id}
          title={obj.title}
          content={obj.content}
          currentTopicId={currentTopicId}
          onTitleClick={(num) =>
            currentTopicId !== num
              ? setCurrentTopicId(num)
              : setCurrentTopicId(null)
          }
        />
      ))}
    </div>
  );
}
