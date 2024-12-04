var express = require("express");
var router = express.Router();

const movies = [
  {
    id: 1,
    name: "Citizen Kane",
    director: "Orson Welles",
    description:
      "The story of Charles Foster Kane's rise to power and his tragic fall, told through a series of flashbacks.",
    year_released: 1941,
    actors: ["Orson Welles", "Joseph Cotten", "Dorothy Comingore"],
  },
  {
    id: 2,
    name: "Vertigo",
    director: "Alfred Hitchcock",
    description:
      "A retired detective with a fear of heights is drawn into a complex mystery involving deception and obsession.",
    year_released: 1958,
    actors: ["James Stewart", "Kim Novak", "Barbara Bel Geddes"],
  },
  {
    id: 3,
    name: "8½",
    director: "Federico Fellini",
    description:
      "A film director grapples with creative block and personal struggles while trying to make his next movie.",
    year_released: 1963,
    actors: ["Marcello Mastroianni", "Claudia Cardinale", "Anouk Aimée"],
  },
  {
    id: 4,
    name: "Rashomon",
    director: "Akira Kurosawa",
    description:
      "A crime is recounted from multiple perspectives, each presenting a different version of the truth.",
    year_released: 1950,
    actors: ["Toshiro Mifune", "Machiko Kyô", "Masayuki Mori"],
  },
  {
    id: 5,
    name: "The Seventh Seal",
    director: "Ingmar Bergman",
    description:
      "A knight returning from the Crusades plays chess with Death as he contemplates life, faith, and mortality.",
    year_released: 1957,
    actors: ["Max von Sydow", "Gunnar Björnstrand", "Bengt Ekerot"],
  },
  {
    id: 6,
    name: "The Godfather",
    director: "Francis Ford Coppola",
    description:
      "The rise and fall of the Corleone crime family in post-war America.",
    year_released: 1972,
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
  },
  {
    id: 7,
    name: "A Clockwork Orange",
    director: "Stanley Kubrick",
    description:
      "A dystopian tale of a young delinquent undergoing experimental rehabilitation.",
    year_released: 1971,
    actors: ["Malcolm McDowell", "Patrick Magee", "Adrienne Corri"],
  },
  {
    id: 8,
    name: "Taxi Driver",
    director: "Martin Scorsese",
    description:
      "A mentally unstable veteran becomes a New York City cab driver, descending into violence and alienation.",
    year_released: 1976,
    actors: ["Robert De Niro", "Jodie Foster", "Cybill Shepherd"],
  },
  {
    id: 9,
    name: "Pulp Fiction",
    director: "Quentin Tarantino",
    description: "Interwoven stories of crime and redemption in Los Angeles.",
    year_released: 1994,
    actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
  },
  {
    id: 10,
    name: "Andrei Rublev",
    director: "Andrei Tarkovsky",
    description:
      "A historical drama exploring the life of a 15th-century Russian icon painter.",
    year_released: 1966,
    actors: ["Anatoly Solonitsyn", "Ivan Lapikov", "Nikolai Grinko"],
  },
  {
    id: 11,
    name: "The 400 Blows",
    director: "François Truffaut",
    description:
      "A coming-of-age story about a young boy struggling with family and societal expectations in Paris.",
    year_released: 1959,
    actors: ["Jean-Pierre Léaud", "Claire Maurier", "Albert Rémy"],
  },
  {
    id: 12,
    name: "Blue Velvet",
    director: "David Lynch",
    description:
      "A young man discovers a dark underworld in his small town after finding a severed ear in a field.",
    year_released: 1986,
    actors: ["Kyle MacLachlan", "Isabella Rossellini", "Dennis Hopper"],
  },
];

router.get("/", function (req, res, next) {
  res.render("movie", { movies });
});

module.exports = router;
