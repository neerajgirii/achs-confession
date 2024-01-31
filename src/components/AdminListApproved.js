import AdminLoginApproved from "../components/AdminLoginApproved";

const AdminListApproved = ({ confessions }) => {
  return (
    <div className="flex flex-wrap justify-center p-4 gap-4 ">
      {confessions
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((confess) => (
          <AdminLoginApproved key={confess.id} confession={confess} />
        ))}
    </div>
  );
};

export default AdminListApproved;
