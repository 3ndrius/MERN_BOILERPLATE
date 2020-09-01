
// hooks 
require('../config/database')

// before test check connection 
describe('hooks before', () => {

    before((done) => {
        mongoose.connect(dbConnectionURL.LOCALURL, options);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'Mongodb Connection Error:' + dbConnectionURL.LOCALURL));
        db.once('open', () => {

            console.log('###### ======== Mongodb Connection Successful ========= ########');
            done()
        });
        done()
    })

})