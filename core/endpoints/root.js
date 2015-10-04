
function about(req, res) {
    res.json({
        status: 200,
        version: 0.1,
        'title': 'Rent a Lemon'
    });
}

module.exports = {
    about : about
};