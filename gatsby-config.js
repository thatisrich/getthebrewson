module.exports = {
	siteMetadata: {
		title: `Get the brews on`,
		siteUrl: `https://getthebrewson.co.uk/`,
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-offline",
		{
			resolve: "gatsby-plugin-offline",
			options: {
				precachePages: ["/"],
			},
		},
		{
			resolve: "gatsby-plugin-google-tagmanager",
			options: {
				id: "GTM-N2M8QZ",

				// Include GTM in development.
				//
				// Defaults to false meaning GTM will only be loaded in production.
				includeInDevelopment: false,

				// datalayer to be set before GTM is loaded
				// should be an object or a function that is executed in the browser
				//
				// Defaults to null
				defaultDataLayer: { platform: "gatsby" },

				// Specify optional GTM environment details.
				//   gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
				//   gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
				//   dataLayerName: "YOUR_DATA_LAYER_NAME",

				// Name of the event that is triggered
				// on every Gatsby route change.
				//
				// Defaults to gatsby-route-change
				//   routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
				// Defaults to false
				enableWebVitalsTracking: true,
				// Defaults to https://www.googletagmanager.com
				//   selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: ["Oxygen:400,700", `Caveat\:400,550,700`],
				display: "swap",
			},
		},
	],
};
