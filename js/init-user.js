import jQuery from 'jquery';
import { UserApp } from './user-app';

window.$ = window.jQuery = jQuery;

$(document).ready(() => {
    UserApp.init();
})