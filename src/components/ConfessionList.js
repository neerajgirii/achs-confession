import Confession from "../components/Confession";

const ConfessionList = ({ confessions }) => {
  return (
    <div className="flex flex-wrap">
      {confessions
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((confess) => (
          <Confession key={confess.id} confession={confess} />
        ))}
    </div>
  );
};

export default ConfessionList;
