export interface WeatherIconProps {
  width?: number
  weather?: "Rain" | "Clouds" | "Haze" | "Clear" | undefined;
}

export const WeatherIcon = (props: WeatherIconProps) => {
  return (
    <>
      {props.weather === "Rain" && (
        <img className={"p-1"} src={`/weather/rain.png`} width={props.width}></img>
      )}
      {props.weather === "Clouds" && (
        <img className={"p-1"} src={`/weather/cloudy.png`} width={props.width}></img>
      )}
      {props.weather === "Haze" && (
        <img className={"p-1"} src={`/weather/haze.png`} width={props.width}></img>
      )}
      {props.weather === "Clear" && (
        <img className={"p-1"} src={`/weather/sunny.png`} width={props.width}></img>
      )}
    </>
  );
};
export default WeatherIcon;
