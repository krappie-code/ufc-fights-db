// UFC Fights Database - Question Generator  
// Updated: June 9, 2026 - Corrected event dates during heartbeat maintenance

export interface Fight {
  id: string;
  fighter1: string;
  fighter2: string;
  winner: string;
  method: string;
  round: number;
  time?: string;
  event: string;
  date: string;
  location: string;
  weightClass: string;
}

export const fights: Fight[] = [
  // UFC Fight Night: Muhammad vs Bonfim - June 8, 2026, Las Vegas NV (Meta APEX)
  {
    id: "ufc-fn-muhammad-bonfim-main",
    fighter1: "Gabriel Bonfim",
    fighter2: "Belal Muhammad",
    winner: "Gabriel Bonfim",
    method: "Unanimous Decision",
    round: 5,
    time: "5:00",
    event: "UFC Fight Night: Muhammad vs Bonfim",
    date: "2026-06-08",
    location: "Las Vegas, NV",
    weightClass: "Welterweight"
  },
  {
    id: "ufc-fn-muhammad-bonfim-allen-shahbazyan",
    fighter1: "Brendan Allen",
    fighter2: "Edmen Shahbazyan",
    winner: "Brendan Allen",
    method: "Unanimous Decision",
    round: 3,
    time: "5:00",
    event: "UFC Fight Night: Muhammad vs Bonfim",
    date: "2026-06-08",
    location: "Las Vegas, NV",
    weightClass: "Middleweight"
  },
  {
    id: "ufc-fn-muhammad-bonfim-nolan-ziam",
    fighter1: "Tom Nolan",
    fighter2: "Farès Ziam",
    winner: "Tom Nolan",
    method: "Unanimous Decision",
    round: 3,
    time: "5:00",
    event: "UFC Fight Night: Muhammad vs Bonfim",
    date: "2026-06-08",
    location: "Las Vegas, NV",
    weightClass: "Lightweight"
  },
  {
    id: "ufc-fn-muhammad-bonfim-mitchell-luna",
    fighter1: "Bryce Mitchell",
    fighter2: "Santiago Luna",
    winner: "Bryce Mitchell",
    method: "Submission (arm-triangle choke)",
    round: 3,
    time: "4:52",
    event: "UFC Fight Night: Muhammad vs Bonfim",
    date: "2026-06-08",
    location: "Las Vegas, NV",
    weightClass: "Bantamweight"
  },
  {
    id: "ufc-fn-muhammad-bonfim-baraniewski-tafa",
    fighter1: "Iwo Baraniewski",
    fighter2: "Junior Tafa",
    winner: "Iwo Baraniewski",
    method: "TKO (strikes)",
    round: 1,
    time: "1:25",
    event: "UFC Fight Night: Muhammad vs Bonfim",
    date: "2026-06-08",
    location: "Las Vegas, NV",
    weightClass: "Light Heavyweight"
  },
  {
    id: "ufc-fn-muhammad-bonfim-costa-schnell",
    fighter1: "Alessandro Costa",
    fighter2: "Matt Schnell",
    winner: "Alessandro Costa",
    method: "TKO (strikes)",
    round: 1,
    time: "2:32",
    event: "UFC Fight Night: Muhammad vs Bonfim",
    date: "2026-06-08",
    location: "Las Vegas, NV",
    weightClass: "Flyweight"
  },
  {
    id: "ufc-fn-muhammad-bonfim-mcghee-yannis",
    fighter1: "Marcus McGhee",
    fighter2: "John Yannis",
    winner: "Marcus McGhee",
    method: "Unanimous Decision",
    round: 3,
    time: "5:00",
    event: "UFC Fight Night: Muhammad vs Bonfim",
    date: "2026-06-08",
    location: "Las Vegas, NV",
    weightClass: "Bantamweight"
  },
  {
    id: "ufc-fn-muhammad-bonfim-chairez-silva",
    fighter1: "Edgar Chairez",
    fighter2: "Bruno Silva",
    winner: "Edgar Chairez",
    method: "Submission (rear-naked choke)",
    round: 1,
    time: "4:13",
    event: "UFC Fight Night: Muhammad vs Bonfim",
    date: "2026-06-08",
    location: "Las Vegas, NV",
    weightClass: "Flyweight"
  },
  {
    id: "ufc-fn-muhammad-bonfim-chandler-cachoeira",
    fighter1: "Chelsea Chandler",
    fighter2: "Priscila Cachoeira",
    winner: "Chelsea Chandler",
    method: "Submission (armbar)",
    round: 1,
    time: "3:42",
    event: "UFC Fight Night: Muhammad vs Bonfim",
    date: "2026-06-08",
    location: "Las Vegas, NV",
    weightClass: "Women's Bantamweight"
  },
  {
    id: "ufc-fn-muhammad-bonfim-brito-leavitt",
    fighter1: "Joanderson Brito",
    fighter2: "Jordan Leavitt",
    winner: "Joanderson Brito",
    method: "Submission (front choke)",
    round: 1,
    time: "4:19",
    event: "UFC Fight Night: Muhammad vs Bonfim",
    date: "2026-06-08",
    location: "Las Vegas, NV",
    weightClass: "Lightweight"
  },
  {
    id: "ufc-fn-muhammad-bonfim-chaves-duben",
    fighter1: "Jeisla Chaves",
    fighter2: "Yuneisy Duben",
    winner: "Jeisla Chaves",
    method: "Split Decision",
    round: 3,
    time: "5:00",
    event: "UFC Fight Night: Muhammad vs Bonfim",
    date: "2026-06-08",
    location: "Las Vegas, NV",
    weightClass: "Women's Flyweight"
  },
  {
    id: "ufc-fn-muhammad-bonfim-souza-carnelossi",
    fighter1: "Ketlen Souza",
    fighter2: "Ariane Carnelossi",
    winner: "Ketlen Souza",
    method: "KO (head kick)",
    round: 1,
    time: "1:34",
    event: "UFC Fight Night: Muhammad vs Bonfim",
    date: "2026-06-08",
    location: "Las Vegas, NV",
    weightClass: "Women's Strawweight"
  },
  // UFC Fight Night: Song vs Figueiredo - June 2, 2026, Macau (UFC Macau)
  {
    id: "ufc-macau-dias-lee",
    fighter1: "Luis Felipe Dias",
    fighter2: "YiSak Lee",
    winner: "Luis Felipe Dias",
    method: "TKO (strikes)",
    round: 1,
    time: "3:40",
    event: "UFC Fight Night: Song vs Figueiredo",
    date: "2026-06-02",
    location: "Macau, China",
    weightClass: "Middleweight"
  },
  {
    id: "ufc-macau-souza-ding",
    fighter1: "José Souza", 
    fighter2: "Ding Meng",
    winner: "José Souza",
    method: "Split Decision",
    round: 3,
    time: "5:00",
    event: "UFC Fight Night: Song vs Figueiredo",
    date: "2026-06-02",
    location: "Macau, China", 
    weightClass: "Welterweight"
  },
  {
    id: "ufc-macau-haddon-aoriqileng",
    fighter1: "Cody Haddon",
    fighter2: "Aoriqileng",
    winner: "Cody Haddon",
    method: "TKO (knee to liver)",
    round: 2,
    time: "2:11",
    event: "UFC Fight Night: Song vs Figueiredo", 
    date: "2026-06-02",
    location: "Macau, China",
    weightClass: "Bantamweight"
  },
  {
    id: "ufc-macau-tsuruya-gurule",
    fighter1: "Rei Tsuruya",
    fighter2: "Luis Gurule", 
    winner: "Rei Tsuruya",
    method: "Submission (rear-naked choke)",
    round: 1,
    time: "3:19",
    event: "UFC Fight Night: Song vs Figueiredo",
    date: "2026-06-02",
    location: "Macau, China",
    weightClass: "Flyweight"
  },
  {
    id: "ufc-macau-hill-xiong",
    fighter1: "Angela Hill",
    fighter2: "Xiong Jingnan",
    winner: "Angela Hill",
    method: "Unanimous Decision", 
    round: 3,
    time: "5:00",
    event: "UFC Fight Night: Song vs Figueiredo",
    date: "2026-06-02",
    location: "Macau, China",
    weightClass: "Strawweight"
  },
  {
    id: "ufc-macau-vera-zhu",
    fighter1: "Rodrigo Vera",
    fighter2: "Zhu Kangjie",
    winner: "Rodrigo Vera",
    method: "TKO (strikes)",
    round: 1, 
    time: "1:50",
    event: "UFC Fight Night: Song vs Figueiredo",
    date: "2026-06-02",
    location: "Macau, China",
    weightClass: "Bantamweight"
  },
  {
    id: "ufc-macau-amorim-lookboonmee",
    fighter1: "Jaqueline Amorim",
    fighter2: "Loma Lookboonmee",
    winner: "Jaqueline Amorim",
    method: "Submission (armbar)",
    round: 1,
    time: "4:04",
    event: "UFC Fight Night: Song vs Figueiredo",
    date: "2026-06-02", 
    location: "Macau, China",
    weightClass: "Strawweight"
  },
  // UFC Fight Night: Allen vs Costa - May 16, 2026, Las Vegas NV (COMPLETE)
  {
    id: "ufc-fn-allen-costa-main",
    fighter1: "Arnold Allen",
    fighter2: "Melquizael Costa", 
    winner: "Arnold Allen",
    method: "Unanimous Decision",
    round: 5,
    time: "5:00",
    event: "UFC Fight Night: Allen vs Costa",
    date: "2026-05-16",
    location: "Las Vegas, NV",
    weightClass: "Featherweight"
  },
  {
    id: "ufc-fn-allen-costa-co-main",
    fighter1: "DooHo Choi",
    fighter2: "Daniel Santos",
    winner: "DooHo Choi", 
    method: "TKO (strikes)",
    round: 2,
    time: "4:29",
    event: "UFC Fight Night: Allen vs Costa",
    date: "2026-05-16",
    location: "Las Vegas, NV",
    weightClass: "Featherweight"
  },
  {
    id: "ufc-fn-allen-costa-diaz-wellmaker",
    fighter1: "Juan Diaz",
    fighter2: "Malcolm Wellmaker",
    winner: "Juan Diaz",
    method: "Submission (rear-naked choke)",
    round: 2,
    time: "4:08", 
    event: "UFC Fight Night: Allen vs Costa",
    date: "2026-05-16",
    location: "Las Vegas, NV",
    weightClass: "Bantamweight"
  },
  {
    id: "ufc-fn-allen-costa-bukauskas-edwards",
    fighter1: "Modestas Bukauskas",
    fighter2: "Christian Edwards",
    winner: "Modestas Bukauskas",
    method: "Split Decision",
    round: 3,
    time: "5:00",
    event: "UFC Fight Night: Allen vs Costa", 
    date: "2026-05-16",
    location: "Las Vegas, NV",
    weightClass: "Light Heavyweight"
  },
  {
    id: "ufc-fn-allen-costa-sopaj-cuamba",
    fighter1: "Benardo Sopaj",
    fighter2: "Timmy Cuamba",
    winner: "Benardo Sopaj",
    method: "Submission (rear-naked choke)",
    round: 2,
    time: "2:25",
    event: "UFC Fight Night: Allen vs Costa",
    date: "2026-05-16", 
    location: "Las Vegas, NV",
    weightClass: "Bantamweight"
  },
  {
    id: "ufc-fn-allen-costa-williams-veretennikov",
    fighter1: "Khaos Williams",
    fighter2: "Nikolay Veretennikov",
    winner: "Khaos Williams",
    method: "TKO (strikes)",
    round: 1,
    time: "3:31",
    event: "UFC Fight Night: Allen vs Costa",
    date: "2026-05-16",
    location: "Las Vegas, NV", 
    weightClass: "Welterweight"
  },
  // Previous fights mentioned in HEARTBEAT.md
  {
    id: "ufc-fn-allen-costa-gantt-minev",
    fighter1: "Gantt",
    fighter2: "Minev", 
    winner: "Gantt",
    method: "TKO",
    round: 2,
    time: "2:51",
    event: "UFC Fight Night: Allen vs Costa",
    date: "2026-05-16",
    location: "Las Vegas, NV",
    weightClass: "TBD"
  },
  {
    id: "ufc-fn-allen-costa-vieira-cavalcanti",
    fighter1: "Vieira",
    fighter2: "Cavalcanti",
    winner: "Vieira", 
    method: "Unanimous Decision",
    round: 3,
    time: "5:00",
    event: "UFC Fight Night: Allen vs Costa",
    date: "2026-05-16",
    location: "Las Vegas, NV",
    weightClass: "TBD"
  },
  {
    id: "ufc-fn-allen-costa-brundage-petroski",
    fighter1: "Brundage",
    fighter2: "Petroski",
    winner: "Brundage",
    method: "TKO", 
    round: 2,
    time: "0:44",
    event: "UFC Fight Night: Allen vs Costa",
    date: "2026-05-16",
    location: "Las Vegas, NV",
    weightClass: "TBD"
  }
];

// Generate random fight questions for trivia/quiz
export function generateRandomQuestion(): { question: string; answer: string; options?: string[] } {
  const randomFight = fights[Math.floor(Math.random() * fights.length)];
  
  const questionTypes = [
    {
      question: `Who won the fight between ${randomFight.fighter1} and ${randomFight.fighter2} at ${randomFight.event}?`,
      answer: randomFight.winner
    },
    {
      question: `How did ${randomFight.winner} defeat ${randomFight.fighter1 === randomFight.winner ? randomFight.fighter2 : randomFight.fighter1}?`,
      answer: randomFight.method
    },
    {
      question: `In which round did ${randomFight.winner} win against ${randomFight.fighter1 === randomFight.winner ? randomFight.fighter2 : randomFight.fighter1}?`,
      answer: `Round ${randomFight.round}`
    }
  ];
  
  return questionTypes[Math.floor(Math.random() * questionTypes.length)];
}

export function getFightsByEvent(eventName: string): Fight[] {
  return fights.filter(fight => fight.event === eventName);
}

export function getFightsByDate(date: string): Fight[] {
  return fights.filter(fight => fight.date === date);
}