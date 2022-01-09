import './App.css';
import './custom-classes.css';

import Navbar from './components/nav-bar/Navbar';
import MoviesList from './container/movies-list/MoviesList';
import useMovies from './hooks/useMovies';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MoviesList />
       hello
    </div>
  );
}

export default App;
