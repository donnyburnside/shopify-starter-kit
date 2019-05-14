import { load } from '@shopify/theme-sections';
import './header';
import './footer';

document.addEventListener('DOMContentLoaded', () => {
    console.log('[Sections] Initialising...');

    // Initialise sections
    load('*');

    console.log('[Sections] Initialised!');
});