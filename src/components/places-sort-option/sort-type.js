export const SortType = [{name: `DEFAULT`, value: `Popular`}, {name: `TO_HIGHT`, value: `Price: low to high`}, {name: `TO_LOW`, value: `Price: high to low`}, {name: `BY_RATE`, value: `Top rated first`}];

export const SortTypeFunction = {
  TO_HIGH: (a, b) => a.price.value - b.price.value,
  TO_LOW: (a, b) => b.price.value - a.price.value,
  BY_RATE: (a, b) => b.rating - a.rating,
  DEFAULT: () => { },
};


