import { Component } from "react";

const VERSION = "version: 12.35pm";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latLng: undefined,
      acceleration: undefined,
      statusList: [],
    };
  }

  setStatus(status) {
    let newStatusList = this.state.statusList;
    newStatusList.push(status);
    this.setState({ newStatusList });
  }

  onGetCurrentPosition(position) {
    const latLng = [position.coords.latitude, position.coords.longitude];
    this.setState({ latLng });
  }

  onDeviceMotionEvent(e) {
    const acceleration = e.acceleration;
    this.setState({ acceleration });
  }

  onGetDeviceMotionEventPermission(permissionState) {
    this.setStatus(`permissionState = ${permissionState}`);
    if (permissionState === "granted") {
      window.addEventListener("devicemotion", this.onDeviceMotionEvent, false);
    }
  }

  async componentDidMount() {
    this.setStatus("Checking for DeviceMotionEvent.requestPermission");
    if (
      DeviceMotionEvent &&
      typeof DeviceMotionEvent.requestPermission === "function"
    ) {
      this.setStatus("Requesting Permission");

      DeviceMotionEvent.requestPermission()
        .then(this.onGetDeviceMotionEventPermission.bind(this))
        .catch(this.setStatus.bind(this));

    } else {
      this.setStatus("DeviceMotionEvent.requestPermission missing");
    }

    navigator.geolocation.getCurrentPosition(
      this.onGetCurrentPosition.bind(this)
    );
  }

  render() {
    const { latLng, acceleration, statusList } = this.state;
    return (
      <div>
        <p>
          <i>{VERSION}</i>
        </p>

        <h1>Safe App</h1>
        <ul>
          {statusList.map(function (status, i) {
            return <li key={`li-status-${i}`}>{status}</li>;
          })}
        </ul>
        <h2>Location</h2>
        <p>{JSON.stringify(latLng)}</p>
        <h2>Acceleration</h2>
        <p>{JSON.stringify(acceleration)}</p>
      </div>
    );
  }
}
