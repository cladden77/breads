// Require mongoose
const mongoose = require('mongoose')

//Creating shorthand for the Schema constructor
const { Schema } = mongoose

const breadSchema = new Schema({
  // we will write our schema here
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'http://place-hold.it/500x500.png' }
})

//Model and export
// const Bread: The variable we are saving our model to. Conventionally, it should be capitalized and use the singular version of the collection the model is for.
// mongoose.model: A Mongoose method that creates a model for us based on the arguments we pass it. This is what will later allow us to interact with our Mongo database.
// Bread: The first argument we passed is the name of the collection we want to connect this model to. As with the variable, this should be capitalized and use the singular version of the collection name. In our case, we want to connect it to a collection named breads, so that becomes Bread when singular and capitalized.
// breadSchema: The second argument we passed is the schema we want our model to use.

const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread
  