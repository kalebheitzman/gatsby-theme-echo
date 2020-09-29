// import libs
import CMS from 'netlify-cms-app'

// import components
import { Control as ColorControl } from './Control'
import { Timezone } from './Timezone'
import EventPagePreview from './preview-templates/EventPagePreview'

// import collections 
import { events, pages } from './collections'

// initialize the cms
CMS.init({
	config: {

		// backend configuration
		backend: {
			name: "github",
			repo: process.env.GATSBY_NETLIFY_BACKEND,
			branch: "develop"
		},

		// configuration file
		load_config_file: false,

		// media locations
		media_folder: "static/assets",
		public_folder: "/assets",

		// collections
		collections: [
			// events
			events,
			// Pages
			pages,
		]
  },
})

// register color widget
CMS.registerWidget("color", ColorControl);
CMS.registerWidget("timezone", Timezone);

// register event preview template
CMS.registerPreviewTemplate("events", EventPagePreview)