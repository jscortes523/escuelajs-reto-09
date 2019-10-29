const assert =require('assert')
const proxyquire = require('proxyquire')

const {
     ProductServiceMock,
     productsMock
} = require('../utils/mocks')

const testServer = require('../utils/test.server')

describe('Products Routes', function(){
    const route = proxyquire('../routes/index',{
        '../services':ProductServiceMock
    })

    const request = testServer(route)
    describe('GET/ Products',function(){
        it('Full Products Listed',function(done){
            request.get('/api/products').end((err,res)=>{
                assert.deepEqual(res.body,productsMock)
            })
            done()            
        })
    })
})