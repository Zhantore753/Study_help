import loadCards from './modules/cards';
import dropDown from './modules/dropdown';
import modal from './modules/modal';
import reg from './modules/reg';
import auth from './modules/auth';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    loadCards('.wrapper');
    dropDown('.dorpDownTrigger', '.dropList');
    modal('.auth-btn', '.auth-modal');
    reg();
    auth();
});