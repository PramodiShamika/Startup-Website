export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">About Us</h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-8">
        We are a creative startup helping businesses go digital with modern design and technology.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {["Innovation", "Quality", "Growth"].map((value, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold">{value}</h3>
            <p className="text-gray-500 mt-2">We believe in {value.toLowerCase()} in everything we do.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
