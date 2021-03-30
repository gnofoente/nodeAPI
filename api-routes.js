const router = require('express').Router();
let contactCtrl = require('./contactController');

router.get('/', (req, res) => {
    res.json({
        status: 'API is working',
        message: 'Welcome to nodeAPI <3'
    });
});

router.route('/contacts')
    .get(contactCtrl.index)
    .post(contactCtrl.create);

router.route('/contacts/:contact_id')
    .get(contactCtrl.view)
    .patch(contactCtrl.update)
    .put(contactCtrl.update)
    .delete(contactCtrl.remove)

module.exports = router;
