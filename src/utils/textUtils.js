 export function removeNonNumber(text) {
     const newtext = text;
     return newtext.replace(/[^0-9]/g,'');
    
}