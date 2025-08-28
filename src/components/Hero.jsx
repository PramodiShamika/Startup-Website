export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold">Build Your Startup with Us</h1>
      <p className="mt-4 text-lg md:text-xl">We help you grow your business online</p>
      <a href="#contact" className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-200">Get Started</a>
    </section>
  );
}
