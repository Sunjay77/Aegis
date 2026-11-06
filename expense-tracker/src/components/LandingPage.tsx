import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <button
        className="cursor-pointer rounded-lg border-0 bg-gray-800 px-6 py-3 text-base text-white transition-colors hover:bg-gray-600"
        onClick={() => navigate("/app")}
      >
        Get Started
      </button>
    </div>
  );
};
