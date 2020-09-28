import loadCards from './modules/cards';
import dropDown from './modules/dropdown';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    loadCards('.wrapper');
    dropDown('.dorpDownTrigger', '.dropList');
});