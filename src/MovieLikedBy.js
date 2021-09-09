import React, { Component } from "react";


class MovieLikedBy extends Component {
  render() {
    const { movie_by_users } = this.props;


    return (
      <div>
        <h2>{movie_by_users.movie_name}</h2>
        <ol>
          {
            // 2 for users
            Object.values(movie_by_users)[2].map(user => {
              return <li> {user}</li>;
            })
          }
        </ol>
      </div>
    );
  }
};

export default MovieLikedBy;