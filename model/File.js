import {readonly} from 'core-decorators';
import {Schema} from 'mongoose';
import BaseModel from './BaseModel';

class File extends BaseModel {

    @readonly
    schema = {
        file: {
            type: String,
        },
        text: {
            type: String,
        },
        tag: {
            type: String,
            required: true
        },
        link: {
            type: String,
        },
        user_id: [{ 
            type: Schema.ObjectId, 
            ref: 'users' 
        }]
    }

    @readonly
    name = 'file';

}

export default new File();