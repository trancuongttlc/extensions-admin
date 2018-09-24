import {readonly} from 'core-decorators';
import BaseModel from './BaseModel';

class Users extends BaseModel {

    @readonly
    schema = {
        email: {
            type: String
        },
        password: {
            type: String
        }
    }

    @readonly
    name = 'users';

    _index() {
        let schema = this._schema();
        schema.index({
            email: 'text'
        });

        schema.index({
            email: 1,
            type: 1,
            deletedAt: 1
        }, {
            unique: true,
            sparse: true
        });
    }

}

export default new Users();