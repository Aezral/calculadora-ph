function objeto(id) {
    return document.getElementById(id)
}

function notacion(num) {
    function tosup(num) {
        num = String(num)
        num = num.replaceAll('0', '⁰').replaceAll('1', '¹').replaceAll('2', '²').replaceAll('3', '³').replaceAll('4', '⁴').replaceAll('5', '⁵').replaceAll('6', '⁶').replaceAll('7', '⁷').replaceAll('8', '⁸').replaceAll('9', '⁹')
        return num;
    }
    num = num.toExponential(3);
    num.replace(' ', '')
    if (num[num.indexOf("e") + 1] == '+') {
        var numero = num.substring(num.indexOf('e+') + 2, num.length)
        num = num.substring(0, num.indexOf('e+') + 2)
        num = num.replace('e+', 'x10' + '⁺' + tosup(numero))
        return num;
    } else if (num[num.indexOf("e") + 1] == '-') {
        var numero = num.substring(num.indexOf('e-') + 2, num.length)
        num = num.substring(0, num.indexOf('e-') + 2)
        num = num.replace('e-', 'x10' + '⁻' + tosup(numero))
        return num;
    }
}


function update(PH) {
    PH = Number(PH)
    if (PH > 0 && PH < 14) {
        POH = 14 - PH
        Hplus = Math.pow(10, -(PH))
        OHless = Math.pow(10, -(POH))
        if (PH < 7) {
            var tipo = 'Ácido'
        } else if (PH == 7) {
            var tipo = 'Neutro'
        } else if (PH > 7) {
            var tipo = 'Alcalino'
        }


        objeto('PH').value = PH.toFixed(2);
        objeto('POH').value = POH.toFixed(2);
        objeto('Hplus').value = notacion(Hplus)
        console.log(OHless)
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
}

objeto('calcular').onclick = function () {

    var cPH = objeto('PH').value
    var POH = objeto('POH').value
    var Hplus = objeto('Hplus').value
    var OHless = objeto('OHless').value

    if (cPH) {

        update(cPH)

    } else if (POH) {

        cPH = 14 - POH
        update(cPH)

    } else if (Hplus) {

        cPH = -(Math.log10(Hplus))
        update(cPH)

    } else if (OHless) {

        cPH = 14 - (-(Math.log10(OHless)))
        update(cPH)

    }

}


objeto('reiniciar').onclick = function () {
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

