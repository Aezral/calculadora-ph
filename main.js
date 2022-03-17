function objeto(id) {
    return document.getElementById(id)
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
            objeto('POH').value = POH
            objeto('Hplus').value = Hplus.toExponential();
            objeto('OHless').value = OHless.toExponential();
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
            objeto('PH').value = PH
            objeto('Hplus').value = Hplus.toExponential();
            objeto('OHless').value = OHless.toExponential();
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
            objeto('POH').value = POH
            objeto('PH').value = PH
            objeto('OHless').value = OHless.toExponential();
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
            objeto('POH').value = POH
            objeto('PH').value = PH
            objeto('Hplus').value = Hplus.toExponential();
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