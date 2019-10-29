const assert = require('assert')
const proxyquire = require('proxyquire')

const { getAllStub, DataBaseLibMock } = require('../utils/dataBase.mock')
const { productsMock } = require('../utils/mocks')

describe('Services - Products', function(){
    const ProductService = proxyquire('../services',{
        '../lib/mongo':DataBaseLibMock
    })

    const productService = new ProductService()

    describe('getProducts call',async function(){
        it('GetAll method from Database services called',async function(){
            const result = await productService.getProducts({})
            expected = productsMock
            assert.deepEqual(result,expected)
        })
    })
})