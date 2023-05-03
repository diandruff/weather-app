import { Col, Row } from "react-bootstrap";
import { WeatherDetail } from "../../types/weather";

export interface WeatherTitleProps {
    weather?: WeatherDetail
  }
  
  export const WeatherTitle = (props: WeatherTitleProps) => {
    return (
    <Row className={"w-100"}>
        <Col className={"d-flex justify-content-start"}>
            <h2>{props.weather?.name}, {props.weather?.sys?.country}</h2>
            {props.weather?.sys?.country && (
                    <img
                    height={20}
                      className={"p-1"}
                      src={`https://openweathermap.org/images/flags/${props.weather?.sys?.country?.toLowerCase()}.png`}
                    ></img>
                  )}
          </Col>
        </Row>
    );
  };
  export default WeatherTitle;
  