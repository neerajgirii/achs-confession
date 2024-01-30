import ConfessionList from "./ConfessionList";

async function getConfession() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/confessions` ||
      `${NEXT_PUBLIC_API_URL}`,
    {
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status} - ${res.statusText}`);
  }

  return res.json();
}

const Herosection = async () => {
  try {
    const confessions = await getConfession();
    return (
      <>
        <ConfessionList confessions={confessions} />
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default Herosection;
