
//Lista que contiene los elementos que se van a mostrar en el carrusel de la pagina principal
const elementos_carrusel = [
    {nombre:"Diseño Grafico", 
    descripcion:"Elaboramos y creamos el diseño de tu marca, como la creación de logo, manuales corporativos, diseños y catálogos para que muestres tus productos o servicios.",
    imagen:"img/brochure.png"},
    {nombre:"Social media", 
    descripcion:"Diseñamos tus post, stories para el feed de tus redes sociales para que se vea de una forma atractiva y corporativa.",
    imagen:"img/redes-divine.jpg"},
    {nombre:"P.O.P", 
    descripcion:"Aplicamos tu marca a diferentes piezas publicitarias obteniendo espectaculares resultados en avisos, habladores QR, señalética y muchos más.",
    imagen:"img/AVISO-EN-ACRILICO-3D-BONITA-COSMETICS.png"},
    {nombre:"Papeleria comercial", 
    descripcion:"Diseñamos e imprimimos la papelería comercial de tu empresa, incluyendo talonarios, hojas membretadas, tarjetas de presentación y más.",
    imagen:"img/2.jpg"},
]

const lista_categorias = [
    { codigo_categoria: "9001", nombre: "Avisos publicitarios",imagen:"img/AVISO-TIPO-BOTON.png" },
    { codigo_categoria: "9002", nombre: "Pines", imagen:"img/pines.png" },
    { codigo_categoria: "9003", nombre: "Catálogos", imagen:"img/CATALOGO-MELIPELUCHES-1.jpg" },
    { codigo_categoria: "9004", nombre: "Diseño textil", imagen:"img/diseno-textil-1.png" },
    { codigo_categoria: "9006", nombre: "Señalética", imagen:"img/senaletica.png" }
];



const lista_productos = [
    {codigo:"1000", nombre:"Aviso tipo boton", 
    descripcion:"Aviso circular en la que destaca tu marca y decora los espacios de tu local.", codigo_categoria:"9001",
    imagen:"img/AVISO-TIPO-BOTON.png", precio:"27000", contenido:["Material: Acrílico","Medidas: 40x40cm","Iluminación opcional"]},
    {codigo:"1002", nombre:"Pines", 
    descripcion:"ideal para aplicar qr como formas de pago, redes sociales menu o lo que desees facilitando a tus clientes el acceso.", codigo_categoria:"9002",
    imagen:"img/pines.png", precio:"50000"},
    {codigo:"1003", nombre:"Diseño de catalogo", 
    descripcion:"Diseñamos tu catalogo de productos y servicios.", codigo_categoria:"9003",
    imagen:"img/CATALOGO-MELIPELUCHES-1.jpg", precio:"10000"},
    {codigo:"1004", nombre:"Diseño textil", 
    descripcion:"Diseñamos productos textiles acorde a tus colores y misión.", codigo_categoria:"9004",
    imagen:"img/diseno-textil-1.png", precio:"12000"},
    {codigo:"1005", nombre:"Aviso caja luminosa", 
    descripcion:"Aviso externo con iluminación que hata resaltar tu negocio.", codigo_categoria:"9001",
    imagen:"img/CAJA-LUMINOSA-ALISADOS-INTELIGENTES.png", precio:"90000"},
    {codigo:"1006", nombre:"Señaletica", 
    descripcion:"Señales de abierto cerrado.", codigo_categoria:"9006",
    imagen:"img/senaletica.png", precio:"10000"},
]