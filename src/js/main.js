import loadCards from './modules/cards';
import dropDown from './modules/dropdown';
import modal from './modules/modal';
import reg from './modules/reg';
import auth from './modules/auth';
import settings from './modules/settings';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    loadCards('.wrapper');
    reg();
    auth();
    dropDown('.dorpDownTrigger', '.dropList');
    dropDown('.btn-drop', '.dropList1');
    modal('.auth-btn', '.auth-modal');
    modal('.exit', '.exit-modal');
    modal('.settings', '.settings-modal');
    settings();
});