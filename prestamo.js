



const multiplicar = (a,b) => a * b ;  
const suma = (a,b) => a + b ;  
const dividir = (a,b) => a / b ;  
const interes = (a,b) => multiplicar(a,b)/100 ;  


    // buscar interes por banco seleccionado
    const interesxBanco = [
    {id:1,banco:"SANTANDER",interes:40},
    {id:2,banco:"NACION",interes:30},
    {id:3,banco:"BBVA",interes:45},
    {id:4,banco:"HSBC",interes:32},
    {id:5,banco:"ICBC",interes:42}
    ];



class Loan {
    constructor( monto,plazo) {
        this.banco = "SANTANDER";
        this.monto  = parseFloat(monto);
        this.plazo = parseInt(plazo);   
        this.descripcion = `- Se ha solicitado un préstamo de $${this.monto} a devolver en ${this.cuotas} cuotas.`;   
    }



   interesordenado(){
    return interesxBanco.sort(function (a, b) {
        if (a.interes > b.interes) {
          return 1;
        }
        if (a.interes < b.interes) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });

   }
    buscarInteres(){       
       let int =  interesxBanco.find(element => element.banco === this.banco );  
       this.interes = int.interes;
      return this.interes
    }   
}



    

/**
 * Se encarga de mostrar en pantalla mediante un input el valor calculado de la solicitud de préstamo solicitada
 */
 const creditForm = document.querySelector('#creditForm'),
 inputMonto = document.getElementById('monto'),
 inputPlazo= document.getElementById('plazo');

 creditForm.onsubmit = (e) => {
 e.preventDefault();

 let formData = new FormData(creditForm)

    const monto = formData.get('monto');
    const plazo = formData.get('plazo');
  
    const prestamo = new Loan(monto, plazo);
    let interesBanco= prestamo.buscarInteres();
    let total=suma(prestamo.monto,(interes(prestamo.monto,interesBanco)));
    let cuota=dividir(total,prestamo.plazo);
    let listaordenada =  prestamo.interesordenado(); 
    let templateHead = `<table class="table">
    <thead>
      <tr>
        <th scope="col">Mes</th>
        <th scope="col">Cuota</th>
        <th scope="col">Interes</th>
        <th scope="col">Total</th>
        <th scope="col">SaldoDeudor</th>
      </tr>
    </thead>
    <tbody>`;
    let templateRows = '' ;
 
    let saldoDeudor=total;
    for (let index = 1; index <= plazo; index++) {            
       
        let interes =  interesBanco/plazo 
        let totalmes = cuota + (cuota * interes) /100
        templateRows += `
        <tr><td>${index}</td><td>${cuota}</td><td>${interes}%</td><td>${totalmes}</td><td>${saldoDeudor}</td></tr>
      `;
      saldoDeudor = saldoDeudor - cuota;

}
let templateFooter =  `  </tbody>
</table>
<div class="d-flex justify-content-end pt-4 gap-3">
      <button type="submit" class="btn btn-primary">Solicitar</button>   
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>       
        </div>
        
       
 `
 const main = document.querySelector(`main`);
let nuevoModal = crearNuevoModal();
main.appendChild(nuevoModal);
document.querySelector(`#modalForm`).innerHTML = templateHead + templateRows + templateFooter 
document.querySelector(`#tituloModal`).innerHTML = `Simulacion Credito`;  
document.querySelector(`.operacion-modal`).click();

};
const crearNuevoModal = () => {
    let nuevoModal = document.createElement(`div`);
    nuevoModal.innerHTML = `
    <!-- Botón Modal -->
    <button type="button" class="btn btn-primary hidden operacion-modal" data-bs-toggle="modal" data-bs-target="#modal"></button>
    <!-- Modal -->
    <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" role="dialog">
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content">
                <div class="card card--modal m-auto">
                    <div class="card-header">
                        <h2 class="titulo-home m-auto" id="tituloModal"></h2>
                    </div>
                    <div class="card-body mt-3">
                        <form id="modalForm">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    return nuevoModal;
}






const solicitarPrestamo = (montoPrestamo, cantidadCuotas) => {

    let monto = document.querySelector(`#monto`).value; 
 
    if (!isNaN(monto) && !isNaN(plazo)){
        let validaciones = 1;
     
       if (cantidadCuotas(plazo)== 0){
        document.write("Ingresó una cantidad de cuotas invalida </br>");
  
            let validaciones = 0;            
        }
        if (montoSolicitado(monto)== 0){
            document.write("Ingresó un monto de la compra o prestamo invalido </br>");
           
            let validaciones = 0; 
        }

        if (validaciones == 1){
            const prestamo = new Loan(monto, plazo);
            let interesBanco=prestamo.buscarInteres();
            let total=suma(prestamo.monto,(interes(prestamo.monto,interesBanco)));
            let cuota=dividir(total,prestamo.plazo);
            let listaordenada =  prestamo.interesordenado();
            document.write("El prestamo o compra tiene un interes del : "+interesBanco+" </br> El importe de cada cuota es : "+cuota +" </br>La cuota con el interes es : "+total+ "</br>");
            document.write("Lista bancos e interes de los mismos:</br> ");
             for (let i = 0; i < interesxBanco.length ; i++) {
            
                let li = document.createElement("li");
                li.innerHTML =  ' banco: ' + interesxBanco[i].banco+ ' interes ' + interesxBanco[i].interes 
                document.body.appendChild(li);

             }
             
            
       
            }
}
}
