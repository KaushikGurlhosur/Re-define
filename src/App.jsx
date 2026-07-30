const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative">
        {/* Glow */}
        <h1 className="absolute inset-0 text-8xl font-zentry tracking-widest text-black/20 blur-sm select-none">
          ReDefine
        </h1>

        {/* Glass */}
        <h1 className="relative text-8xl font-zentry tracking-widest bg-linear-to-b from-black/90 via-balck/50 to-white/10 bg-clip-text text-transparent">
          ReDefine
        </h1>
      </div>
    </div>
  );
};

export default App;
