import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieLikedBy from "./MovieLikedBy";



const profiles = [
  {
    id: 1,
    userID: "1",
    favoriteMovieID: "1"
  },
  {
    id: 2,
    userID: "2",
    favoriteMovieID: "1"
  },
  {
    id: 3,
    userID: "4",
    favoriteMovieID: "5"
  },
  {
    id: 4,
    userID: "5",
    favoriteMovieID: "2"
  },
  {
    id: 5,
    userID: "3",
    favoriteMovieID: "5"
  },
  {
    id: 6,
    userID: "6",
    favoriteMovieID: "4"
  }
];

const users = {
  1: {
    id: 1,
    name: "Jane Jones",
    userName: "coder"
  },
  2: {
    id: 2,
    name: "Matthew Johnson",
    userName: "mpage"
  },
  3: {
    id: 3,
    name: "Autumn Green",
    userName: "user123"
  },
  4: {
    id: 3,
    name: "John Doe",
    userName: "user123"
  },
  5: {
    id: 5,
    name: "Lauren Carlson",
    userName: "user123"
  },
  6: {
    id: 6,
    name: "Nicholas Lain",
    userName: "user123"
  }
};

const movies = {
  1: {
    id: 1,
    name: "Planet Earth"
  },
  2: {
    id: 2,
    name: "Selma"
  },
  3: {
    id: 3,
    name: "Million Dollar Baby"
  },
  4: {
    id: 4,
    name: "Forrest Gump"
  },
  5: {
    id: 5,
    name: "Get Out"
  }
};


// structured data & users and their favorite movies name
let st_data = profiles.map(profile => {
  const name = users[profile.userID].name;
  const user = users[profile.userID].userName;
  const fv_movie = movies[profile.favoriteMovieID];
  return { name, user, fv_movie };
});


// Display a list of movies where each movie contains a list of users that favorite it.
let movies_fav_list = [];

// loop through users, movies and match/append favorite movies and users
for (let [index, movie] of Object.entries(movies)) {
  for (let user of st_data) {
    if (user.fv_movie.id === movie.id) {
      // if movie array already exists
      if (movies_fav_list[index]) {
        movies_fav_list[index].users.push(user.name);
      }
      // create a new one for this movie & append users who likes it
      else if (!movies_fav_list[index]) {
        movies_fav_list[index] = { movie_id: movie.id, movie_name: movie.name, users: [user.name] };
      }
    }

  }
}

// finding the not favorite movie
for (let movie of Object.values(movies)) {
  if (!movies_fav_list[movie.name]) {
    movies_fav_list[movie.name] = ["None of the current users liked this movie"];
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="container">
        {
          movies_fav_list.map(movie => {
            return  <MovieLikedBy key={movie.id} movie_by_users={movie}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
