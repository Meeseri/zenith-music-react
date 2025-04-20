import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-cyber-purple p-4 flex justify-between items-center shadow-md">
    <h1 className="text-cyber-yellow text-xl font-bold">ZENITH</h1>
    <div className="space-x-4">
      <Link to="/" className="text-cyber-white hover:text-cyber-yellow">Home</Link>
      <Link to="/dashboard" className="text-cyber-white hover:text-cyber-yellow">Dashboard</Link>
      <Link to="/about" className="text-cyber-white hover:text-cyber-yellow">About</Link>
    </div>
  </nav>
);

export default Navbar;
