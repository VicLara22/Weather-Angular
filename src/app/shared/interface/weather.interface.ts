export interface WeatherData {
    weather: WeatherElement[];
    main: Main;
    wind: Wind;
    sys: Sys;
    name: string;
}

export interface Coord {
    latitud: number;
    longitud: number;
}

interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}

interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

interface WeatherElement {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface Wind {
    speed: number;
    deg: number;
    gust: number;
}
