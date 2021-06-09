//leemos el json que arroja la APi
 const rutaURL= 'http://api.weatherstack.com/current?access_key=26fddc9027cbcd72ef98d89e01433c40&query=New%20York/current.json';
 const request = new XMLHttpRequest();
 request.open('GET', rutaURL);
 request.responseType = 'json';//indicamos el tipo de archivo recogido
 request.send();
 request.onload = function() {
    const clima= request.response; // cargamos los datos en una vble
    crear_tabla (clima);// llamamos a la funcion para crear la tabla
 }

  function crear_tabla (elclima){
// Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
    //recorro el objeto clima para ir imprimiendo su valores
    Object.keys(elclima).forEach((valor)=> 
    {

            //recojo los valores en dos array uno contiene las llaves de los objetos y otro el valor del mismo
              llave =Object.keys(elclima[valor]);
              contenido = Object.values(elclima[valor]);
              var j = 0;
              // inicio un ciclo para recorrer el array e ir imprimiendo los valores obtenidos
                for ( let i=0 ; i< llave.length ; i++ ) {
                  //creo los elemtos html para ir maquetando la tabla
                    var hilera = document.createElement("tr");
                    // Mostrar los valores de la primer columna
                    var celda1 = document.createElement("td");
                    var textoCelda1 = document.createTextNode (llave[i]);
                    celda1.appendChild(textoCelda1);
                    //Mostrar los valores de la segunda columna
                    var celda2 = document.createElement("td");
                    /*Aca me fijo si el contenido es una imagen */
                    tipoImagen= llave[i].toString();
                    palabraIcon ="icon"
                    if (tipoImagen.includes(palabraIcon)){
                        var ruta= contenido[i];
                        var imagen= document.createElement("img");
                        imagen.setAttribute("src",ruta);
                        hilera.appendChild(celda1);
                        hilera.appendChild(imagen);
                        tblBody.appendChild(hilera);
                        if (j==1) {
                          hilera.setAttribute("class","rowColor");
                          j=0;
                        }
                        else { j++;}
                      
                    } 
                    else{
                    
                      /*Si no es una imagen cargo una celda comun */
                      var textoCelda2 =document.createTextNode (contenido[i]);
                      celda2.appendChild(textoCelda2);
                      hilera.appendChild(celda1);
                      hilera.appendChild(celda2);
                      tblBody.appendChild(hilera);
                      if (j==1) {
                        hilera.setAttribute("class","rowColor");
                        j=0;
                      }
                      else { j++;}
                    }

                  } 
               
    
    })
    
  // cerramos la etiqueta tblbody
  tabla.appendChild(tblBody);
  // colocamos la etiqueta table dentro de body
  body.appendChild(tabla);
 
  }
 
