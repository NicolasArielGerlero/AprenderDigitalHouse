autosImportados = require("./autos")

const concesionaria = {
    autos: autosImportados,
    buscarAuto: function(patenteBuscar){ let autoBuscado = this.autos.find(objeto => objeto.patente == patenteBuscar);
                                         if (autoBuscado) { return autoBuscado} else { return null};
    },
    venderAuto: function(patenteBuscar){ let autoVender = this.buscarAuto(patenteBuscar);
                                         if (autoVender) { autoVender.vendido = true}

    },
    autosParaLaVenta: function(){let autosParaVenta = this.autos.filter(objeto => objeto.vendido == false)
                                return autosParaVenta
    },
    autosNuevos: function(){ let autosCeroKm = this.autosParaLaVenta().filter(objeto => objeto.km <= 100 )
                            return autosCeroKm
    },
    listaDeVentas: function(){let AutosVendidos = this.autos.filter(objeto => objeto.vendido == true);
                              let precioAutosVendidos =  AutosVendidos.map(objeto => objeto.precio)
                              return precioAutosVendidos
    },
     totalDeVentas:function(){ let ventas = this.listaDeVentas()
                              if (ventas.length > 0){
                                let totalVentas = this.listaDeVentas().reduce((acumulador, precio) => acumulador + precio)
                                return totalVentas} else { return 0}
     },
     puedeComprar:function(auto,persona){ if (persona.capacidadDePagoTotal >= auto.precio && persona.capacidadDePagoEnCuotas >= (auto.precio/auto.cuotas) ){
                                              return true} else {return false};                                     
     },
     autosQuePuedeComprar:function(persona){ return this.autosParaLaVenta().filter( auto => this.puedeComprar(auto,persona) == true)

     }
    
};                           
// concesionaria.venderAuto('JJK116')
// concesionaria.venderAuto('APL123')
// console.log(concesionaria.autosParaLaVenta())

// Al vender al auto con patente 'JJK116' y luego llamar 21|||||||||||a la función autos0KM no debe contener ese auto
// Debes usar el método autosParaLaVenta y filtrar lo que devuelve dentro de autosNuevos

//  let vector = [];
// vector.reduce()

// console.log(concesionaria.autos)
//     concesionaria.venderAuto('JJK116')
//    concesionaria.venderAuto('APL123')

  // console.log(concesionaria.listaDeVentas());

  // console.log(concesionaria.totalDeVentas());

   const persona = {
     nombre: "Juan",
    capacidadDePagoEnCuotas: 12400,
     capacidadDePagoTotal: 150000
     };

// console.log(concesionaria.autosParaLaVenta());
console.log(concesionaria.autosQuePuedeComprar(persona))