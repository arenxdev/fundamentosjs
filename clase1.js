function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.soyAlto = function () {
  console.log(this.altura>1.8?'Soy alto':'Soy bajo')
}

var aaron = new Persona('Aaron', 'Isaacs', 1.65)
var kathe = new Persona('Katherine', 'Benitez', 1.70)
var sacha = new Persona('Sacha', 'Lifzyc', 1.95)

aaron.saludar()
aaron.soyAlto()
kathe.saludar()
kathe.soyAlto()
sacha.saludar()
sacha.soyAlto()