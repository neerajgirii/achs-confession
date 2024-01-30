import React from "react";

const Confession = ({ confession }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      {confession.status == "1" ? (
        <div className="flex flex-wrap w-96 p-10">
          <div
            key={confession.id}
            className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-96"
          >
            <div className="p-5">
              <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">
                {confession.crushName}
              </h5>
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {confession.crushClass}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {confession.crushConfession}
              </p>
              <p className="flex justify-end items-end">
                {formatDate(confession.createdAt)}
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Confession;
