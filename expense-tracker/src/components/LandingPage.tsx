interface LandingPageProps {
  onGetStarted: () => void;
}

export const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">Aegis</h1>
      </div>
      <button className="landing-buttton" onClick={onGetStarted}>
        Get Started
      </button>
    </div>
  );
};
