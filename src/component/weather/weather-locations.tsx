import { Col, Row } from "react-bootstrap";
import { WeatherResponse } from "../../types/weather";
import WeatherIcon from "./weather-icon";

export interface WeatherLocationsProps {
    weather?: WeatherResponse,
    onClick?: (lat: number, lon: number) => void
  }
  
  export const WeatherLocations = (props: WeatherLocationsProps) => {
    return (
        <Row className={"w-100"}>
        <Col>
          <ul className='list-group'>
            {props.weather?.list?.map((item) => {
              return (
                <li
                  className='list-group-item d-flex align-items-center justify-content-between'
                  onClick={() => {
                        if(props.onClick) {
                            props.onClick(item?.coord!.lat, item?.coord!.lon);
                        }
                    }
                  }
                >
                  <div
                    className={
                      "d-flex align-items-center justify-content-start w-50"
                    }
                  >
                    <span className={"p-1"}>{item?.name},</span>{" "}
                    <span className={"p-1"}>{item?.sys?.country}</span>
                    {item?.sys?.country && (
                      <img
                        className={"p-1"}
                        src={`https://openweathermap.org/images/flags/${item?.sys?.country?.toLowerCase()}.png`}
                      ></img>
                    )}
                  </div>

                  <span
                    className={
                      "p-1 w-25 d-flex align-items-center justify-content-start"
                    }
                  >
                    {item?.main?.temp}°C
                  </span>

                  <div
                    className={
                      "w-25 d-flex align-items-center justify-content-end"
                    }
                  >
                    <WeatherIcon weather={item?.weather![0].main as never} width={35} />
                  </div>
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    );
  };
  export default WeatherLocations;
  