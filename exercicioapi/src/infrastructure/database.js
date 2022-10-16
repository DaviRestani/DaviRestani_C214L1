const mongoose = require('mongoose');

const uri = `mongodb+srv://user:user@clusterfilme.nfj1hgm.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const UserSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: {
        type: String,
        unique: true,
    },
    genero: String,
    tempo: String,
});

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = {
    UserModel,
};