import contactImg from "../assets/contact.png";

const Contact = () => {
  return (

<section className="py-18 bg-gradient-to-b from-black via-gray-900 to-black text-white px-6">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

{/* LEFT IMAGE */}
<div>
<img
src={contactImg}
alt="restaurant"
className="rounded-2xl shadow-2xl w-full h-[420px] object-cover"
/>
</div>

{/* RIGHT FORM */}

<div>

<h2 className="text-4xl font-bold mb-6">
Contact Us
</h2>

<p className="text-gray-400 mb-8">
Have questions or want to reserve a table? Send us a message and our team will get back to you quickly.
</p>

<form className="space-y-5">

<input
type="text"
placeholder="Your Name"
className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-yellow-400"
/>

<input
type="email"
placeholder="Your Email"
className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-yellow-400"
/>

<textarea
rows="4"
placeholder="Your Message"
className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-yellow-400"
/>

<button
className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
>
Send Message
</button>

</form>

</div>

</div>

</section>
  );
};

export default Contact;