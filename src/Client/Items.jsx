import React from "react";

import burger from "../assets/ChickenBurger.jpg";
import ramen from "../assets/KoreanRamen.jpg";
import pizza from "../assets/MargheritaPizza.jpg";
import chicken from "../assets/CrispyFriedChicken.jpg";
import pasta from "../assets/CreamyPasta.jpg";
import salad from "../assets/FreshGardenSalad.jpg";
import cake from "../assets/ChocolateLavaCake.jpg";
import milkshake from "../assets/StrawberryMilkshake.jpg";

const Items = () => {
  const menuItems = [
    {
      name: "Himalayan Chicken Burger",
      image: burger,
      desc: "Grilled chicken patty layered with fresh lettuce, tomato, and creamy house sauce inside a toasted bun."
    },
    {
      name: "Spicy Korean Ramen",
      image: ramen,
      desc: "Hot and flavorful ramen noodles served with egg, vegetables, and rich spicy broth."
    },
    {
      name: "Classic Margherita Pizza",
      image: pizza,
      desc: "Wood-fired pizza topped with mozzarella cheese, fresh basil, and tomato sauce."
    },
    {
      name: "Crispy Fried Chicken",
      image: chicken,
      desc: "Golden crispy chicken pieces served with spicy dip and crunchy fries."
    },
    {
      name: "Creamy White Pasta",
      image: pasta,
      desc: "Italian style penne pasta cooked in rich creamy Alfredo sauce with herbs."
    },
    {
      name: "Fresh Garden Salad",
      image: salad,
      desc: "A healthy mix of lettuce, cucumber, tomato, olives, and lemon dressing."
    },
    {
      name: "Chocolate Lava Cake",
      image: cake,
      desc: "Warm chocolate cake with a rich molten chocolate center."
    },
    {
      name: "Strawberry Milkshake",
      image: milkshake,
      desc: "Sweet strawberry blended milkshake topped with whipped cream."
    }
  ];

  return (
    <section className="py-18 px-6 bg-gradient-to-b from-black/5 via-gray-900 to-black/5">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Our Signature Dishes
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our chef's carefully crafted menu featuring international
            flavors,  and unforgettable taste experiences.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:-translate-y-2 transition duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.name}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {item.desc}
                </p>

                {/* Button */}
                <button className="text-yellow-400 text-sm font-semibold hover:text-yellow-300 transition">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Items;