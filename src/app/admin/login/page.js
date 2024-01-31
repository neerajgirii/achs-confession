import AdminListApproved from "../../../components/AdminListApproved";
import AdminListUnapproved from "../../../components/AdminListUnapproved";
import Navbar from "../../../components/Navbar";

async function getConfession() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/api/confessions`, {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch data: ${res.status} - ${res.statusText}`
      );
    }

    return res.json();
  } catch (error) {
    console.error(
      `Error fetching data from ${process.env.NEXT_PUBLIC_API_URL}:`,
      error
    );
    throw error;
  }
}

const page = async () => {
  const confessions = await getConfession();

  return (
    <>
      <Navbar />
      <div className="bg-red-300">
        <h1 className="flex justify-center text-3xl font-bold p-10">
          Unapproved Confessions
        </h1>
        <AdminListUnapproved confessions={confessions} />
      </div>
      <div className="bg-green-300 pt-10">
        <h1 className="flex justify-center text-3xl font-bold p-10">
          Approved Confessions
        </h1>
        <AdminListApproved confessions={confessions} />
      </div>
    </>
  );
};

export default page;
