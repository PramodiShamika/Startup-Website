import services from "../data/services.json";

export default function Services() {
  return (
    <section id="services" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="text-gray-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
