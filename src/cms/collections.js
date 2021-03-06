export const events = {
	label: 'Events',
	label_singular: 'Event',
	name: 'events',
	folder: 'content/events',
	create: true,
	fields: [

		{ name: "template", default: "event", widget: "hidden" },
		{ name: "title", label: "Title", hint: "Enter a unique title for your event" },
		{ name: "eventInformation",
			label: "Event Information",
			widget: "object",
			hint: "Enter basic event information",
			fields: [
				{ 
					name: "livestreamUrl", 
					label: "LiveStream URL", 
					widget: "string", 
					hint: "Enter a livestream embed URL from YouTube, Vimeo, Facebook, etc." 
				},
				{
					name: "timezone",
					label: "Timezone",
					widget: "timezone",
				},
				{
					name: "startTime",
					label: "Start Time",
					widget: "datetime",
					date_format: "MMMM DD, YYYY",
					format: "LLLL",
				},
				{
					name: "endTime", 
					label: "End Time",
					widget: "datetime",
					date_format: "MMMM DD, YYYY",
					format: "LLLL",
				}
			]
		},
		{ name: "body", label: "Body", widget: "markdown" },
		{
			name: "eventGraphics",
			label: "Event Graphics",
			widget: "object",
			hint: "Upload event graphics used in the app",
			fields: [
				{ name: "headerLogo", label: "Header Logo", widget: "image", allow_multiple: false },
				{ name: "lobbyImage", label: "Lobby Graphic", widget: "image", allow_multiple: false },
			]
		},
		{
			name: "eventBranding",
			label: "Event Branding",
			widget: "object",
			hint: "Customize event branding colors",
			fields: [
				{ name: "htmlBackground", label: "HTML Background", default: "#333333", widget: "color" },          
				{ name: "bodyBackground", label: "Body Background", default: "#ffffff", widget: "color" },
				{ name: "primaryBackground", label: "Primary Background", default: "#ac95f4", widget: "color" },
				{ name: "primaryBackgroundHover", label: "Primary Background Hover", default: "#b89eff", widget: "color" },
				{ name: "primaryTextColor", label: "Primary Text Color", default: "#ffffff", widget: "color" },
				{ name: "defaultTextColor", label: "Default Text Color", default: "#333333", widget: "color" },
			]
		},
		{
			name: "eventSchedule",
			label: "Event Schedule",
			widget: "list",
			hint: "Enter event schedule",
			fields: [
				{
					name: "startTime",
					label: "StartTime",
					widget: "datetime", 
					format: "MMMM DD, LT",
					date_format: "MMMM DD",
				},
				{ name: "title", label: "Title", widget: "string" },
				{ name: "description", label: "Description", widget: "text" },
			]
		},
		{
			name: "eventRooms",
			label: "Event Rooms",
			widget: "list",
			hint: "Enter breakout room information based on Jitsi",
			fields: [
				{ name: "slug", label: "Slug", widget: "string", hint: "Enter a unique room slug in the format of `my-digital-meeting`" },
				{ name: "title", label: "Title", widget: "string" },
				{ name: "description", label: "Description", widget: "text" },
			]
		},
		{
			name: "eventQA",
			label: "Q&A Information",  
			widget: "list",
			hint: "Define commonly asked questions and answers",
			fields: [
				{ name: "question", label: "Question", widget: "text" },
				{ name: "answer", label: "Answer", widget: "text" },
			]
		},
		{
			name: "eventSettings",
			label: "Event Settings",
			widget: "object",
			hint: "Customize event settings and available features",
			fields: [
				{ label: "Enable All Events", name: "allEvents", widget: "boolean", default: "true" },
				{ label: "Enable Main Stage", name: "mainStage", widget: "boolean", default: "true" },
				{ label: "Main Stage Label", name: "mainStageLabel", widget: "string", default: "Main Stage" },
				{ label: "Enable Rooms", name: "rooms", widget: "boolean", default: "true" },
				{ label: "Rooms Label", name: "roomsLabel", widget: "string", default: "Rooms" },
				{ label: "Enable Q&A", name: "qa", widget: "boolean", default: "true" },
				{ label: "Q&A Label", name: "qaLabel", widget: "string", default: "Q&A" },
				// { label: "Enable Chat", name: "chat", widget: "boolean", default: "true" },
				// { label: "Enable Polls", name: "polls", widget: "boolean", default: "true" },
			]
		},
	],
};

export const pages = {
	name: "pages",
	label: "Pages",
	files: [
		{
			label: "Main Page",
			name: "mainPage",
			file: "content/pages/main-page.md",
			fields: [
				{ name: "template", widget: "hidden", default: "main-page" },
				{ name: "title", label: "Title", widget: "string", default: "Home" },
				{
					name: "pageGraphics",
					label: "Page Graphics",
					widget: "object",
					hint: "Upload graphics for use on the main page",
					fields: [
						{ name: "headerLogo", label: "Header Logo", widget: "image", allow_multiple: false },
						{ name: "featuredImage", label: "Featured Image", widget: "image", allow_multiple: false },
					]
				},
				{
					name: "pageBranding",
					label: "Page Branding",
					widget: "object",
					hint: "Customize page branding colors",
					fields: [
						{ name: "htmlBackground", label: "HTML Background", default: "#333333", widget: "color" },          
						{ name: "bodyBackground", label: "Body Background", default: "#ffffff", widget: "color" },
						{ name: "primaryBackground", label: "Primary Background", default: "#ac95f4", widget: "color" },
						{ name: "primaryBackgroundHover", label: "Primary Background Hover", default: "#b89eff", widget: "color" },
						{ name: "primaryTextColor", label: "Primary Text Color", default: "#ffffff", widget: "color" },
						{ name: "defaultTextColor", label: "Default Text Color", default: "#333333", widget: "color" },
					]
				}
			]
		}
	]
};