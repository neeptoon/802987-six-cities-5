export const SortType = [
  {name: `DEFAULT`, value: `Popular`},
  {name: `TO_HIGH`, value: `Price: low to high`},
  {name: `TO_LOW`, value: `Price: high to low`},
  {name: `BY_RATE`, value: `Top rated first`}
];

export const SortTypeFunction = {
  TO_HIGH: (a, b) => a.price - b.price,
  TO_LOW: (a, b) => b.price - a.price,
  BY_RATE: (a, b) => b.rating - a.rating,
  DEFAULT: () => { },
};


