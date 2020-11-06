export default {
  defaultCityCoordinats: [52.38333, 4.9],
  defaultZoom: 12,
  urlTemplate: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  urlOptions: {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contr` +
      `ibutors &copy; <a href="https://carto.com/attributions">CARTO</a>`
  },
  iconUrl: `img/pin.svg`,
  activeIconUrl: `img/pin-active.svg`,
  iconSize: [27, 39],
  style: {height: `100%`}
};
