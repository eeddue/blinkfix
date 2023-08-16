import React from "react";

function EmptyComponent({ title }) {
  return (
    <div className="flex items-center justify-center mt-[100px] w-full">
      <p className="text-2xl lg:text-4xl text-white"> No {title} found!</p>
    </div>
  );
}

export default EmptyComponent;
