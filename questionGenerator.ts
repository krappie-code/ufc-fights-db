// UFC Fights Database - Question Generator  
// Updated: June 1, 2026 - Added UFC Macau (Song vs Figueiredo) results

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
  // UFC Fight Night: Song vs Figueiredo - May 31, 2026, Macau (UFC Macau)
  {
    id: "ufc-macau-dias-lee",
    fighter1: "Luis Felipe Dias",
    fighter2: "YiSak Lee",
    winner: "Luis Felipe Dias",
    method: "TKO (strikes)",
    round: 1,
    time: "3:40",
    event: "UFC Fight Night: Song vs Figueiredo",
    date: "2026-05-31",
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
    date: "2026-05-31",
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
    date: "2026-05-31",
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
    date: "2026-05-31",
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
    date: "2026-05-31",
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
    date: "2026-05-31",
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
    date: "2026-05-31", 
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