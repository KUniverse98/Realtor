import './Cadley.css'

const Cadley = () => {
    return (
        <div className="cadley-bg grid place-items-center h-screen relative">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10"></div>
        <div className='z-20 items-center text-center center justify-center text-white'>
      <h1 className="text-5xl font-bold mb-4">🌿 Cadley Retreat</h1>
        <p className="text-lg max-w-md mx-auto">
        The Cadley ain't just a house—it's a fresh start wrapped in modern brick. Brand new, bold, and built to flex, this one's for the ones ready to level up.
        </p>
        <button className="mt-6 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg font-semibold backdrop-blur-md transition duration-300">
          Request a Tour
        </button>
        </div>
        </div>

    );
};

export default Cadley