type Props = { className: string };

export function Play(props: Props) {
	return (
		<svg viewBox="0 0 40 40" fill="none" {...props}>
			<path
				d="M32.997 18.268c1.334.77 1.334 2.695 0 3.464L13 33.27c-1.333.769-2.999-.194-2.999-1.733V8.463c0-1.54 1.666-2.502 3-1.733l19.997 11.538z"
				fill="currentColor"
			/>
		</svg>
	);
}

export function Pause(props: Props) {
	return (
		<svg
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<rect
				x={21.8426}
				y={6}
				width={8.2963}
				height={28}
				rx={2.07407}
				fill="currentColor"
			/>
			<rect
				x={9.65741}
				y={6}
				width={8.2963}
				height={28}
				rx={2.07407}
				fill="currentColor"
			/>
		</svg>
	);
}

export function Skip(props: Props) {
	return (
		<svg viewBox="0 0 48 28" fill="none" {...props}>
			<g>
				<path
					d="M22.997 12.268c1.334.77 1.334 2.695 0 3.464L3 27.27C1.666 28.039 0 27.076 0 25.537V2.463C0 .923 1.666-.04 3 .73l19.997 11.538z"
					fill="currentColor"
				/>
				<path
					d="M46.997 12.268c1.334.77 1.334 2.695 0 3.464L27 27.27c-1.333.769-2.999-.194-2.999-1.733V2.463C24 .923 25.666-.04 27 .73l19.997 11.538z"
					fill="currentColor"
				/>
			</g>
		</svg>
	);
}

export function VolumeHigh(props: Props) {
	return (
		<svg viewBox="0 0 58 58" fill="none" {...props}>
			<path
				d="M24.4 16.482a1.754 1.754 0 00-.78-.18c-.409 0-.805.135-1.134.396L15.1 22.656H9.12c-.998 0-1.813.816-1.813 1.813v9.062c0 .997.815 1.813 1.812 1.813H15.1l7.386 5.947c.329.26.737.397 1.133.397.26 0 .533-.057.782-.182a1.812 1.812 0 001.03-1.631v-21.75c0-.702-.396-1.337-1.03-1.643zM50.694 29c0-6.718-2.628-13.005-7.408-17.729a1.36 1.36 0 00-1.926.012 1.36 1.36 0 00.011 1.926c4.26 4.202 6.593 9.81 6.593 15.791s-2.345 11.589-6.593 15.791a1.36 1.36 0 00-.011 1.926c.26.272.612.408.963.408.34 0 .69-.136.951-.397 4.792-4.712 7.42-11.01 7.42-17.728z"
				fill="currentColor"
			/>
			<path
				d="M43.602 29c0-4.928-1.88-9.55-5.302-13.016a1.36 1.36 0 00-1.925-.011 1.36 1.36 0 00-.012 1.925c2.912 2.957 4.52 6.9 4.52 11.113 0 4.214-1.608 8.157-4.52 11.113a1.36 1.36 0 00.012 1.926c.26.26.611.397.951.397.351 0 .703-.136.963-.408 3.421-3.49 5.313-8.111 5.313-13.039z"
				fill="currentColor"
			/>
			<path
				d="M32.568 20.674a1.36 1.36 0 00-1.925-.011 1.36 1.36 0 00-.012 1.925c1.677 1.7 2.606 3.976 2.606 6.412a9.105 9.105 0 01-2.606 6.412 1.36 1.36 0 00.012 1.925c.26.261.611.397.951.397.351 0 .703-.136.963-.408 2.186-2.22 3.387-5.166 3.387-8.315.011-3.16-1.19-6.117-3.376-8.337z"
				fill="currentColor"
			/>
		</svg>
	);
}

export function VolumeMute(props: Props) {
	return (
		<svg viewBox="0 0 33 58" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M24.4 16.482a1.754 1.754 0 00-.78-.18c-.409 0-.805.135-1.134.396L15.1 22.656H9.12c-.998 0-1.813.816-1.813 1.813v9.062c0 .997.815 1.813 1.812 1.813H15.1l7.386 5.947c.329.26.737.397 1.133.397.26 0 .533-.057.782-.182a1.812 1.812 0 001.03-1.631v-21.75c0-.702-.396-1.337-1.03-1.643z"
				fill="currentColor"
			/>
		</svg>
	);
}

export function Dots(props: Props) {
	return (
		<svg
			viewBox="0 0 48 48"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<circle cx={5} cy={24} r={5} />
			<circle cx={24} cy={24} r={5} />
			<circle cx={43} cy={24} r={5} />
		</svg>
	);
}

export function Lyrics(props: Props) {
	return (
		<svg
			viewBox="0 0 48 48"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 30.31V8.841A8.842 8.842 0 018.842 0h30.316A8.842 8.842 0 0148 8.842v21.466a8.842 8.842 0 01-8.842 8.842h-13.38l-8.122 7.123c-2.449 2.149-6.288.41-6.288-2.848v-4.273H8.842A8.842 8.842 0 010 30.309zM8.842 5.052h30.316a3.79 3.79 0 013.79 3.79v21.474a3.79 3.79 0 01-3.79 3.79H25.629c-1.2 0-2.374.429-3.296 1.225l-5.494 4.73a.253.253 0 01-.418-.192v-4.502c0-.694-.556-1.263-1.263-1.263H8.842a3.79 3.79 0 01-3.79-3.79V8.843a3.79 3.79 0 013.79-3.79zm6.316 19.803a.93.93 0 00.935.922c3.903 0 6.644-2.994 6.644-6.897 0-1.592-.505-2.69-.809-3.209-.795-1.351-2.147-2.526-3.802-2.526-2.387 0-4.13 1.933-4.13 4.308a4.315 4.315 0 004.307 4.32c.77 0 1.478-.215 2.11-.569-.897 1.617-2.35 2.729-4.32 2.729a.922.922 0 00-.935.922zm11.368 0a.93.93 0 00.935.922c3.903 0 6.644-2.994 6.644-6.897 0-1.592-.505-2.69-.808-3.209-.796-1.351-2.147-2.526-3.802-2.526-2.388 0-4.13 1.933-4.13 4.308a4.315 4.315 0 004.307 4.32c.77 0 1.477-.215 2.109-.569-.897 1.617-2.35 2.729-4.32 2.729a.922.922 0 00-.935.922z"
			/>
		</svg>
	);
}

export function AirPlay(props: Props) {
	return (
		<svg
			viewBox="0 0 59 59"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M10.498 51.099l1.3-1.5c.3-.3.3-.8 0-1.1-10.5-9.7-11.2-26.2-1.4-36.7 9.8-10.5 26.2-11.2 36.7-1.4 10.5 9.8 11.2 26.2 1.4 36.7-.5.5-.9 1-1.4 1.4-.3.3-.3.8 0 1.1l1.3 1.5c.3.3.8.3 1.1.1 12-11.1 12.7-29.7 1.7-41.7-11.1-12-29.7-12.7-41.7-1.7-12 11-12.7 29.7-1.7 41.7.5.6 1.1 1.1 1.7 1.7.3.2.7.2 1-.1z" />
			<path d="M11.798 29.498c0-9.7 7.9-17.6 17.6-17.6 9.7 0 17.6 8 17.6 17.7 0 4.8-2 9.5-5.5 12.8-.3.3-.3.8 0 1.1l1.3 1.5c.3.3.8.4 1.1.1 8.5-8 8.9-21.3 1-29.8s-21.3-8.9-29.8-1-9 21.2-1.1 29.7c.3.3.6.7 1 1 .3.3.8.3 1.1 0l1.3-1.5c.3-.3.3-.8 0-1.1-3.5-3.3-5.6-8-5.6-12.9z" />
			<path d="M20.198 29.498c0-5.1 4.1-9.2 9.2-9.2s9.2 4.1 9.2 9.2c0 2.5-1 4.8-2.8 6.6-.3.3-.3.8 0 1.1l1.3 1.5c.3.3.8.3 1.1 0 5-4.9 5.2-12.9.3-18s-12.9-5.2-18-.3-5.2 12.9-.3 18l.3.3c.3.3.8.3 1.1 0l1.3-1.5c.3-.3.3-.8 0-1.1-1.7-1.7-2.7-4.1-2.7-6.6z" />
			<path d="M47.898 56.098l-17.4-19.8c-.5-.6-1.3-.6-1.9-.1l-.1.1-17.6 19.8c-.4.5-.4 1.2.1 1.7.2.2.5.3.7.3h35.3c.6 0 1.2-.5 1.2-1.2 0-.3-.1-.6-.3-.8z" />
		</svg>
	);
}

export function List(props: Props) {
	return (
		<svg viewBox="0 0 66 66" fill="currentColor" {...props}>
			<circle cx={6.5} cy={15.5} r={4.5} />
			<rect x={17} y={12} width={47} height={7} rx={3.5} />
			<circle cx={6.5} cy={33.5} r={4.5} />
			<rect x={17} y={30} width={47} height={7} rx={3.5} />
			<circle cx={6.5} cy={51.5} r={4.5} />
			<rect x={17} y={48} width={47} height={7} rx={3.5} />
		</svg>
	);
}

export function Location(props: Props) {
	return (
		<svg viewBox="0 0 40 40" fill="currentColor" {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M33.126 1.46c2.914-1.397 7.003.564 5.73 3.535L24.323 37.57c-1.499 3.499-6.717 2.428-6.717-1.379V22.563H3.505c-3.725 0-4.872-5.045-1.513-6.656L33.126 1.46zm-.439 5.234L9.103 17.564h10.003C22 17.563 22 17.5 22 17.5V31L32.687 6.694z"
			/>
		</svg>
	);
}

export function Pagination(props: Props) {
	return (
		<svg
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
			/>
		</svg>
	);
}

export function Signal(props: Props) {
	return (
		<svg viewBox="0 0 58 58" fill="currentColor" {...props}>
			<rect y={34} width={10} height={14} rx={2} />
			<rect x={16} y={27} width={10} height={21} rx={2} />
			<rect x={32} y={19} width={10} height={29} rx={2} />
			<rect x={48} y={11} width={10} height={37} rx={2} opacity="0.2" />
		</svg>
	);
}

export function Wifi(props: Props) {
	return (
		<svg viewBox="0 0 28 28" fill="currentColor" {...props}>
			<path d="M5.106 12.556c.184.202.474.193.667-.018 2.171-2.294 5.028-3.507 8.218-3.507 3.217 0 6.082 1.213 8.244 3.525a.444.444 0 00.65-.018l1.231-1.24c.176-.175.176-.403.035-.57-2.118-2.61-6.064-4.483-10.16-4.483-4.087 0-8.042 1.863-10.151 4.482-.14.168-.14.396.026.572l1.24 1.257zm3.673 3.656c.211.202.493.184.695-.035 1.072-1.17 2.786-1.995 4.526-1.987 1.75-.008 3.463.835 4.562 2.013.184.211.448.202.65 0l1.38-1.353c.167-.159.184-.378.035-.554-1.371-1.661-3.876-2.856-6.627-2.856-2.76 0-5.265 1.195-6.636 2.856-.15.176-.132.387.035.554l1.38 1.362zM14 21.082c.211 0 .396-.098.756-.44l2.153-2.075a.422.422 0 00.053-.57c-.615-.783-1.732-1.416-2.962-1.416-1.266 0-2.4.66-3.006 1.485-.105.159-.053.352.097.501l2.153 2.075c.352.334.545.44.756.44z" />
		</svg>
	);
}

export function Battery(props: Props) {
	return (
		<svg viewBox="0 0 28 28" fill="currentColor" {...props}>
			<path
				d="M5.76 20.174h14.193c1.647 0 2.942-.18 3.874-1.113.923-.932 1.095-2.209 1.095-3.856V12.48c0-1.656-.172-2.933-1.095-3.856-.941-.932-2.227-1.113-3.874-1.113H5.733c-1.62 0-2.915.18-3.839 1.113C.962 9.556.79 10.833.79 12.454v2.75c0 1.648.172 2.934 1.095 3.857.942.932 2.227 1.113 3.875 1.113zM5.506 18.4c-.932 0-1.81-.136-2.317-.633-.507-.507-.625-1.367-.625-2.309v-3.213c0-.95.118-1.82.616-2.326.507-.507 1.394-.634 2.344-.634h14.682c.942 0 1.82.127 2.318.634.506.506.624 1.366.624 2.308v3.231c0 .942-.117 1.802-.624 2.309-.498.506-1.376.633-2.318.633h-14.7zm20.738-2.109c.751-.045 1.756-1.005 1.756-2.453 0-1.44-1.005-2.408-1.756-2.453v4.906z"
				opacity="0.35"
			/>
			<path d="M18.28 18H5.34c-.67 0-1.07-.097-1.351-.378-.27-.281-.68-.67-.68-1.34v-4.703c0-.681.41-1.092.68-1.373.281-.27.681-.368 1.373-.368H18.28c.67 0 1.07.098 1.351.379.27.27.378.67.378 1.34v4.724c0 .66-.108 1.06-.378 1.34-.281.282-.681.379-1.351.379z" />
		</svg>
	);
}

export function Twitter(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			{...props}
			viewBox="0 0 16 16"
		>
			<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
		</svg>
	);
}
export function Youtube(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			{...props}
			viewBox="0 0 16 16"
		>
			<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
		</svg>
	);
}
export function Steam(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 16 16"
			{...props}
		>
			<path d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.198 2.198 0 0 1 5.62 8.88l1.96-2.844-.001-.04a3.046 3.046 0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11 2.217 2.217 0 0 1-1.312-1.568L.33 10.333Z" />
			<path d="M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165 1.705 1.705 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029 2.03 2.03 0 0 0 2.027-2.029 2.03 2.03 0 0 0-2.027-2.027 2.03 2.03 0 0 0-2.027 2.027Zm2.03-1.527a1.524 1.524 0 1 1-.002 3.048 1.524 1.524 0 0 1 .002-3.048Z" />
		</svg>
	);
}
export function Discord(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 16 16"
			{...props}
		>
			<path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
		</svg>
	);
}
export function instagram(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			{...props}
			viewBox="0 0 16 16"
		>
			<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
		</svg>
	);
}
export function Tiktok(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			{...props}
			viewBox="0 0 20 20"
		>
			<path d="m9 1 1.98-.196c.144.715.54 1.813 1.235 2.708C12.895 4.389 13.797 5 15 5v2c-1.753 0-3.07-.814-4-1.829V12a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V1Z" />
		</svg>
	);
}
export function Search(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/>
		</svg>
	);
}

export function Day(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
				clipRule="evenodd"
			/>
		</svg>
	);
}
export function Night(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			{...props}
		>
			<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
		</svg>
	);
}
export function Map(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 16 16"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
			/>
		</svg>
	);
}
export function Chevron(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
				clipRule="evenodd"
			/>
		</svg>
	);
}
export function Calender(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
			/>
		</svg>
	);
}
export function Store(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 16 16"
			{...props}
		>
			<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
		</svg>
	);
}
export function Gear(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 16 16"
			{...props}
		>
			<path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
			<path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
		</svg>
	);
}
export function Ban(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 16 16"
			{...props}
		>
			<path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
			<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
		</svg>
	);
}
export function Server(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 16 16"
			{...props}
		>
			<path d="M14 10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12zM2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2z" />
			<path d="M5 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM14 3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
			<path d="M5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
		</svg>
	);
}

export function Copied(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
}
export function Copy(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
			/>
		</svg>
	);
}

export function Exclamation(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	);
}
export function People(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 16 16"
			{...props}
		>
			<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
			<path
				fillRule="evenodd"
				d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
			/>
			<path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
		</svg>
	);
}
export function Spinner(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 2400 2400"
			width={24}
			height={24}
			{...props}
		>
			<g
				strokeWidth={200}
				strokeLinecap="round"
				stroke="currentColor"
				fill="none"
			>
				<path d="M1200 600L1200 100" />
				<path opacity={0.5} d="M1200 2300L1200 1800" />
				<path opacity={0.917} d="M900 680.4L650 247.4" />
				<path opacity={0.417} d="M1750 2152.6L1500 1719.6" />
				<path opacity={0.833} d="M680.4 900L247.4 650" />
				<path opacity={0.333} d="M2152.6 1750L1719.6 1500" />
				<path opacity={0.75} d="M600 1200L100 1200" />
				<path opacity={0.25} d="M2300 1200L1800 1200" />
				<path opacity={0.667} d="M680.4 1500L247.4 1750" />
				<path opacity={0.167} d="M2152.6 650L1719.6 900" />
				<path opacity={0.583} d="M900 1719.6L650 2152.6" />
				<path opacity={0.083} d="M1750 247.4L1500 680.4" />
				<animateTransform
					attributeName="transform"
					attributeType="XML"
					type="rotate"
					keyTimes="0;0.08333;0.16667;0.25;0.33333;0.41667;0.5;0.58333;0.66667;0.75;0.83333;0.91667"
					values="0 1199 1199;30 1199 1199;60 1199 1199;90 1199 1199;120 1199 1199;150 1199 1199;180 1199 1199;210 1199 1199;240 1199 1199;270 1199 1199;300 1199 1199;330 1199 1199"
					dur="0.83333s"
					begin="0s"
					repeatCount="indefinite"
					calcMode="discrete"
				/>
			</g>
		</svg>
	);
}
