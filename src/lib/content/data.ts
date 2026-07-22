// ─────────────────────────────────────────────
// All user-facing content lives here.
// Edit this file to update copy, skills, and links
// without touching presentation components.
// ─────────────────────────────────────────────

export const meta = {
	name: 'Chloe',
	tagline: 'Gothic softness, digital traces, and late-night thoughts.',
	description:
		"Hi, I'm Chloe — engineer by day, goth girl and VR gremlin by night. I like taking things apart, whether that's hardware, lyrics, or the way someone worded a message.",
	pronouns: 'she/her',
	location: 'Mexico',
	languages: ['Spanish', 'English']
};

export const heroTags = [
	'she/her',
	'VR Girl',
	'Goth',
	'México'
];

export const about = {
	paragraph1:
		"I'm Chloe. Trans, queer, a little goth, and probably overanalyzing something as you read this.",
	paragraph2:
		"I love dark spaces, soft music, long conversations, and VRChat at 2am. I notice details. It's a whole thing."
};

export const engineerSide = {
	title: 'The Engineer',
	items: ['Systems', 'Power', 'Simulation', 'Automation', 'Hardware', 'Code', 'Precision']
};

export const girlSide = {
	title: 'The Girl Behind the Signal',
	items: ['Voice', 'Femininity', 'VR', 'Music', 'Subtext', 'Connection', 'Self-expression']
};

export const skills: { category: string; tags: string[] }[] = [
	{
		category: 'Power Integrity',
		tags: ['PI Simulation', 'PDN Analysis', 'Decap Optimization', 'Impedance Profiling']
	},
	{
		category: 'Hardware Analysis',
		tags: ['Motherboard Design', 'Signal Integrity', 'DDR / HBM', 'High-Performance Systems']
	},
	{
		category: 'Engineering Automation',
		tags: ['Python', 'Bash', 'Git', 'FastAPI', 'Workflow Tooling']
	},
	{
		category: 'Full-Stack Tools',
		tags: ['SvelteKit', 'JavaScript / TypeScript', 'C#', 'REST APIs']
	},
	{
		category: 'VR Technology',
		tags: ['Unity', 'Blender', 'Full-Body Tracking', 'Face Tracking', 'Avatar Systems']
	},
	{
		category: 'Personal Builds',
		tags: ['Custom PCs', 'Electronics Experiments', 'Scripting', 'Tinkering']
	}
];

export const voice = {
	heading: 'voice & identity',
	body: "voice training turned out to be one of those things that's equal parts technical and deeply personal. frequencies, resonance, muscle memory — but also the first time you hear yourself back and actually feel like that's you. it's a whole thing.",
	descriptors: ['Feminine', 'Mature', 'Calm', 'Sensual', 'Melancholic', 'Gothic', 'Intimate', 'Resonant']
};

export const vrcSection = {
	heading: 'VRChat',
	body: "My favorite place. Custom avatars, full-body tracking, 2am conversations with people who get it. If you're ever there, come say hi.",
	features: [
		{ label: 'AVATAR SYSTEMS', detail: 'Custom avatars, expressions, dynamics' },
		{ label: 'FULL-BODY TRACKING', detail: 'Legs, waist, elbows, knees' },
		{ label: 'FACE TRACKING', detail: 'Eye, lip, brow expression capture' },
		{ label: 'VOICE', detail: 'Real-time vocal identity and presence' },
		{ label: 'WORLDS', detail: 'Gothic, cozy, atmospheric spaces' },
		{ label: 'CONNECTIONS', detail: 'Meaningful late-night conversations' }
	]
};

export const music = {
	heading: 'What I Listen To',
	pullQuote: 'Girl in Red raised me emotionally.',
	subtext: 'I dissect lyrics the same way I dissect circuits. I speak in subtext. If you notice, you notice.',
	// To swap in your own photo: drop {slug}.jpg into static/music/ and set wiki: null
	artists: [
		{ name: 'Girl in Red', slug: 'girl-in-red',  wiki: 'Girl_in_red',  color1: '#c0647a', color2: '#7a2040' },
		{ name: 'Sir Chloe',   slug: 'sir-chloe',    wiki: 'Sir_Chloe',    color1: '#6478c0', color2: '#2a3a7a' },
		{ name: 'Kikuo',       slug: 'kikuo',         wiki: 'Kikuo_(musician)',        color1: '#9064c0', color2: '#3a1a7a' },
		{ name: 'Astrid',      slug: 'astrid',        wiki: null,           color1: '#c09664', color2: '#7a4a20' },
		{ name: 'The Marías',  slug: 'the-marias',    wiki: 'The_Marías',   color1: '#c064a0', color2: '#7a1a5a' },
		{ name: 'Bratty',      slug: 'bratty',        wiki: 'Bratty_(musician)', color1: '#c06464', color2: '#7a2020' },
		{ name: 'Cavetown',    slug: 'cavetown',      wiki: 'Cavetown',     color1: '#64a0c0', color2: '#1a4a7a' },
		{ name: 'Vocaloid',    slug: 'vocaloid',      wiki: 'Hatsune_Miku',     color1: '#64c0b4', color2: '#1a7a6a' }
	],
	genres: ['Alternative', 'Indie', 'Melancholic', 'Queer', 'Emotionally Devastating']
};

export const details: { label: string; value: string }[] = [
	{ label: 'LOCATION', value: 'Mexico' },
	{ label: 'LANGUAGES', value: 'Spanish & English' },
	{ label: 'DOMAIN', value: 'Somewhere between hardware and software' },
	{ label: 'AESTHETIC', value: 'Gothic avatars and black lipstick' },
	{ label: 'HOBBY', value: 'Building and customizing computers' },
	{ label: 'SUPERPOWER', value: 'Notices voices immediately' },
	{ label: 'WEAKNESS', value: 'Emotionally complex stories' },
	{ label: 'HABIT', value: 'Analyzing messages more than the sender intended' },
	{ label: 'PRONOUNS', value: 'she/her (they/them also fine)' },
	{ label: 'ONLINE', value: 'Usually in VRChat after midnight' }
];

export const contact = {
	closing: "You can say hi. Fair warning though — I will absolutely overanalyze how you said it.",
	links: [
		{ label: 'VRChat',   href: 'https://vrchat.com/home/user/usr_c44a29b9-5e76-4a34-bd4d-8a63b52d8e16', icon: 'vr' },
		{ label: 'Spotify',  href: 'https://open.spotify.com/playlist/1xzHqw4uGUmRJOX5isFcZ8', icon: 'spotify' },
		{ label: 'Discord',  href: 'https://discordapp.com/users/722632688468492311', icon: 'discord' }
	]
};
