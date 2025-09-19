import React from "react";

const RevenueCard = ({ title, order, money }) => {
  return (
    <div className="mb-2 w-80 shadow-md shadow-stone-500 bg-slate-600 p-6 rounded-lg text-neutral-200 flex flex-col">
      <div>
        <h1 className="flex items-center gap-2 text-lg font-semibold text-gray-100">
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </h1>
      </div>
      <div className="flex justify-between items-center">
        <div>
          {money !== undefined && money !== null ? (
            <h2 className="text-3xl">${money}</h2>
          ) : (
            <h1>gareeb</h1>
          )}
        </div>
        <div>
          {order ? (
            <div className="flex items-center gap-1">
              <a
                className="underline flex items-center text-blue-500"
                href="https://www.youtube.com"
              >
                <span>{order}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RevenueCard;
