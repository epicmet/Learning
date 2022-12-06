import { Task } from "./types";
import { compose, map } from "ramda";

const makeWeatherUrl = ({ zip, apiKey }) =>
  `http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&APPID=${apiKey}`;

const fetchIt = (url) =>
  Task((reject, resolve) =>
    fetch(url)
      .then((x) => x.json())
      .then(resolve)
      .catch(reject)
  );

const OpenWeather = {
  fetch: compose(fetchIt, makeWeatherUrl),
};

export { OpenWeather };
