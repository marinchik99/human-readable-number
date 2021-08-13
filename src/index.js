module.exports = function toReadable (number) {
    let arr = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let arr1 = ['zero','ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let arr2 = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let res = number.toString().split('');
    if (number < 10){
        return arr[number];
    }
    if (number >= 10 && number < 20){
        return arr2[res[1]];
    }
    else if ( number <100 && number >= 20){
      if (res[1] === '0'){
        return arr1[res[0]];}
      else {return arr1[res[0]]+' '+arr[res[1]];}
    }
    

    else if (number >= 100){
        if (res[1] >= 1 && res[1] < 2 ){
        return arr[res[0]]+' hundred '+arr2[res[2]];}
        else if (res[1] === '0' && res[2] === '0'){
        return arr[res[0]]+' hundred'; 
        }else if (res[2] === '0'){
        return arr[res[0]]+' hundred '+arr1[res[1]];    
        } else if (res[1] === '0'){
        return arr[res[0]]+' hundred '+arr[res[2]]; 
        } else {
        return arr[res[0]]+' hundred '+arr1[res[1]]+' '+arr[res[2]];}
    }
    
} 

