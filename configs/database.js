const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/steamdata', { useUnifiedTopology: true, useNewUrlParser: true }).then(() => console.log('DB Connected!')).catch(err => { console.log(`DB Connection Error: ${err.message}`) })
/*mongoose.plugin((schema) => {
    schema.options.toJSON = {
      virtuals: true,
      versionKey: false,
      transform(doc, ret) {
        ret.id = ret._id
        delete ret._id
      }
    }
  })*/
module.exports = mongoose