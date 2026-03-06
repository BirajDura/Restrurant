import Davide from "../assets/Davide.png";
import Sam from "../assets/Sam.png";
import Miguel from "../assets/miguel.png";
import Manager from "../assets/Manager.png";

const OurTeam = () => {

const team = [
  { name:"Jazz", role:"Manager", img:Manager },
{ name:"Davide", role:"Head Chef", img:Davide },
{ name:"Sam", role:"Marketing Head", img:Sam },
{ name:"Miguel", role:"Food Specialist", img:Miguel },
];

return (

<section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">

<div className="max-w-6xl mx-auto text-center text-white px-6">

<h2 className="text-4xl md:text-5xl font-bold mb-16">
Meet Our Expert Team
</h2>

<div className="grid md:grid-cols-4 gap-4">

{team.map((member,i)=>(

<div
key={i}
className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:scale-105 hover:-translate-y-2 hover:bg-white/10 transition duration-300">

<img
src={member.img}
alt={member.name}
className="w-full h-64 object-cover rounded-xl mb-6"
/>

<h3 className="text-2xl font-semibold mb-1">{member.name}</h3>

<p className="text-yellow-400 text-lg">{member.role}</p>

</div>

))}

</div>
</div>
</section>
);
};

export default OurTeam;