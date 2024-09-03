type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  obj: Topic;
  display: boolean;
  onTitleClick: () => void;
};

export function TopicCard({ obj, display, onTitleClick }: Props) {
  return (
    <>
      <h2
        onClick={onTitleClick}
        className="my-[-1px] border-2 border-black bg-[#ddd]">
        {obj.title}
      </h2>
      {display && (
        <p className="my-[-1px] border-2 border-black">{obj.content}</p>
      )}
    </>
  );
}
