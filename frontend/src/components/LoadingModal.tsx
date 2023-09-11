import { ClipLoader } from "react-spinners";

const LoadingModal = () => {
  return (
    <div className="w-screen h-screen bg-black/25 absolute top-0 left-0 grid justify-center items-center z-50">
      <ClipLoader color="white" size={64} speedMultiplier={0.5} />
    </div>
  );
};

export default LoadingModal;
