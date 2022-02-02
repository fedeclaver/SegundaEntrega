
function cantidadCuotas(plazo){
    if (plazo <= 0){
        Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: `Has ingresado un número de cuotas inválido. El Plazo debe ser mayor a 0`,
        })
        return false;
    }
    return true;
  }
  
  function montoSolicitado(monto){
    if (monto <= 1000 || monto > 1500000){
        Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: `Has ingresado un número de cuotas inválido. El minimo es $1000 y el maximo $1500000`,
        })
        return false;
    }
    return true;
  }