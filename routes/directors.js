var express = require("express");
var router = express.Router();

const directors = [
  {
    id: 1,
    name: "Alfred Hitchcock",
    profile_path: "/images/directors/alfred_hitchcock.jpg",
    birth_year: 1899,
    death_year: 1980,
    first_film_year: 1925,
    last_film_year: 1976,
    movies: [
      "Psycho",
      "Rear Window",
      "Vertigo",
      "North by Northwest",
      "The Birds",
    ],
    nationality: "British",
    genres: ["Thriller", "Mystery", "Suspense"],
    style_description:
      "Known for masterful suspense and intricate plot twists, often exploring voyeurism and moral ambiguity.",
  },
  {
    id: 2,
    name: "Orson Welles",
    profile_path: "/images/directors/orson_welles.jpg",
    birth_year: 1915,
    death_year: 1985,
    first_film_year: 1941,
    last_film_year: 1985,
    movies: [
      "Citizen Kane",
      "The Magnificent Ambersons",
      "Touch of Evil",
      "Chimes at Midnight",
      "The Lady from Shanghai",
    ],
    nationality: "American",
    genres: ["Drama", "Mystery", "Noir"],
    style_description:
      "Pioneering use of deep focus, nonlinear storytelling, and groundbreaking camera techniques.",
  },
  {
    id: 3,
    name: "Akira Kurosawa",
    profile_path: "/images/directors/akira_kurosawa.jpg",
    birth_year: 1910,
    death_year: 1998,
    first_film_year: 1943,
    last_film_year: 1993,
    movies: [
      "Seven Samurai",
      "Rashomon",
      "Ikiru",
      "Yojimbo",
      "Throne of Blood",
    ],
    nationality: "Japanese",
    genres: ["Samurai", "Drama", "Action"],
    style_description:
      "Blended traditional Japanese themes with Western cinematic techniques, focusing on morality and human struggle.",
  },
  {
    id: 4,
    name: "Federico Fellini",
    profile_path: "/images/directors/federico_fellini.jpg",
    birth_year: 1920,
    death_year: 1993,
    first_film_year: 1950,
    last_film_year: 1990,
    movies: [
      "8½",
      "La Dolce Vita",
      "Amarcord",
      "La Strada",
      "Nights of Cabiria",
    ],
    nationality: "Italian",
    genres: ["Drama", "Comedy", "Fantasy"],
    style_description:
      "Known for surrealist imagery, deeply personal themes, and a carnival-like atmosphere.",
  },
  {
    id: 5,
    name: "Ingmar Bergman",
    profile_path: "/images/directors/ingmar_bergman.jpg",
    birth_year: 1918,
    death_year: 2007,
    first_film_year: 1946,
    last_film_year: 2003,
    movies: [
      "The Seventh Seal",
      "Wild Strawberries",
      "Persona",
      "Fanny and Alexander",
      "Cries and Whispers",
    ],
    nationality: "Swedish",
    genres: ["Drama", "Existential", "Psychological"],
    style_description:
      "Explored profound existential themes, often delving into human psychology and spiritual crises.",
  },
  {
    id: 6,
    name: "Stanley Kubrick",
    profile_path: "/images/directors/stanley_kubrick.jpg",
    birth_year: 1928,
    death_year: 1999,
    first_film_year: 1951,
    last_film_year: 1999,
    movies: [
      "2001: A Space Odyssey",
      "A Clockwork Orange",
      "The Shining",
      "Dr. Strangelove",
      "Full Metal Jacket",
    ],
    nationality: "American",
    genres: ["Sci-fi", "Drama", "Horror"],
    style_description:
      "Precision and perfectionism, with groundbreaking visuals and a focus on existential and philosophical themes.",
  },
  {
    id: 7,
    name: "Francis Ford Coppola",
    profile_path: "/images/directors/francis_ford_coppola.jpg",
    birth_year: 1939,
    death_year: null,
    first_film_year: 1963,
    last_film_year: 2022,
    movies: [
      "The Godfather",
      "Apocalypse Now",
      "The Godfather Part II",
      "The Conversation",
      "Bram Stoker's Dracula",
    ],
    nationality: "American",
    genres: ["Crime", "Drama", "War"],
    style_description:
      "Epic storytelling, character complexity, and exploration of human morality.",
  },
  {
    id: 8,
    name: "Jean-Luc Godard",
    profile_path: "/images/directors/jean-luc_godard.jpg",
    birth_year: 1930,
    death_year: 2022,
    first_film_year: 1960,
    last_film_year: 2022,
    movies: [
      "Breathless",
      "Weekend",
      "Pierrot le Fou",
      "Alphaville",
      "Contempt",
    ],
    nationality: "French",
    genres: ["Drama", "Experimental", "Romance"],
    style_description:
      "A pioneer of the French New Wave, breaking cinematic conventions with radical editing and storytelling.",
  },
  {
    id: 9,
    name: "Quentin Tarantino",
    profile_path: "/images/directors/quentin_tarantino.jpg",
    birth_year: 1963,
    death_year: null,
    first_film_year: 1992,
    last_film_year: 2019,
    movies: [
      "Pulp Fiction",
      "Kill Bill",
      "Django Unchained",
      "Inglourious Basterds",
      "Once Upon a Time in Hollywood",
    ],
    nationality: "American",
    genres: ["Crime", "Action", "Comedy"],
    style_description:
      "Stylized dialogue, nonlinear storytelling, and homage to pop culture and classic genres.",
  },
  {
    id: 10,
    name: "Andrei Tarkovsky",
    profile_path: "/images/directors/andrei_tarkovsky.jpg",
    birth_year: 1932,
    death_year: 1986,
    first_film_year: 1962,
    last_film_year: 1986,
    movies: ["Andrei Rublev", "Solaris", "Stalker", "Mirror", "Nostalgia"],
    nationality: "Russian",
    genres: ["Drama", "Sci-fi", "Spiritual"],
    style_description:
      "Poetic and meditative films with long takes, exploring metaphysical and spiritual questions.",
  },
  {
    id: 11,
    name: "David Lynch",
    profile_path: "/images/directors/david_lynch.jpg",
    birth_year: 1946,
    death_year: null,
    first_film_year: 1977,
    last_film_year: 2017,
    movies: [
      "Eraserhead",
      "Blue Velvet",
      "Mulholland Drive",
      "The Elephant Man",
      "Twin Peaks: Fire Walk with Me",
    ],
    nationality: "American",
    genres: ["Surreal", "Mystery", "Thriller"],
    style_description:
      "Surrealist imagery, dreamlike narratives, and exploration of the darker sides of human nature.",
  },
  {
    id: 12,
    name: "Martin Scorsese",
    profile_path: "/images/directors/martin_scorsese.jpg",
    birth_year: 1942,
    death_year: null,
    first_film_year: 1967,
    last_film_year: 2023,
    movies: [
      "Taxi Driver",
      "Goodfellas",
      "The Irishman",
      "Raging Bull",
      "The Departed",
    ],
    nationality: "American",
    genres: ["Crime", "Drama", "Biography"],
    style_description:
      "Dynamic storytelling, morally complex characters, and a focus on themes like guilt and redemption.",
  },
  {
    id: 13,
    name: "François Truffaut",
    profile_path: "/images/directors/françois_truffaut.jpg",
    birth_year: 1932,
    death_year: 1984,
    first_film_year: 1959,
    last_film_year: 1983,
    movies: [
      "The 400 Blows",
      "Jules and Jim",
      "Day for Night",
      "Shoot the Piano Player",
      "The Last Metro",
    ],
    nationality: "French",
    genres: ["Drama", "Romance", "Comedy"],
    style_description:
      "Heartfelt and deeply personal films that capture human emotions and relationships.",
  },
  {
    id: 14,
    name: "Wes Anderson",
    profile_path: "/images/directors/wes_anderson.jpg",
    birth_year: 1969,
    death_year: null,
    first_film_year: 1996,
    last_film_year: 2023,
    movies: [
      "The Grand Budapest Hotel",
      "Moonrise Kingdom",
      "Fantastic Mr. Fox",
      "The Royal Tenenbaums",
      "Rushmore",
    ],
    nationality: "American",
    genres: ["Comedy", "Drama", "Adventure"],
    style_description:
      "Whimsical and meticulously crafted films with symmetrical visuals and quirky characters.",
  },
  {
    id: 15,
    name: "Lars von Trier",
    profile_path: "/images/directors/lars_von_trier.jpg",
    birth_year: 1956,
    death_year: null,
    first_film_year: 1984,
    last_film_year: 2018,
    movies: [
      "Breaking the Waves",
      "Dancer in the Dark",
      "Melancholia",
      "Antichrist",
      "Dogville",
    ],
    nationality: "Danish",
    genres: ["Drama", "Experimental", "Psychological"],
    style_description:
      "Intense emotional narratives with provocative and often controversial themes.",
  },
];

const director = {
  id: "123",
  name: "Alfred Hitchcock",
  profile_path: "/images/directors/alfred_hitchcock.jpg",
};

router.get("/", function (req, res, next) {
  res.render("directors", { directors });
});

router.get("/director", function (req, res, next) {
  res.render("director", { director });
});

module.exports = router;
