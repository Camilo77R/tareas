const areaTriagulo= ( base, altura)=>{
    return base * altura /2;
}



function areaCirculo(radio){
    return  Math.PI * (radio * radio);
}

export {areaTriagulo, areaCirculo};