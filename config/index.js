import * as local from './localhost';
import * as pro   from './production';
import _ from 'lodash';


var config_default = {
};

let mode_config = {};

switch(process.env.NODE_ENV) {
case 'localhost':
    mode_config = local;
    break;
case 'production':
    mode_config = pro;
    break;
default:
    throw new Error('NODE_ENV is required in environment');
}

var config = _.merge({}, config_default, mode_config);

export default config;