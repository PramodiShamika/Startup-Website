import portfolio from "../data/portfolio.json";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Our Work</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {portfolio.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-56 object-cover"
            />
            <h3 className="p-4 text-lg font-semibold">{p.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
