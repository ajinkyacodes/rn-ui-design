import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const FacebookLogo = (props: SvgProps) => (
	<Svg width={26} height={26} viewBox='0 0 26 26' fill='none' {...props}>
		<Path
			d='M15.0135 26V14.141H18.9925L19.5895 9.51803H15.0135V6.56691C15.0135 5.22886 15.3836 4.31699 17.3045 4.31699L19.7505 4.31599V0.180999C19.3275 0.126029 17.8755 0 16.1855 0C12.6565 0 10.2405 2.15406 10.2405 6.10905V9.51803H6.24951V14.141H10.2405V26H15.0135Z'
			fill='#3D4DA6'
		/>
	</Svg>
);
export default FacebookLogo;
