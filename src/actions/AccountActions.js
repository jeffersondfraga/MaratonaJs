/*
    uma action ela é uma função que retorna um objeto de duas propriedade o type e o payload
    → payload: na implementação será uma promise de uma req ajax feita pela API
*/
import {apiPost} from '../helpers/api';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const signUp = (data) => {
    const payload = apiPost('/auth/sign-up', data);
    return {type: SIGN_UP, payload};
};

export const signIn = (data) => {
    const payload = apiPost('/auth/sign-in', data);

    return {type: SIGN_IN, payload};
};

export const signOut = (data) => {
    return {type: SIGN_OUT, payload: {}};
};