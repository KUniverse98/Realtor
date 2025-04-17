import './WildSprings.css';

const WildSprings = () => {
  return (
    <div className="wildsprings-bg grid place-items-center h-screen relative">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10"></div>
      <div className="z-20 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">🌿 WildSprings Retreat</h1>
        <p className="text-lg max-w-md mx-auto">
          Escape into comfort. Nestled under oak trees, this peaceful home is available for Airbnb, rent, or sale.
        </p>
        <button className="mt-6 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg font-semibold backdrop-blur-md transition duration-300">
          Request a Tour
        </button>
      </div>
    </div>
  );
};

export default WildSprings;
