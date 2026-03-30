const luis={
  nombre:"luis",
  apellido:"Cadenas",
  edad:65,
  pasatiempos:["correr","ejercicio","dar clases"],
  soltero:false,
  contacto:{
    "email": "luiscadenasr@gmail.com",
    "twitter": "@luiscadenas",
    "telefono": "123456789"},

    // saludar:function() {
    //   console.log(`Hola, mi nombre es }  
    //   {luis.nombre} ${this.apellido}, tengo ${this.edad} años y mis pasatiempos son ${this.pasatiempos}.`);
    //   }
    
  };
  //  console.log(luis);
  
  // console.log (luis.pasatiempos [0]);
  
  
  
luis.decirMiNombre = function () {

  console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}, tengo ${this.edad} años y mis pasatiempos son ${this.pasatiempos}.`);
  
}

// console.log(
  
// luis.decirMiNombre();



// console.log(luis.contacto.email, luis.contacto.twitter, luis.contacto.telefono);



