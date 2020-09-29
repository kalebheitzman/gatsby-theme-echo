// import libs
import CMS from 'netlify-cms-app'

// import components
import { Control as ColorControl } from './Control'
import { Timezone } from './Timezone'
import EventPagePreview from './preview-templates/EventPagePreview'

// register color widget
CMS.registerWidget("color", ColorControl);
CMS.registerWidget("timezone", Timezone);

// register event preview template
CMS.registerPreviewTemplate("events", EventPagePreview)