var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var MapSchema = new Schema( {
	'geometry': {
	'type': {
    type: String,
    required: true,
    enum: ['Point', 'LineString', 'Polygon'],
    default: 'Point'
  },
  'coordinates': [
  	 Number
  	
  ]
	},
	'type':{
		type: String
	},
	'properties':{
		'title':{
			type: String
		},
		'description':{
			type:String
		},
		'marker-color':{
			type:String
		},
		'status':{
  			type:String
		},
		'eventId':{
			type:String
		}
		
   
  }

   /* name: String,
	email: String,
	username: {
		type: String,
		trim: true,
		unique: true
	},
	password: String,
	provider: String,
	providerId: String,
	providerData: {},
	todos: {}*/
});

MapSchema.pre('save', 
	function(next) {
		
		next();
	}
);

mongoose.model('Map', MapSchema);