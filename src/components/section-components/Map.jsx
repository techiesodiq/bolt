/** @format */

import GoogleMapReact from "google-map-react";
import React, {Component} from "react";

const AnyReactComponent = () => (
	<div>
		<img src="assets/images/map-pin.png" alt="" />
	</div>
);
export default class Map extends Component {
	static defaultProps = {
		center: {
			lat: 43.66743,
			lng: -79.79429,
		},
		zoom: 12,
	};

	render() {
		return (
			// Important! Always set the container height explicitly
			<div style={{height: "561px", width: "100%"}}>
				<GoogleMapReact
					bootstrapURLKeys={{key: this.props.apiKey}}
					defaultCenter={this.props.mapLetLng}
					defaultZoom={this.props.zoom}
				>
					<AnyReactComponent
						lat={this.props.markerLet}
						lng={this.props.markerLng}
					/>
				</GoogleMapReact>
			</div>
		);
	}
}
