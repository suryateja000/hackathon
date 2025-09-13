import { Link } from 'react-router-dom';

<Link to="/problem-statements">
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(56, 189, 248, 0.6)' }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 
               hover:from-sky-600 hover:to-blue-700 text-white font-bold py-4 px-8 
               rounded-full text-lg transition-all duration-300 shadow-lg cursor-pointer"
  >
    <span>View Problem Statements !!</span>
    <span aria-hidden className="opacity-90">→</span>
  </motion.div>
</Link>
