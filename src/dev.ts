
interface IDevSettings {
    disableLoggerMiddleware: boolean,
    purgeStore: boolean,
    allowEmptySearch: boolean,
}
const devSettings = {
    disableLoggerMiddleware: false,
    purgeStore: true,
    allowEmptySearch: true,
}

// to enable devSetting, create .env file (at root) w/ `REACT_APP_ENABLE_DEV_SETTINGS=true`

const {REACT_APP_ENABLE_DEV_SETTINGS, NODE_ENV} = process.env;
const settings:IDevSettings = (REACT_APP_ENABLE_DEV_SETTINGS && NODE_ENV === 'development') ? devSettings : {
    disableLoggerMiddleware: true,
    purgeStore: false,
    allowEmptySearch: false,
};

export default settings;
