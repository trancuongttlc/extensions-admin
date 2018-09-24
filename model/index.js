import _ from 'lodash';
import config from '../config';

//==============================================
import mongoose from 'mongoose';
mongoose.connect(config.mongo.url, {useMongoClient: true});

import Users from './Users';
import File from './File';

const models = {
    Users,
    File
};

_.forEach(models, function(Model) {
    Model.define();
});

export {
    mongoose,
    Users,
    File
};
