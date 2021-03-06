'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EventSchema = new Schema({
  eventName: {type:String, index:true, list:true, form:{tab:"Event"}},
  videoFile: {type:String, index:false, list:false, form:{tab:"Event"}},
  text: {type: String, form: {type: 'textarea', editor: 'ckEditor', rows:"1", tab:"Event"}},
  effects:{
    environment:{
      message: {type: String, form: {type: 'textarea', rows:4, tab:"Environment"}},
      score: {type: Number, form:{tab:"Environment"}}
    },
    economy:{
      message: {type: String, form: {type: 'textarea', rows:4, tab:"Economy"}},
      score: {type: Number, form:{tab:"Economy"}}
    },
    energy:{
      message: {type: String, form: {type: 'textarea', rows:4, tab:"Energy"}},
      score: {type: Number, form:{tab:"Energy"}}
    }
  }
});



var Event;
var modelName = 'Event';


Event = mongoose.model(modelName, EventSchema);



module.exports = Event;
