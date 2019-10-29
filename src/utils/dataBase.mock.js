const sinon = require('sinon')

const { productsMock } = require('./mocks')

const getAllStub = sinon.stub()
getAllStub.withArgs('products').resolves(productsMock)

class DataBaseLibMock{
    getAll(collection,query){
        return getAllStub(collection,query)
    }
}

module.exports = {
    getAllStub,
    DataBaseLibMock
}