import ConfessionList from "./ConfessionList";

async function getConfession() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/api/confessions/`, {
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
    throw error; // Re-throw the error to be caught by the higher-level catch block
  }
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
    console.error("Error rendering Herosection:", error);
    return null;
  }
};

export default Herosection;
