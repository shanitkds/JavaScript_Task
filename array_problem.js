const movies = [
    {
        title: "Inception",
        year: 2010,
        rating: 8.8,
        genre: "Sci-Fi",
    },
    {
        title: "Interstellar",
        year: 2014,
        rating: 8.6,
        genre: "Sci-Fi",
    },
    {
        title: "The Dark Knight",
        year: 2008,
        rating: 9.0,
        genre: "Action",
    },
    {
        title: "The Godfather",
        year: 1972,
        rating: 9.2,
        genre: "Crime",
    },
    {
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "Drama",
    },
    {
        title: "Avengers: Endgame",
        year: 2019,
        rating: 8.4,
        genre: "Action",
    },
    {
        title: "The Room",
        year: 2003,
        rating: 3.7,
        genre: "Drama",
    },
];


const toprate=movies.filter((movies)=>{

    return movies.rating>=9
    
})

const title=movies.map((movie)=>{
    return movie.title
})

const topmovietitle=movies.map((movies)=>{

    if (movies.rating>=9) {

        return movies.title
    }
     
    
})

// console.log(toprate);
// console.log(title);
// console.log(topmovietitle);

