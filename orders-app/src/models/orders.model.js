// Orders-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'orders';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const itemSchema = new Schema({
    item: { type: String, required: true },
    unit: { type: Number, required: true, default: 1 },
    unitPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true }
  });
  const schema = new Schema({
    // orderId: { type: Schema.Types.ObjectId, required: true },
    orderItems: { type: [itemSchema], required: true, default: [] },
    orderTotalAmount: { type: Number, required: true, default: 0 },
    orderStatus: { type: String, required: true, default: "new" }
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);

};
