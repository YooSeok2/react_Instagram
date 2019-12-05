import {createAction,handleActions} from 'redux-actions';
import {Map} from 'immutable';


//액션타입
const INSERT_ADDRESS = 'register/INSERT_ADDRESS';
const INSERT_SIGN = 'register/INSERT_SIGN';
const INSERT_NAME = 'register/INSERT_NAME';
const INSERT_PASSWORD = 'register/INSERT_PASSWORD';
const SET_WARNING='register/SET_WARNING';
const SET_STYLE = 'register/SET_STYLE';
const SET_TO = 'register/SET_TO';

//액션생성함수정의
export const insert_address = createAction(INSERT_ADDRESS);
export const insert_sign = createAction(INSERT_SIGN);
export const insert_name = createAction(INSERT_NAME);
export const insert_password = createAction(INSERT_PASSWORD);
export const set_warning = createAction(SET_WARNING);
export const set_style = createAction(SET_STYLE);
export const set_to = createAction(SET_TO);

//모듈 초기 상태 정의
const initialState = Map({
    address:'',
    sign:'',
    name:'',
    password:'',
    style : '',
    warning : '',
    to : ''
});

//액션함수 
export default handleActions({
    [INSERT_ADDRESS] : (state, action) =>{
        return state.set('address', action.payload);
    },
    [INSERT_SIGN] : (state, action) =>{
        return state.set('sign', action.payload);
    },
    [INSERT_NAME] : (state, action) =>{
        return state.set('name', action.payload);
    },
    [INSERT_PASSWORD] : (state, action) =>{
        return state.set('password', action.payload);
    },
    [SET_WARNING] : (state, action)=>{
        return state.set('warning', action.payload);
    },
    [SET_STYLE] : (state, action) =>{
        return state.set('style', action.payload);
    },
    [SET_TO] : (state, action)=>{
        return state.set('to', action.payload);
    }
   
}, initialState);
