type Props = {
  title: string;
  content: string;
  currentTopic: string;
  onTitleClick: (str: string) => void;
};

export function TopicCard({
  title,
  content,
  currentTopic,
  onTitleClick,
}: Props) {
  return (
    <>
      <h2
        onClick={() => onTitleClick(title)}
        className="my-[-1px] border-2 border-black bg-[#ddd]">
        {title}
      </h2>
      <p
        className={`my-[-1px] border-2 border-black ${
          currentTopic === title ? '' : 'hidden'
        }`}>
        {content}
      </p>
    </>
  );
}
