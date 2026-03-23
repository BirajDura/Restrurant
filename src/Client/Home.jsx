import Items from "./Items";
import OurTeam from "./OurTeam";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>

      {/* HERO */}
      <section
        id="home"
        className="h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')",
        }}
      >
        <div className="bg-black/60 p-10 rounded-xl text-center">
          <h1 className="text-6xl font-bold mb-4">Fast Food Restro</h1>
          <p className="text-xl mb-6">Experience the Taste of Perfection</p>
          <a
            href="#menu"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            View Menu
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">

          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
            className="rounded-xl shadow-xl"
          />

          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">About Our Restaurant</h2>
            <p className="text-gray-300 leading-relaxed">
              At MoMo Restro we combine traditional flavors with modern
              culinary creativity. Our chefs craft every dish with fresh
              ingredients to deliver an unforgettable dining experience.
            </p>
          </div>

        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-24 bg-black">
        <Items />
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 bg-gray-900">
        <OurTeam />
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-black">
        <Contact />
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-8 text-center">
        © 2026 MoMo Restro — All Rights Reserved
      </footer>

    </div>
  );
};

export default Home;