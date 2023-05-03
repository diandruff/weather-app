import { Col, Row } from "react-bootstrap";
import { WeatherDetail } from "../../types/weather";
import WeatherIcon from "./weather-icon";

export interface WeatherTemperatureProps {
    weather?: WeatherDetail
  }
  
  export const WeatherTemperature = (props: WeatherTemperatureProps) => {
    return (
      <Row className={"w-100"}>
        <Col className={"d-flex justify-content-start"}>
          <WeatherIcon
            weather={props?.weather?.weather![0].main as never}
            width={60}
          />
          <h2 className={"p-1"}>
            {props?.weather?.main?.temp}°C
          </h2>
        </Col>
      </Row>
    );
  };
  export default WeatherTemperature;
  