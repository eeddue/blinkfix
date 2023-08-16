import { PiSpinner } from "react-icons/pi";

function Loader() {
  return (
    <div className="flex w-full min-h-screen items-center backdrop-blur-lg justify-center">
      <PiSpinner className="text-5xl text-white animate-spin" />
    </div>
  );
}

export default Loader;
