import { Col, Row } from "react-bootstrap";
import { WeatherDetail } from "../../types/weather";

export interface WeatherFeelsLikeProps {
    weather?: WeatherDetail
  }
  
  export const WeatherFeelsLike = (props: WeatherFeelsLikeProps) => {
    return (
      <Row className={"w-100"}>
        <Col className={"d-flex justify-content-start"}>
          <h4>Feels like {props?.weather?.main?.feels_like}°C,{" "}
          {props?.weather?.weather![0]?.description}</h4>
        </Col>
      </Row>
    );
  };
  export default WeatherFeelsLike;
  