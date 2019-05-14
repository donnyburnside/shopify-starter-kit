import { register } from '@shopify/theme-sections';
 
register('footer', {    
    // Shortcut function called when a section is loaded via 'sections.load()' or by the Theme Editor 'shopify:section:load' event.
    onLoad: function() {
        console.log('[Sections] Footer section:', 'Loaded!');
    },
    
    // Shortcut function called when a section unloaded by the Theme Editor 'shopify:section:unload' event.
    onUnload: function() {
        console.log('[Sections] Footer section:', 'Unloaded!');
    },
    
    // Shortcut function called when a section is selected by the Theme Editor 'shopify:section:select' event.
    onSelect: function() {
        console.log('[Sections] Footer section:', 'Selected!');
    },
    
    // Shortcut function called when a section is deselected by the Theme Editor 'shopify:section:deselect' event.
    onDeselect: function() {
        console.log('[Sections] Footer section:', 'Unselected!');
    },
    
    // Shortcut function called when a section block is selected by the Theme Editor 'shopify:block:select' event.
    onBlockSelect: function() {
        console.log('[Sections] Footer section:', 'Block Selected!');
    },
    
    // Shortcut function called when a section block is deselected by the Theme Editor 'shopify:block:deselect' event.
    onBlockDeselect: function() {
        console.log('[Sections] Footer section:', 'Block Unselected!');
    }
});