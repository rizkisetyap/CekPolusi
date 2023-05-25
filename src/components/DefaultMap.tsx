import { Marker, Map } from "pigeon-maps";
import { useState } from "react";
function mapTiler(x: any, y: any, z: any) {
	return `https://api.maptiler.com/maps/hybrid/${z}/${x}/${y}@2x.jpg?key=XzrOORTttMyEJH3maApU`;
}
const DefaultMap = () => {
	const [coord, _] = useState<any>([-6.295822235958122, 106.66600214516356]);
	const [zoom, setZoom] = useState(11);
	return (
		<Map
			provider={mapTiler}
			height={300}
			defaultCenter={coord}
			defaultZoom={zoom}
			dprs={[1, 2]}
			onBoundsChanged={(prop) => {
				setZoom(prop.zoom);
			}}
		>
			<Marker width={25} anchor={coord} />
		</Map>
	);
};

export default DefaultMap;
