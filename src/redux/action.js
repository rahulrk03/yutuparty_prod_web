import { Types as RoomCreateTypes, Creators as RoomCreators } from '../Component/Home/store/index';
import { Types as VideoCreateTypes, Creators as VideoCreators } from '../Component/Room/store/index';

const Types = {
    ...RoomCreateTypes,
    ...VideoCreateTypes,
}

const Creators = {
    ...RoomCreators,
    ...VideoCreators
}

export { Types, Creators };
