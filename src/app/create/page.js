import AddConfession from "../../components/AddConfession";
import Navbar from "../../components/Navbar";

const page = async () => {
  return (
    <div>
      <Navbar />
      <div>
        <AddConfession />
      </div>
    </div>
  );
};

export default page;
