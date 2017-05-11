import jQuery from 'jquery';
import { PublicApp } from './public-app';

window.$ = window.jQuery = jQuery;

$(document).ready(() => {
    PublicApp.init();
})