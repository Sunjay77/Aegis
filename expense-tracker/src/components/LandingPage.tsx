import { useNavigate } from "react-router-dom";
import { AegisIcon } from "./icon";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#0f172a] px-5 py-10 text-[#f1f5f9]">
      <div className="flex flex-col items-center">
        <AegisIcon
          className="h-30 w-30 text-[#0c0c0c]"
          role="img"
          aria-label="Aegis logo"
        />
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Aegis</h1>
      </div>
      <p className="mt-5 text-center text-xl text-slate-400">
        Know where your money goes.
      </p>
      <div className="mt-5 w-full max-w-120 rounded-4xl border border-slate-600/70 bg-[#1e293b] px-10 py-5 shadow-lg sm:px-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <span className="text-xl text-slate-400">Total Spending</span>
          <span className="rounded-xl bg-[#063b20] px-8 py-5 text-xl font-semibold text-[#4ade80]">
            Rs 0.00
          </span>
        </div>
      </div>
      <button
        className="mt-12 w-full max-w-120 cursor-pointer rounded-4xl border-0 bg-[#f1f5f9] px-6 py-8 text-2xl font-semibold text-[#0f172a] transition-colors hover:bg-white"
        onClick={() => navigate("/app")}
      >
        Get Started
      </button>
    </div>
  );
};
