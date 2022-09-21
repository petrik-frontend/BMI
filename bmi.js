function katt() {
    document.getElementById('gomb').textContent = 'kalkulator gomb';
    console.log('katt');
}

function szamol() {
    let magasag = parseFloat(document.getElementById('magasag').value);
    let suly = parseFloat(document.getElementById('suly').value);
    document.getElementById('eredmeny').value = suly / (magasag / 100) ** 2;

}

function init() {
    document.getElementById('gomb').addEventListener('click', katt);
    document.getElementById('magasag').addEventListener('change', szamol);
    document.getElementById('suly').addEventListener('input', szamol);

    console.log('init');
}
document.addEventListener('DOMContentLoaded', init);
console.log('js fej vege')