type Props = {
  id: number;
  title: string;
  content: string;
  currentTopicId: number | null;
  onTitleClick: (num: number) => void;
};

export function TopicCard({
  id,
  title,
  content,
  currentTopicId,
  onTitleClick,
}: Props) {
  console.log('currentTopicId', currentTopicId);
  console.log('key', id);
  return (
    <>
      <h2
        onClick={() => onTitleClick(id)}
        className="my-[-1px] border-2 border-black bg-[#ddd]">
        {title}
      </h2>
      {currentTopicId === id && (
        <p className="my-[-1px] border-2 border-black">{content}</p>
      )}
    </>
  );
}
