import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col space-y-10 min-h-screen items-center justify-center bg-gray-100">
      <div className="">
        <h1 className="text-4xl">Ageis</h1>
      </div>
      <button
        className="cursor-pointer rounded-lg border-0 bg-gray-800 px-6 py-3 text-base text-white transition-colors hover:bg-gray-600"
        onClick={() => navigate("/app")}
      >
        Get Started
      </button>
    </div>
  );
};
