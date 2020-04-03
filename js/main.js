//==============variables globales nodo=====
var contadorGlobal=1;


function NodoDesicion(nombreNodoDesicion) {//Clase nodo Desision
    	
    //$('#inptNodoDesicion').val("Ndo_Desicion"+id)
    this.nombreNodoDesicion = nombreNodoDesicion;

}

  function RamaDesicion(idNodoEvento, NombreRama) {//Clase Rama Desision
      this.idNodoEvento = idNodoEvento;
      this.NombreRama = NombreRama;
  }



function RamaEvento(idNodoDesicion, NombreRama,Probablidad,lucro) {//Clase Rama Desision
    this.idNodoDesicion = idNodoDesicion;
    this.NombreRama = NombreRama;
    this.Probablidad=Probablidad;
    this.lucro=lucro;
}
//array arbol
var arrayNodoDesicion=[];

var arrayRamaDesicion=[];

var arrayRamaEvento=[];

var ProbabilidadStatus=1;

// arrayNodoDesicion[0]={nombreNodoDesicion: "Ndo_Desicion1"};
// arrayNodoDesicion[1]={nombreNodoDesicion: "Ndo_Desicion2"};




// arrayRamaDesicion[0]={idNodoEvento: 1, NombreRama: "Desarrollar"};
// arrayRamaDesicion[1]={idNodoEvento: 1, NombreRama: "No Desarrollar"};
// arrayRamaDesicion[2]={idNodoEvento: 2, NombreRama: "Nivel Elevado"};
// arrayRamaDesicion[3]={idNodoEvento: 2, NombreRama: "Nivel Bajo"};



// arrayRamaEvento[0]={idNodoDesicion: 1, NombreRama: "Exito", Probablidad: "0.70", lucro: "1400"};
// arrayRamaEvento[1]={idNodoDesicion: 1, NombreRama: "Fracaso", Probablidad: "0.30", lucro: "-2000"};
// arrayRamaEvento[2]={idNodoDesicion: 3, NombreRama: "Demanda alta", Probablidad: "0.40", lucro: "5000"};
// arrayRamaEvento[3]={idNodoDesicion: 3, NombreRama: "Demanda baja", Probablidad: "0.60", lucro: "-1000"};
// arrayRamaEvento[4]={idNodoDesicion: 4, NombreRama: "Demanda alta", Probablidad: "0.40", lucro: "2000"};
// arrayRamaEvento[5]={idNodoDesicion: 4, NombreRama: "Demanda baja", Probablidad: "0.60", lucro: "900"};


//====================MAS DATOS=========================00

// arrayNodoDesicion[0]={nombreNodoDesicion: "Ndo_Desicion1"};


// arrayRamaDesicion[0]={idNodoEvento: 1, NombreRama: "A"};
// arrayRamaDesicion[1]={idNodoEvento: 1, NombreRama: "B"};
// arrayRamaDesicion[2]={idNodoEvento: 1, NombreRama: "C"};



// arrayRamaEvento[0]={idNodoDesicion: 1, NombreRama: "S", Probablidad: "0.45", lucro: "30"}
// arrayRamaEvento[1]= {idNodoDesicion: 1, NombreRama: "W", Probablidad: "0.55", lucro: "-8"}
// arrayRamaEvento[2]= {idNodoDesicion: 2, NombreRama: "S", Probablidad: "0.45", lucro: "20"}
// arrayRamaEvento[3]= {idNodoDesicion: 2, NombreRama: "W", Probablidad: "0.55", lucro: "7"}
// arrayRamaEvento[4]= {idNodoDesicion: 3, NombreRama: "S", Probablidad: "0.45", lucro: "5"}
// arrayRamaEvento[5]= {idNodoDesicion: 3, NombreRama: "w", Probablidad: "0.55", lucro: "15"}

//================CREAR EL NODO DE DESICION=========================//
//================CREAR EL NODO DE DESICION=========================//
$("#idAddNodoDesicion").on('submit',function(e){
    e.preventDefault();

    $('#inptNodoDesicion').val("Ndo_Desicion"+contadorGlobal);

    var objNodoDesicion=new NodoDesicion("Ndo_Desicion"+contadorGlobal);
    arrayNodoDesicion.push(objNodoDesicion);
    $('.nodo1').append("<h5>"+"["+contadorGlobal+"] "+"Ndo_Desicion"+contadorGlobal+"</h5>");
    contadorGlobal++;
    
      
    console.log(arrayNodoDesicion);

});



//================CREAR RAMA DE Desision=========================//
//================CREAR RAMA DE Desision=========================//
$("#idAddRamaDesision").on('submit',function(e){
    e.preventDefault();
    //if(ProbabilidadStatus==1){// condicion de probabiliddad

    var addRamaDesicion=$("#inptRamaDesicion").val();

    var objRamaDesicion=new RamaDesicion(arrayNodoDesicion.length, addRamaDesicion);// id,nombre rama
    arrayRamaDesicion.push(objRamaDesicion);

    $('.nodo2').append("<h5> ["+(contadorGlobal-1)+"]  |"+addRamaDesicion+"| => (NodoEvento : "+arrayRamaDesicion.length+") </h5>");
    // numNodoDesision++;]
    //$('.nodo2').append('<label for="exampleInputEmail1">Add Num Rama de Evento</label><input type="number" class="form-control" id="inptRamaEvento" aria-describedby="emailHelp" placeholder=""> <button type="submit" id="btnAddEvento" class="btn btn-warning">+</button>');
      
    console.log(arrayRamaDesicion);
    $("#inptRamaDesicion").val("");
    ProbabilidadStatus=0;
  // }else{
  //   alert("Debe sumar las probailidd 1 Revise y vuelva intentar estado actual= "+ProbabilidadStatus);
  // }

});


//=============================CREAR LA RAMA DE EVENTO=====================
$("#idAddRamaEvento").on('submit',function(e){
    e.preventDefault();

    console.log("xxx");
    var inptNameRama=$("#inptNameRama").val();
    var inptLucro=$("#inptLucro").val();
    var inptProblidad=$("#inptProblidad").val();

    ProbabilidadStatus=inptProblidad+ProbabilidadStatus;// condiicion para ver la probabilidad

    var objRamaEvento=new RamaEvento(arrayRamaDesicion.length, inptNameRama,inptProblidad,inptLucro);// idNodoDesicion,NombreRama,Probablidad, lucro
    arrayRamaEvento.push(objRamaEvento);
    $('.nodo2').append("<h7> --NameRama : "+inptNameRama+" Lucro: "+inptLucro+" Probabilidad: "+inptProblidad+"---</h7><br>");

    $("#inptNameRama").val("");
    $("#inptLucro").val(0);
    $("#inptProblidad").val(0);
    console.log(arrayRamaEvento);

 
});



//=========================EJECUTAR PROGRAMA=======================================
//=========================EJECUTAR PROGRAMA=======================================
//=========================EJECUTAR PROGRAMA=======================================




$("#formEjecutar").on('submit',function(e){
    e.preventDefault();
  

    //var inptCheckMax=$("#inptCheckMax").val();
    var inptCheck=$(this).serializeArray();

    arbolDesicion((inptCheck[0].value));
    
    


});


// var nodes = new vis.DataSet([
//     {id: 1, label: 'Node 1'},
//     {id: 2, label: 'Node 2'},
//     {id: 3, label: 'Node 3'},
//     {id: 4, label: 'Node 4'},
//     {id: 5, label: 'Node 5'},
//     {id: 6, label: 'Node 6'},
//     {id: 7, label: 'Node 7'},
//     {id: 8, label: 'Node 8'}
//   ]);

  // create an array with edges
//   var edges = new vis.DataSet([
//     {from: 1, to: 8, arrows:'to', dashes:true},
//     {from: 1, to: 3, arrows:'to'},
//     {from: 1, to: 2, arrows:'to, from'},
//     {from: 2, to: 4, arrows:'to, middle'},
//     {from: 2, to: 5, arrows:'to, middle, from'},
//     {from: 5, to: 6, arrows:{to:{scaleFactor:2}}},
//     {from: 6, to: 7, arrows:{middle:{scaleFactor:0.5},from:true}}
//   ]);

//   // create a network
//   var container = document.getElementById('mynetwork');
//   var data = {
//     nodes: nodes,
//     edges: edges
//   };
//   var options = {};
//   var network = new vis.Network(container, data, options);


//===========


function arbolDesicion(optionMaxMin){
  $('.vme h3').remove();

var totalDatosArray=arrayNodoDesicion.length+arrayRamaDesicion.length+arrayRamaEvento.length;
console.log(totalDatosArray);

var arrayVME=[];
var arrayVMEObj=[];

var X_Ndos=[];
var y_edges=[];

var nombreNodo="";



var auxNumeroRamaFinal=0;
var j=0,k=0,l=0;
var vme=0;
var lengNodoDesi=arrayNodoDesicion.length;
var lengRamaDesi=arrayRamaDesicion.length;

var auxSuma=0;

    console.log(arrayNodoDesicion);

  while(j<arrayNodoDesicion.length){//NODO MAIN
    X_Ndos.push({'id': ((totalDatosArray+1)+j), 'label': ("("+(arrayNodoDesicion[j].nombreNodoDesicion)+")")});
        lengNodoDesi--;//la pongo primero por q siempre empieza en 1, y los arreglos enpiezan en cereo
        console.log("°°°NODO MAIN°°°°°",arrayNodoDesicion[lengNodoDesi]);
                //1. Empiezo a cacular desde el ultima elemento ingresado relaciono el array1 y el array2
    
                while(k<arrayRamaDesicion.length){// ramas del nodo main

                    lengRamaDesi--;
                    console.log("NODO EVENTO ["+(lengRamaDesi+1)+"]",(arrayRamaDesicion[lengRamaDesi]) );
                    // unimos las ramas con los nodos de desicion
                   
                    //console.log("ID NODO EVENTO :",lengRamaDesi);
                    X_Ndos.push({'id':  ((arrayRamaDesicion.length-k)), 'label': ("("+(arrayRamaDesicion[lengRamaDesi].NombreRama)+")")});
                    console.log("++Nodos de Desicion ",(arrayRamaDesicion.length)-k);
                        //============FILTRO LOS DATOS===========
                        arrayRamaEvento.forEach(miFuncion);
                        function miFuncion(elemento, indice) {//hago los calculos recorreidno todos los datos

                          //console.log(y_edges[indice]);
                          if(elemento.idNodoDesicion==(lengRamaDesi+1)){// fltrado de los nodos
                                auxSuma=vme;
                                vme= elemento.Probablidad*elemento.lucro;
                                
                                //libreria se crear las rams del final donde estaran las estadistica y el precio
                                X_Ndos.push({'id': (totalDatosArray-auxNumeroRamaFinal), 'label':("Probabilidad: "+elemento.Probablidad+"\nLucros: "+elemento.lucro) });//creamos las ramas de los nodes de desicon
                                console.log("*Ramas Nodos Desicion Finales",totalDatosArray-auxNumeroRamaFinal);
                                //unimos los nodos
                                y_edges.push({from:((arrayRamaDesicion.length)-k), to: (totalDatosArray-auxNumeroRamaFinal), label:  ("("+(indice+1)+")"+(elemento.NombreRama)), font: {strokeWidth: 2, strokeColor : '#d8373e '}});
                               
                                auxNumeroRamaFinal++;
                              }
                          }// en miFuncion---termina de filtrar ahora si vemos a q nodo le corresponde esas ramas
                          console.log(vme+auxSuma);
                        
                          $('.vme').append("<h3> VME_"+(arrayRamaDesicion[lengRamaDesi].NombreRama)+" = "+(vme+auxSuma)+"</h3>");// dibujar operaciones
                          arrayVME.push(vme+auxSuma);
                          arrayVMEObj.push({nodoName:arrayRamaDesicion[lengRamaDesi].NombreRama,suma:vme+auxSuma});
                          auxSuma=0;
                          vme=0;
                          console.log((arrayRamaDesicion.length)-k);
                          y_edges.push({from:((totalDatosArray+1)+j), to: ( (arrayRamaDesicion.length)-k), label: (arrayRamaDesicion[lengRamaDesi].NombreRama), font: {strokeWidth: 2, strokeColor : '#00ff00'}});//rojo
                          k++;
                         

                        }// en  nodo de eventp
                        
               
        j++;
    

    }// en while main

   
     var respuesta;
    switch (optionMaxMin) {
      case 'max':
        
          console.log("Para Max : El valor optimo Sera: ",Math.max.apply(null, arrayVME));
          
          respuesta="Para Max : El valor optimo Sera: "+Math.max.apply(null, arrayVME);
        break;
      case 'min':
        console.log("Para Min: El valor optimo Sera: ",Math.min.apply(null, arrayVME));
        respuesta="Para Max : El valor optimo Sera: "+Math.min.apply(null, arrayVME)
        break;
      default:
        console.log('Lo lamentamos, por el momento no disponemos de ' + inptCheck[0].value + '.');
    }

    /// ================================DIBUJAR NODOS  MEDIANT LA LIBRERIA==
    $('.classRespuesta').html("<h1 class='respuesta'>"+respuesta+"<h1>");
    
    //var nodes =new vis.DataSet(X_Ndos);// el objeto lo dubuja

   
  
   
  
    // create a network
    var container = document.getElementById('mynetwork');
    var data = {
      nodes: X_Ndos,
      edges: y_edges
    };
    var options = {
      nodes : {
        shape: 'dot',
        size: 10
      }
    };
    var network = new vis.Network(container, data, options);
    
      // create a network
    }// en funcion arbol
    





