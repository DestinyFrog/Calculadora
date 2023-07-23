// Input onde será mostrado os resultador e contas
const display = document.getElementById('display-input');

// Lista de todos os botões 
const list_keys = Array.from( document.querySelectorAll('th') );
list_keys.forEach( obj => obj.onclick = (ev) => Pressed( ev.target.textContent ) );

// Operações Especiais
const special_keys = {
    ["AC"]: () => display.value = "",
    ["="]: () => {
        const txt = display.value;
        const result = eval( txt );
        display.value = result
    },
    ["+/-"]: () => {
        const list_txt = display.value.split( /([\+\-\*\/])/ );
        const last_txt = list_txt.pop();
        const txt = list_txt.join("") + "(-" + last_txt + ")";
        display.value = txt;
    }
}

// Função chamada quando um botão é pressionado
function Pressed( text ) {
    if ( special_keys[text] === undefined ) {
        display.value += text;
        return;
    }

    special_keys[text]();
}