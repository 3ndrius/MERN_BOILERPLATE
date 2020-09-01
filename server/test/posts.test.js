const mocha = require('mocha');
const assert = require('assert');

const Post = require('../src/models/post.model');

describe('Save post record', () => {

    //test save
    it('Save a record correctly', (done) => {
        let post = new Post({
            title: "Just new title"

        })
        post.save().then(() => {
            assert(post.isNew === false)
            done()
        })

    })

    // test next
})