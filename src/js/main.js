import loadCards from './modules/cards';
import dropDown from './modules/dropdown';
import modal from './modules/modal';
import reg from './modules/reg';
import auth from './modules/auth';
import settings from './modules/settings';
import umnoj from './modules/umnoj';
import sum from './modules/sum';
import delen from './modules/delen';
import uravn from './modules/uravn';
import sendResult from './modules/sendResult';

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
    modal('#result-sum', '.result-modal');
    modal('#result-umnoj', '.result-modal');
    modal('#result-delen', '.result-modal');
    modal('#result-uravn', '.result-modal');
    settings();
    umnoj();
    sum();
    delen();
    uravn();
    sendResult();
});