const bcrypt = require('bcrypt');

bcrypt.hash('111', 10, function (err, hash) {
    if (err) throw err;
    console.log("Hash da nova senha:", hash);
});
