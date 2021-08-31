function converterTudo(){
    converterPolToCm();
    converterCmToPol();
    converterPesToMt();
    converterMtToPes();
    converterCmToMt();
    converterMtToCm()
}

function converterPolToCm(){

    let pol1 = document.getElementById("pol1")
        .value;

    let cm1 = document.getElementById("cm1");

    cm1.innerHTML = pol1 * 2.54 + " Cm";

}

function converterCmToPol(){

    let cm2 = document.getElementById("cm2")
        .value;

    let pol2 = document.getElementById("pol2");

    pol2.innerHTML = cm2 / 2.54 + " Polegadas";
}

function converterPesToMt(){

    let pes1 = document.getElementById("pes1")
        .value;
    
    let mt1 = document.getElementById("mt1");

    mt1.innerHTML = pes1 * 0.3048 + " Metros";
}

function converterMtToPes(){
    
    let mt2 = document.getElementById("mt2")
        .value;
    
    let pes2 = document.getElementById("pes2");

    pes2.innerHTML = mt2 * 0.9144 + " Pés";
}

function converterCmToMt(){
    let cm3 = document.getElementById("cm3")
        .value;
    
    let mt3 = document.getElementById("mt3");

    mt3.innerHTML = cm3 * 0.01 + " Metros";
}

function converterMtToCm(){
    let mt4 = document.getElementById("mt4")
        .value;
    
    let cm4 = document.getElementById("cm4");

    cm4.innerHTML = mt4 * 100 + " Centímetros";
}