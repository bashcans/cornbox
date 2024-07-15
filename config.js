// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'bathcorn',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: false,
	timeZone: 'America/Denver',

	// Greetings
	greetingMorning: 'We ride at dawn,',
	greetingAfternoon: 'Big up, big man',
	greetingEvening: 'Its quittin time,',
	greetingNight: 'Nah, cuz why u up,',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'd8ef935d7667521a2242c07de933eca4', // Write here your API Key
	weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '39.803261',
	defaultLongitude: '-105.090408',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: true,
	hourDarkThemeActive: '20:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'Todoist',
			icon: 'trello',
			link: 'https://todoist.com',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Odysee',
			icon: 'youtube',
			link: 'https://odysee.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'star',
			id: '1',
			links: [
				{
					name: 'z0mbi3 dots',
					link: 'https://github.com/gh0stzk/dotfiles',
				},
				{
					name: 'My CU Info',
					link: 'https://www.colorado.edu/resources/mycuinfo-cu-boulder-employee-portal',
				},
				{
					name: 'Korean',
					link: 'https://koreanjun.com',
				},
				{
					name: 'MonkeyType',
					link: 'https://monkeytype.com/',
				},
			],
		},
		{
			icon: 'tv',
			id: '2',
			links: [
				{
					name: 'FMHY',
					link: 'https://fmhy.pages.dev',
				},
				{
					name: 'Youtube',
					link: 'https://www.youtube.com',
				},
				{
					name: 'Movies & TV',
					link: 'https://rivestream.live',
				},
				{
					name: 'Twitch',
					link: 'https://www.twitch.tv',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'square-user-round',
			id: '1',
			links: [
				{
					name: 'Flocus',
					link: 'app.flocus.com',
				},
				{
					name: 'Gmail',
					link: 'https://www.gmail.com',
				},
				{
					name: 'Protonmail',
					link: 'https://account.proton.me/mail',
				},
				{
					name: 'Mind Maps',
					link: 'https://www.coolmindmaps.com/',
				},
			],
		},
		{
			icon: 'binary',
			id: '2',
			links: [
				{
					name: 'Github',
					link: 'https://github.com/',
				},
				{
					name: 'Arch Wiki',
					link: 'https://wiki.archlinux.org/',
				},
				{
					name: 'Dotshare.it',
					link: 'http://dotshare.it/',
				},
				{
					name: 'AlternativeTo',
					link: 'https://alternativeto.net/',
				},
			],
		},
	],
};
