import { Component } from "react";

const VERSION = 'Added persmission state check';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latLng: undefined,
      acceleration: undefined,
    };
  }

  onGetCurrentPosition(position) {
    const latLng = [position.coords.latitude, position.coords.longitude];
    this.setState({ latLng });
  }

  onDeviceMotionEvent(e) {
    const acceleration = e.acceleration;
    this.setState({ acceleration });
  }

  async componentDidMount() {
    if (DeviceMotionEvent.requestPermission) {
      const permissionState = await DeviceMotionEvent.requestPermission();
      if (permissionState === "granted") {
        window.addEventListener(
          "devicemotion",
          this.onDeviceMotionEvent,
          false
        );
      }
    }

    navigator.geolocation.getCurrentPosition(
      this.onGetCurrentPosition.bind(this)
    );
  }

  render() {
    const { latLng, acceleration } = this.state;
    return (
      <div>
        <h1>Safe App</h1>
        <p><i>{VERSION}</i></p>
        <h2>Location</h2>
        <p>{JSON.stringify(latLng)}</p>
        <h2>Acceleration</h2>
        <p>{JSON.stringify(acceleration)}</p>
      </div>
    );
  }
}
