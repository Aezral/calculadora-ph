function objeto(id) {
    return document.getElementById(id)
}

function notacion(num){
    function tosup(num){
        num = String(num)
        num = num.replace('0','⁰').replace('1','¹').replace('2', '²').replace('3', '³').replace('4', '⁴').replace('5', '⁵').replace('6', '⁶').replace('7', '⁷').replace('8', '⁸').replace('9', '⁹')
        return num;
    }
    num = num.toExponential(3);
    num.replace(' ', '')
    if(num[num.indexOf("e")+1] == '+'){
        var numero = num.substring(num.indexOf('e+')+2, num.length)
        num = num.substring(0, num.indexOf('e+') +2)
        num = num.replace('e+', 'x10' + '⁺' + tosup(numero))
        return num;
    } else if(num[num.indexOf("e")+1] == '-') {
        var numero = num.substring(num.indexOf('e-')+2, num.length)
        num = num.substring(0, num.indexOf('e-') +2)
        num = num.replace('e-', 'x10' + '⁻' + tosup(numero))
        return num;
    }
}
objeto('calcular').onclick = function(){

    var PH = objeto('PH').value
    var POH = objeto('POH').value
    var Hplus = objeto('Hplus').value
    var OHless = objeto('OHless').value

    if(PH){

        if(PH > 0 && PH < 14){
            POH = 14 - PH
            Hplus = Math.pow(10, -(PH))
            OHless = Math.pow(10, -(POH))
            if(PH < 7){
                var tipo = 'Ácido'
            } else if(PH == 7){
                var tipo = 'Neutro'
            } else if(PH > 7){
                var tipo = 'Alcalino'
            }
            objeto('POH').value = POH.toFixed(2);
            objeto('Hplus').value = notacion(Hplus)
            objeto('OHless').value = notacion(OHless)
            objeto('Tipo').value = tipo
            
            
            objeto('PH').setAttribute('disabled', 'true')
            objeto('POH').setAttribute('disabled', 'true')
            objeto('Hplus').setAttribute('disabled', 'true')
            objeto('OHless').setAttribute('disabled', 'true')
            objeto('Tipo').setAttribute('disabled', 'true')
            objeto('calcular').classList.add('disabled');
            objeto('reiniciar').classList.remove('disabled');

    
        }

    } else if(POH){
        PH = 14 - POH
        if(PH > 0 && PH < 14){
            POH = 14 - PH
            Hplus = Math.pow(10, -(PH))
            OHless = Math.pow(10, -(POH))
            if(PH < 7){
                var tipo = 'Ácido'
            } else if(PH == 7){
                var tipo = 'Neutro'
            } else if(PH > 7){
                var tipo = 'Alcalino'
            }
            objeto('PH').value = PH.toFixed(2);
            objeto('Hplus').value = notacion(Hplus)
            objeto('OHless').value = notacion(OHless)
            objeto('Tipo').value = tipo
    
            objeto('PH').setAttribute('disabled', 'true')
            objeto('POH').setAttribute('disabled', 'true')
            objeto('Hplus').setAttribute('disabled', 'true')
            objeto('OHless').setAttribute('disabled', 'true')
            objeto('Tipo').setAttribute('disabled', 'true')
            objeto('calcular').classList.add('disabled');
            objeto('reiniciar').classList.remove('disabled');
        }
    } else if(Hplus){
        PH = -(Math.log10(Hplus))
        if(PH > 0 && PH < 14){
            POH = 14 - PH
            Hplus = Math.pow(10, -(PH))
            OHless = Math.pow(10, -(POH))
            if(PH < 7){
                var tipo = 'Ácido'
            } else if(PH == 7){
                var tipo = 'Neutro'
            } else if(PH > 7){
                var tipo = 'Alcalino'
            }
            objeto('POH').value = POH.toFixed(2);
            objeto('PH').value = PH.toFixed(2);
            objeto('OHless').value = notacion(OHless)
            objeto('Tipo').value = tipo
    
            objeto('PH').setAttribute('disabled', 'true')
            objeto('POH').setAttribute('disabled', 'true')
            objeto('Hplus').setAttribute('disabled', 'true')
            objeto('OHless').setAttribute('disabled', 'true')
            objeto('Tipo').setAttribute('disabled', 'true')
            objeto('calcular').classList.add('disabled');
            objeto('reiniciar').classList.remove('disabled');
        }
    }  else if(OHless){
        PH = -(Math.log10(OHless))
        if(PH > 0 && PH < 14){
            POH = 14 - PH
            Hplus = Math.pow(10, -(PH))
            OHless = Math.pow(10, -(POH))
            if(PH < 7){
                var tipo = 'Ácido'
            } else if(PH == 7){
                var tipo = 'Neutro'
            } else if(PH > 7){
                var tipo = 'Alcalino'
            }
            objeto('POH').value = POH.toFixed(2);
            objeto('PH').value = PH.toFixed(2);
            objeto('Hplus').value = notacion(Hplus)
            objeto('Tipo').value = tipo
    
            objeto('PH').setAttribute('disabled', 'true')
            objeto('POH').setAttribute('disabled', 'true')
            objeto('Hplus').setAttribute('disabled', 'true')
            objeto('OHless').setAttribute('disabled', 'true')
            objeto('Tipo').setAttribute('disabled', 'true')
            objeto('calcular').classList.add('disabled');
            objeto('reiniciar').classList.remove('disabled');
        }
    }

}


objeto('reiniciar').onclick = function(){
    objeto('PH').value = ''
    objeto('POH').value = ''
   objeto('Hplus').value = ''
    objeto('OHless').value = ''
    objeto('Tipo').value = ''

    objeto('PH').removeAttribute('disabled')
    objeto('POH').removeAttribute('disabled')
    objeto('Hplus').removeAttribute('disabled')
    objeto('OHless').removeAttribute('disabled')
    objeto('Tipo').removeAttribute('disabled')

    objeto('calcular').classList.remove('disabled');
    objeto('reiniciar').classList.add('disabled');
}

