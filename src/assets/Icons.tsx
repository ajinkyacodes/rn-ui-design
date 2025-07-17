import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
export const SendIcon = (props: SvgProps) => (
	<Svg width={24} height={24} viewBox='0 0 24 24' fill='none' {...props}>
		<Path
			d='M9.99994 14L12.2727 19.3032C12.5856 20.0331 13.5585 20.1103 13.9486 19.4185C14.7182 18.0535 15.8591 15.8522 16.9999 13C18.9999 8 19.9999 4 19.9999 4M9.99994 14L4.69672 11.7272C3.9668 11.4144 3.88969 10.4414 4.58143 10.0514C5.9464 9.28173 8.14778 8.14086 10.9999 7C15.9999 5 19.9999 4 19.9999 4M9.99994 14L19.9999 4'
			stroke='white'
			strokeWidth={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</Svg>
);
export const VideoIcon = (props: SvgProps) => (
	<Svg width={16} height={17} viewBox='0 0 16 17' fill='none' {...props}>
		<Path
			d='M0 4.59601V10.4557C0.0053125 11.7807 1.0875 12.847 2.40719 12.8416H10.9481C11.1909 12.8416 11.3862 12.6463 11.3862 12.4088V6.54945C11.3809 5.22445 10.2991 4.15789 8.97906 4.1632H0.438125C0.195313 4.1632 0 4.35851 0 4.59601ZM11.93 6.88195L15.4563 4.3057C15.7625 4.05258 16 4.1157 16 4.57507V12.4298C16 12.9526 15.7097 12.8891 15.4563 12.6991L11.93 10.1282V6.88195Z'
			fill='#4A8CFF'
		/>
	</Svg>
);
