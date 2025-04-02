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
	name: 'bash',
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
			name: 'Chrome Store',
			icon: 'chrome',
			link: 'https://chromewebstore.google.com/',
		},
		{
			id: '4',
			name: 'Games',
			icon: 'gamepad-2',
			link: 'https://fitgirl-repacks.site/',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Music',
			icon: 'arrow-down-to-line',
			link: 'https://dabplayer.vercel.app/',
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
					name: 'Current Dots',
					link: 'https://end-4.github.io/dots-hyprland-wiki/en/',
				},
				{
					name: 'Chrome Store',
					link: 'http://chromewebstore.google.com/',
				},
				{
					name: 'Korean',
					link: 'https://koreanjun.com',
				},
				{
					name: 'FMHY',
					link: 'https://fmhy.pages.dev',
				},
			],
		},
		{
			icon: 'tv',
			id: '2',
			links: [
				{
					name: 'Youtube',
					link: 'https://www.youtube.com',
				},
				{
					name: 'Music',
					link: 'https://dabplayer.vercel.app/',
				},
				{
					name: 'BigBossBoze',
					link: 'https://www.twitch.tv/bigbossboze',
				},
				{
					name: 'ForeignFridays',
					link: 'https://www.twitch.tv/foreignfridays',
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
					name: 'Pomodoro',
					link: 'https://www.wonderspace.app/',
				},
				{
					name: 'Learning Directory',
					link: 'https://freelearninglist.org/',
				},
				{
					name: 'Proton Mail',
					link: 'https://account.proton.me/mail',
				},
				{
					name: 'ADHD Resources',
					link: 'https://www.additudemag.com/',
				},
			],
		},
		{
			icon: 'cpu',
			id: '2',
			links: [
				{
					name: 'Wiki',
					link: 'https://wiki.archlinux.org/',
				},
				{
					name: 'Packages',
					link: 'https://archlinux.org/packages/',
				},
				{
					name: 'AUR Packages',
					link: 'https://aur.archlinux.org/',
				},
				{
					name: 'AlternativeTo',
					link: 'https://alternativeto.net/',
				},
			],
		},
	],
};
