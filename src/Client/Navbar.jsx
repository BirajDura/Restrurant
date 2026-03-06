const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold tracking-widest">RESTRO</h1>

        <div className="flex gap-8 text-lg">
          <a href="#home" className="hover:text-yellow-400 transition">Home</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#menu" className="hover:text-yellow-400 transition">Menu</a>
          <a href="#team" className="hover:text-yellow-400 transition">Team</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;