import { writable, derived } from 'svelte/store';

const defaultRoute = { primary: '#111', secondary: '#bc07bc', img: "eNQue.svg", name:"eNQue" }

export const currentRoute = writable(defaultRoute);

export const routes = writable({
    help247: { primary: '#92278f', secondary: '#92278f', 'secondary-text': 'black', img: "help247.svg", name:"Help 24 Seven" },
    hillside: { primary: '#fff201', secondary: '#fff201', img: "Hillside.png", name:"Hillside NHW"  },
    sentosa: { primary: '#fff', secondary: '#ff1111', img: "Sentosa.png", name:"Sentosa NHW" },
    opal: { primary: '#0b0b45', secondary: '#14716f', img: "Opal-Blossom.png", name:"Opal Blossom"  }
});

export const styleVarArray = writable({
    'navWidth': 120,
    'navScrollbar': 0
});

export const navOpen = writable(true);

export const cssVarStyles = derived( [ styleVarArray, currentRoute ] , ([ $styleVarArray, $currentRoute ]) => {
    let result = `--primary: ${ $currentRoute.primary };--secondary: ${$currentRoute.secondary};`
    result += `--navWidth: ${ $styleVarArray.navWidth }px;--navWrapperWidth: ${ $styleVarArray.navWidth + $styleVarArray.navScrollbar }px;`
    return result;
});

export function load(params, route) {
    if(params.partner) {
        currentRoute.set( Object.assign({}, routes[params.partner], {route}) );
    } else {
        currentRoute.set( Object.assign({}, defaultRoute, {route}) );
    }
}