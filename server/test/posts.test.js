const mocha = require('mocha');
const assert = require('assert');
const Post = require('../src/models/post.model');

describe('Save post record', function() {

    //test save
    it('Save a record correctly', function (done) {
        let post = new Post({
            title: "Just new title"

        })
        post.save().then(function() {
            assert(post.isNew === false)
            done()
        })

    })

    // test next
})


describe('Finds records in database', function () {

    beforeEach(function(done) {
        let post = new Post({
            title: 'First post'
        });
        post.save().then(()=>{
            assert(post.isNew === false);
            done();
        })
    })

    it('Find one record from the database', function(done) {

        Post.findOne({title: 'First post'}).then(function(res) {
            assert(res.title === 'First post');
            done();
        })
    })

})
