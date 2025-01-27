// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(element => element.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevensMovies = moviesArray.filter(movie => movie.genre.includes("Drama") && movie.director === "Steven Spielberg");
  return stevensMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }

  let scores = moviesArray.reduce((accumulator, currentValue) => {
    if (currentValue.rate) {
      return accumulator + currentValue.rate;
    } else {
      return accumulator;
    }
  }, 0  ); //initialValue to 0 - Objects const people example - Week 4 Day 1
  return Number ((scores / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let goDrama = moviesArray.filter((movie) => movie.genre.includes("Drama"));
  return scoresAverage(goDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let sortedByYear = moviesArray.sort((a, b) => {
    if (a.year < b.year) {return -1}
    if (a.year > b.year) {return 1}
    return 0;
  });
  console.log(sortedByYear(moviesArray));
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let sortedByTitle = moviesArray.sort((a, b) => {
    if (a.title < b.title) {return -1}
    if (a.title > b.title) {return 1}
    if (a.title === b.title) {return 0;}
  });
  let first20Movies = sortedByTitle.sort();
  return first20Movies.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
// function bestYearAvg(moviesArray) {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
