// ww-config.js
export default {
    componentName: 'MapWithCluster', // The name of your component
    displayName: 'Map with Clustering', // The name displayed in WeWeb's UI
    description: 'A Google Map with clustered markers.', // A brief description of your component
    version: '1.0.0', // Version of your component
    properties: {
      title: {
        hidden: true, // This property will be hidden in the WeWeb UI
        defaultValue: { isWwObject: true, type: 'ww-text' }, // Default value configuration
      },
      initialCenter: {
        type: Object,
        default: { lat: -34.397, lng: 150.644 }, // Default center coordinates for the map
        description: 'Initial center of the map.',
      },
      initialZoom: {
        type: Number,
        default: 8, // Default zoom level for the map
        description: 'Initial zoom level of the map.',
      },
    },
    methods: {
      generateMarkers: {
        description: 'Generates markers for the map.',
        params: {
          count: {
            type: Number,
            default: 100, // Default number of markers
            description: 'Number of markers to generate.',
          },
        },
      },
    },
    events: {
      markerClick: {
        description: 'Triggered when a marker is clicked.',
        params: {
          marker: {
            type: Object,
            description: 'The clicked marker object.',
          },
        },
      },
    },
    styles: {
      width: {
        type: String,
        default: '100%', // Default width of the map
      },
      height: {
        type: String,
        default: '500px', // Default height of the map
      },
    },
  };
  