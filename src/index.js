module.exports = function toReadable (number) {
    let arr = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let arr1 = ['zero','ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number < 20){
        return arr[number];
    }
    else if ( number <100 && number >= 20){
        let res = number.toString().split('');
        return arr1[res[0]]+' '+arr[res[1]];
    }
    else if (number >= 100){
        let res = number.toString().split('');
        return arr[res[0]]+' hundred '+arr1[res[1]]+' '+arr[res[2]];
    }
}

