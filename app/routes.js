//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.get('/app/views/beta/v127-0-0/start.html', function (req, res) {

    res.render('/app/views/beta/v127-0-0/start', { 'name' : 'Foo' });

  });

