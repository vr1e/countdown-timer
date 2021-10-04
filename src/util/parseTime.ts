interface IFormattedTime {
	hours: string;
	minutes: string;
	seconds: string;
	deciseconds: string;
}

export default function parseTime(time: number): IFormattedTime {
	const formattedTime = {
		hours: `0${Math.floor((time / (60 * 60 * 10)) % 60)}`.slice(-2),
		minutes: `0${Math.floor((time / (60 * 10)) % 60)}`.slice(-2),
		seconds: `0${Math.floor((time / 10) % 60)}`.slice(-2),
		deciseconds: `${time % 10}`,
	};
	return formattedTime;
}
