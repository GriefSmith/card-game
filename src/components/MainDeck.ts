const cardTypes = ["♤", "♧", "♥", "♦"];
const ranks = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
];

const cardCode = cardTypes.flatMap((cardType) =>
  ranks.map((rank) => ({ cardType, rank }))
);

export { cardCode, ranks, cardTypes };
