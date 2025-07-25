import * as React from 'react';
import Svg, {
	G,
	Path,
	Defs,
	LinearGradient,
	Stop,
	ClipPath,
	Rect,
	SvgProps,
} from 'react-native-svg';
const StylishLogo = (props: SvgProps) => (
	<Svg width={275} height={100} viewBox='0 0 275 100' fill='none' {...props}>
		<G clipPath='url(#clip0_5017_51)'>
			<Path
				d='M124.993 49.9986C124.993 36.7382 119.725 24.0208 110.349 14.6442C100.972 5.2677 88.255 1.7389e-06 74.9946 0C61.7342 -1.73889e-06 49.017 5.2677 39.6404 14.6442C30.2638 24.0208 24.9961 36.7382 24.9961 49.9986H40.6209C45.7984 49.9986 49.8363 45.6597 51.7327 40.8418C52.9778 37.6787 54.8672 34.7718 57.3173 32.3213C62.0056 27.6331 68.3644 24.9993 74.9946 24.9993C81.6248 24.9993 87.9836 27.6331 92.6719 32.3213C97.3602 37.0096 99.9938 43.3684 99.9938 49.9986H124.993Z'
				fill='url(#paint0_linear_5017_51)'
			/>
			<Path
				d='M96.1907 69.1352C98.7034 63.069 99.9968 56.5674 99.9968 50.0017H124.993C124.993 77.6151 102.608 100 74.9948 100C70.6704 100 66.4739 99.4511 62.4722 98.4191C64.7364 97.8357 66.9619 97.0928 69.1317 96.1942C75.1978 93.6815 80.7096 89.9988 85.3525 85.3559C89.9953 80.7131 93.6783 75.2013 96.1907 69.1352Z'
				fill='#4392F9'
			/>
			<Path
				d='M0 49.9954C-9.3931e-07 56.5615 1.29325 63.0631 3.8059 69.1292C6.31858 75.1954 10.0014 80.7071 14.6442 85.35C19.287 89.9925 24.7988 93.6755 30.8649 96.1882C36.931 98.7009 43.4325 99.994 49.9986 99.994C56.5643 99.994 63.0659 98.7009 69.1321 96.1882C75.1982 93.6755 80.71 89.9925 85.3528 85.35C89.9957 80.7071 93.6783 75.1954 96.1911 69.1292C98.7038 63.0631 99.9972 56.5615 99.9972 49.9954H84.3724C79.1948 49.9954 75.1569 54.3343 73.2605 59.1519C73.2067 59.2892 73.1512 59.4258 73.0948 59.5625C71.8385 62.5954 69.9971 65.3514 67.6755 67.6727C65.3543 69.994 62.5982 71.8356 59.5653 73.092C56.5324 74.3483 53.2816 74.9949 49.9986 74.9949C46.7156 74.9949 43.4648 74.3483 40.4319 73.092C37.3986 71.8356 34.6429 69.994 32.3213 67.6727C30 65.3514 28.1586 62.5954 26.9022 59.5625C25.6459 56.5292 24.9993 53.2784 24.9993 49.9954H0Z'
				fill='url(#paint1_linear_5017_51)'
			/>
			<Path
				d='M0.00488281 49.9986C0.00488281 22.385 22.3899 0 50.0032 0C54.3266 0 58.5218 0.548716 62.5232 1.58035C53.9373 3.79217 46.0169 8.26832 39.6407 14.6443C30.2642 24.0207 24.9966 36.7382 24.9966 49.9986H0.00488281Z'
				fill='#F83758'
			/>
			<Path
				d='M147.138 64.36C145.911 64.36 144.718 64.2 143.558 63.88C142.398 63.56 141.151 63.06 139.818 62.38L138.438 64H137.198L136.418 53.86L138.078 53.6C138.931 56.5733 140.058 58.7267 141.458 60.06C142.871 61.3933 144.745 62.06 147.078 62.06C148.745 62.06 150.071 61.66 151.058 60.86C152.058 60.06 152.558 58.96 152.558 57.56C152.558 56.72 152.205 55.94 151.498 55.22C150.805 54.4867 149.605 53.7067 147.898 52.88L144.678 51.28C142.065 49.9867 140.145 48.5533 138.918 46.98C137.691 45.4067 137.078 43.5733 137.078 41.48C137.078 39.8667 137.525 38.4333 138.418 37.18C139.311 35.9133 140.518 34.92 142.038 34.2C143.571 33.48 145.305 33.12 147.238 33.12C149.945 33.12 152.265 33.94 154.198 35.58L155.138 33.48H156.458L156.838 42.24H155.098C154.445 39.9867 153.485 38.2933 152.218 37.16C150.965 36.0267 149.371 35.46 147.438 35.46C146.078 35.46 145.018 35.7933 144.258 36.46C143.498 37.1267 143.118 38.0467 143.118 39.22C143.118 40.1267 143.458 40.94 144.138 41.66C144.818 42.3667 145.998 43.1467 147.678 44L150.838 45.62C153.345 46.9 155.145 48.3067 156.238 49.84C157.345 51.3733 157.898 53.2133 157.898 55.36C157.898 57.0667 157.425 58.6 156.478 59.96C155.531 61.32 154.245 62.3933 152.618 63.18C150.991 63.9667 149.165 64.36 147.138 64.36ZM169.284 64.42C167.23 64.42 165.77 63.9733 164.904 63.08C164.037 62.1867 163.604 60.7533 163.604 58.78V45H160.804L160.564 43.78L168.544 37.7L169.764 37.9V43.02H175.884L175.304 45H169.764V58.38C169.764 60.5 170.59 61.56 172.244 61.56C172.71 61.56 173.15 61.48 173.564 61.32C173.977 61.16 174.357 60.8733 174.704 60.46L175.624 61.74C174.93 62.62 174.03 63.2867 172.924 63.74C171.817 64.1933 170.604 64.42 169.284 64.42ZM181.458 74.3C180.164 74.3 179.058 74.0133 178.138 73.44C177.231 72.8667 176.778 72.0133 176.778 70.88C176.778 70.12 177.031 69.5133 177.538 69.06C178.044 68.6067 178.644 68.38 179.338 68.38C179.924 68.38 180.444 68.5467 180.898 68.88C181.364 69.2133 181.698 69.72 181.898 70.4C182.084 71.0267 182.264 71.4333 182.438 71.62C182.611 71.82 182.878 71.92 183.238 71.92C183.704 71.92 184.164 71.6867 184.618 71.22C185.071 70.7533 185.444 70.1133 185.738 69.3L187.298 65.1L178.858 46C178.631 45.4933 178.291 45.1267 177.838 44.9C177.384 44.66 176.664 44.4933 175.678 44.4V43.02H188.598V44.4C187.758 44.4667 187.111 44.5733 186.658 44.72C186.218 44.8667 185.944 45.0733 185.838 45.34C185.731 45.6067 185.764 45.9533 185.938 46.38L190.538 57.22H190.738L194.718 47.54C195.171 46.5133 195.171 45.7533 194.718 45.26C194.278 44.7667 193.344 44.48 191.918 44.4V43.02H201.438V44.4C200.464 44.5867 199.718 44.7933 199.198 45.02C198.678 45.2467 198.271 45.56 197.978 45.96C197.684 46.3467 197.391 46.8867 197.098 47.58L187.978 69.58C187.604 70.4467 187.204 71.18 186.778 71.78C186.351 72.38 185.884 72.8733 185.378 73.26C184.404 73.9533 183.098 74.3 181.458 74.3ZM200.993 64V62.6L204.393 61.82V35.06L200.993 34V33.04L209.653 31.14H210.493V61.82L213.673 62.6V64H200.993ZM215.375 64V62.6L218.755 61.82V46.54L215.375 45.46V44.52L224.055 42.62H224.895V61.82L228.055 62.6V64H215.375ZM221.755 39.66C220.662 39.66 219.822 39.32 219.235 38.64C218.648 37.96 218.355 37.22 218.355 36.42C218.355 35.5533 218.655 34.7867 219.255 34.12C219.868 33.4533 220.702 33.12 221.755 33.12C222.835 33.12 223.688 33.4533 224.315 34.12C224.955 34.7867 225.275 35.5533 225.275 36.42C225.275 37.22 224.975 37.96 224.375 38.64C223.788 39.32 222.915 39.66 221.755 39.66ZM237.073 64.42C236.06 64.42 234.986 64.34 233.853 64.18C232.72 64.0333 231.746 63.8267 230.933 63.56L230.673 57.12H232.373C232.493 58.84 232.94 60.16 233.713 61.08C234.5 61.9867 235.58 62.44 236.953 62.44C237.98 62.44 238.8 62.18 239.413 61.66C240.026 61.1267 240.333 60.4333 240.333 59.58C240.333 58.9133 240.093 58.32 239.613 57.8C239.146 57.2667 238.346 56.7 237.213 56.1L235.293 55.12C233.72 54.2933 232.56 53.3733 231.813 52.36C231.08 51.3467 230.713 50.14 230.713 48.74C230.713 46.7267 231.446 45.2067 232.913 44.18C234.393 43.14 236.566 42.62 239.433 42.62C240.446 42.62 241.42 42.6867 242.353 42.82C243.3 42.94 244.06 43.1067 244.633 43.32V48.8H243.113C242.726 46 241.406 44.6 239.153 44.6C238.246 44.6 237.513 44.82 236.953 45.26C236.406 45.7 236.133 46.2733 236.133 46.98C236.133 47.6067 236.38 48.1733 236.873 48.68C237.366 49.1733 238.22 49.7133 239.433 50.3L241.333 51.28C242.813 52.04 243.906 52.9333 244.613 53.96C245.32 54.9733 245.673 56.2 245.673 57.64C245.673 59.7733 244.92 61.44 243.413 62.64C241.906 63.8267 239.793 64.42 237.073 64.42ZM247.988 64V62.6L250.948 61.82V35.1L247.968 34V33.08L256.248 31.14H257.108V61.82L259.868 62.6V64H247.988ZM262.048 64V62.6L264.828 61.82V50.98C264.828 49.3533 264.501 48.1533 263.848 47.38C263.194 46.5933 262.214 46.2 260.908 46.2C260.094 46.2 259.334 46.36 258.628 46.68C257.921 47 257.254 47.44 256.628 48V45.5C257.654 44.7 258.868 44.02 260.268 43.46C261.681 42.9 263.128 42.62 264.608 42.62C268.848 42.62 270.968 44.94 270.968 49.58V61.82L273.948 62.6V64H262.048Z'
				fill='#F83758'
			/>
		</G>
		<Defs>
			<LinearGradient
				id='paint0_linear_5017_51'
				x1={124.993}
				y1={24.9993}
				x2={24.9961}
				y2={24.9993}
				gradientUnits='userSpaceOnUse'
			>
				<Stop stopColor='#CFE2FC' />
				<Stop offset={1} stopColor='#4392F9' />
			</LinearGradient>
			<LinearGradient
				id='paint1_linear_5017_51'
				x1={0.00000327825}
				y1={74.9949}
				x2={99.9972}
				y2={74.9949}
				gradientUnits='userSpaceOnUse'
			>
				<Stop stopColor='#F8BCC6' />
				<Stop offset={1} stopColor='#F83758' />
			</LinearGradient>
			<ClipPath id='clip0_5017_51'>
				<Rect width={274.993} height={100} fill='white' />
			</ClipPath>
		</Defs>
	</Svg>
);
export default StylishLogo;
