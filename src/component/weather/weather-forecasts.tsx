import { Col, Row } from "react-bootstrap";
import { WeatherDetail } from "../../types/weather";
import WeatherIcon from "./weather-icon";

export interface WeatherForecastsProps {
    weather?: WeatherDetail[]
  }
  
  export const WeatherForecasts = (props: WeatherForecastsProps) => {
    return (
      <>
      <h4>Weather forecast</h4>
            <Row className={"w-100 mt-2"}>
                <Col>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Temperature (°C)</th>
                      <th scope="col">Feels Like (°C)</th>
                      <th scope="col">Visibility (Km)</th>
                      <th scope="col">Humidity (%)</th>
                      <th scope="col">Weather</th>
                    </tr>
                  </thead>
                  <tbody>
                  {props?.weather?.map((item) => {
                  return (
                    <tr>
                      <th scope="row">{item?.dt_txt}</th>
                      <td>{item?.main?.temp}</td>
                      <td>{item?.main?.feels_like}</td>
                      <td>{(item?.visibility ?? 0)/1000}</td>
                      <td>{item?.main?.humidity}</td>
                      <td>
                        <WeatherIcon weather={item?.weather![0].main as never} width={35} />
                      </td>
                    </tr>
                  )})}
                  </tbody>
                </table>
                </Col>
            </Row>
      </>
    );
  };
  export default WeatherForecasts;
  