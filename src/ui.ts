import './scss/figma-plugin-ds.scss'

const textbox = document.getElementById('count') as HTMLInputElement;
const create = document.getElementById('create') as HTMLButtonElement;
const cancel = document.getElementById('cancel') as HTMLButtonElement;

create.onclick = () => {
    const count = parseInt(textbox.value, 10);
    parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*')
}

cancel.onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
}