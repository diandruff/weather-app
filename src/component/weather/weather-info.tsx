import { Col, Row } from "react-bootstrap";
import { WeatherDetail } from "../../types/weather";
import CustomButton from "../button";

export interface WeatherInfoProps {
    weather?: WeatherDetail
  }

  export const WeatherInfo = (props: WeatherInfoProps) => {
    return (
        <Row className={"w-100"}>
          <Col className={"d-flex flex-wrap p-1"}>
            <CustomButton text={`Humidity ${props?.weather?.main?.humidity}%`} className={"btn btn-primary"}></CustomButton>

            <CustomButton text={`Pressure ${props?.weather?.main?.pressure}hPa`} className={"btn btn-secondary"}></CustomButton>

            <CustomButton text={`Visibility ${(props?.weather?.visibility!)/1000}Km`} className={"btn btn-success"}></CustomButton>

            <CustomButton text={`Wind speed ${props?.weather?.wind?.speed!}m/s SE`} className={"btn btn-danger"}></CustomButton>

            <CustomButton text={`Sunrise ${new Date(props?.weather?.sys?.sunrise! * 1000).toUTCString()}`} className={"btn btn-success"}></CustomButton>

            <CustomButton text={`Sunset ${new Date(props?.weather?.sys?.sunset! * 1000).toUTCString()}`} className={"btn btn-primary"}></CustomButton>
          </Col>
      </Row>
    );
  };
  export default WeatherInfo;
  