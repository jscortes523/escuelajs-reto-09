const MongoConnect = require('../lib/mongo')
class ProductService {
  
  constructor(){
    this.mongoDb = new MongoConnect()
    //this.mongoDb.connect()
    this.collection = 'products'

  }

  async getProducts() {
    const products = await this.mongoDb.getAll(this.collection);
    return products || [];
  }

  async getProduct({productId}){
    const product = await this.mongoDb.get(this.collection,productId)
    return product || {}
  }

  async createProduct({product}){
    const productId = await this.mongoDb.create(this.collection,product)
    return productId
  }

  async updateProduct({productId,product}){
    const updatedProductId = await this.mongoDb.update(this.collection,productId,product)
    return updatedProductId
  }

  async deleteProduct({productId}){
    const deletedProductId = await this.mongoDb.delete(this.collection,productId)
    return deletedProductId
  }
}

module.exports = ProductService;
