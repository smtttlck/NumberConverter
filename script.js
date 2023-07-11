let input = document.getElementById("input_val");
let output = document.getElementById("output_val");
let fromSelect = document.getElementById("from_select");
let toSelect = document.getElementById("to_select");
var sayi;
var cevap = "";

function hesapla() {
    sayi = input.value;
    switch(fromSelect.value) {
        case "1": // from Binary
            switch(toSelect.value) {
                case "1": // binary to binary
                    cevap = sayi;
                    break;
                case "2": // binary to decimal
                    sayi = String(sayi);
                    cevap = 0;
                    us = 0;
                    for(var i=sayi.length-1; i>=0; i--)
                    {
                        if(sayi[i] != "0" &&  sayi[i] != "1") {
                            cevap = "binary sayı giriniz"
                            break;
                        }
                        cevap+= sayi[i]*(Math.pow(2, us));
                        us++;
                    }
                    break;
                case "3": // binary to hex
                    sayi = String(sayi);
                    deger = 0;
                    us = 0;
                    for(var i=sayi.length-1; i>=0; i--)
                    {
                        if(sayi[i] != "0" &&  sayi[i] != "1") {
                            cevap = "binary sayı giriniz"
                            break;
                        }
                        
                        deger += sayi[i]*(Math.pow(2, us));
                        if(us==3 || i==0) {
                        if(deger>=10) {
                            switch(deger) {
                                case 10:
                                    deger = "A";
                                    break;
                                case 11:
                                    deger = "B";
                                    break;
                                case 12:
                                    deger = "C";
                                    break;
                                case 13:
                                    deger = "D";
                                    break;
                                case 14:
                                    deger = "E";
                                    break;
                                case 15:
                                    deger = "F";
                                    break;
                            }
                        }
                            cevap = deger + cevap;
                            deger = 0;
                            us = 0
                        }
                        else
                            us++;
                    }
                    break;
            }
            break;
        case "2": // from Decimal
            switch(toSelect.value) {
                case "1": // decimal to binary
                    while(sayi!=0){
                        cevap = (sayi % 2) + cevap;
                        sayi = Math.floor(sayi/=2);
                    }
                    break;
                case "2": // decimal to decimal
                    cevap = sayi;
                    break;
                case "3": // decimal to hex
                    while(sayi!=0){
                        deger = sayi % 16
                        if(deger>=10) {
                            switch(deger){
                                case 10:
                                    deger = "A";
                                    break;
                                case 11:
                                    deger = "B";
                                    break;
                                case 12:
                                    deger = "C";
                                    break;
                                case 13:
                                    deger = "D";
                                    break;
                                case 14:
                                    deger = "E";
                                    break;
                                case 15:
                                    deger = "F";
                                    break;                                        
                            }
                        }
                        cevap = deger + cevap;
                        sayi = Math.floor(sayi/=16);
                    }
                    break;
            }
            break;
        case "3": // from Hex
            switch(toSelect.value) {
                case "1": // hex to binary
                    sayi = String(sayi);
                    for(var i=sayi.length-1; i>=0; i--) {
                        deger = sayi[i];
                        switch(deger) {
                            case "A":
                                deger = 10;
                                break;
                            case "B":
                                deger = 11;
                                break;
                            case "C":
                                deger = 12;
                                break;
                            case "D":
                                deger = 13;
                                break;
                            case "E":
                                deger = 14;
                                break;
                            case "F":
                                deger = 15;
                                break;
                            default:
                                deger = deger;
                                break;
                        }
                        for(var j=0; j<4; j++) {
                            cevap = (deger % 2) + cevap;
                            deger = Math.floor(deger/=2);                                    
                        }
                    }
                    break;
                case "2": // hex to decimal
                    sayi = String(sayi);
                    us = 0;
                    cevap = 0;
                    for(var i=sayi.length-1; i>=0; i--) {
                        switch(sayi[i]) {
                            case "A":
                                deger = 10;
                                break;
                            case "B":
                                deger = 11;
                                break;
                            case "C":
                                deger = 12;
                                break;
                            case "D":
                                deger = 13;
                                break;
                            case "E":
                                deger = 14;
                                break;
                            case "F":
                                deger = 15;
                                break;
                            default:
                                deger = sayi[i];
                                break;
                        }
                        cevap += deger * (Math.pow(16, us));
                        us++;
                    }
                    break;
                case "3": // hex to hex
                    cevap = sayi;
                    break;
            }
            break;
    }
    
    output.value = cevap;
    cevap = "";
}