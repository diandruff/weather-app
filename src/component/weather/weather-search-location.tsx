import { Col, Row } from "react-bootstrap";
import { WeatherResponse } from "../../types/weather";
import { useState } from "react";
import { GetGeoLocationAsync } from "../../services/weather";

export interface WeatherSearchProps {
    onSearch?: (result: WeatherResponse) => void
  }
  
  export const WeatherSearchLocation = (props: WeatherSearchProps) => {

    const [searchLocation, setSearchLocation] = useState<string>("");

    const handleOnClickSearchAsync = async () => {
      let response = await GetGeoLocationAsync(searchLocation);
      if (response) {
        if(props.onSearch) {
          props.onSearch(response);
        }
      }
    };

    return (
      <Row className={"w-100"}>
          <Col>
            <div className={"input-group mb-3"}>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Search city"}
                onChange={(e) => {
                  setSearchLocation(e.target.value ?? "");
                }}
              ></input>
              <button
                className={"btn btn-primary"}
                type={"button"}
                onClick={() => handleOnClickSearchAsync()}
              >
                Search
              </button>
            </div>
          </Col>
        </Row>
    );
  };
  export default WeatherSearchLocation;
  