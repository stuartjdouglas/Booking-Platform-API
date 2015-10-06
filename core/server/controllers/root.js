
function about(req, res) {
    res.status(200).json({
        version: 0.1,
        'title': 'Rent a Lemon'
    });
}

module.exports = {
    about : about
};