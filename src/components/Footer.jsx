export default function Footer() {
  return (
    <footer className="py-6 bg-gray-900 text-white text-center">
      <p>© {new Date().getFullYear()} Startup. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:text-blue-400">Facebook</a>
        <a href="#" className="hover:text-blue-400">Twitter</a>
        <a href="#" className="hover:text-blue-400">LinkedIn</a>
      </div>
    </footer>
  );
}
