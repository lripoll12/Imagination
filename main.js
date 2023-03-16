
alert ("Bienvenido a I Magination")
const comprarProducto = () => {
    let producto = ""
    let cantidad = 0
    let precio = 0
    let subtotal = 0
    let continuarComprando = false

    do {
        producto = prompt ("¿Qué Iphone quiere comprar? (X, XR, 11 o 12)")
        cantidad = parseInt(prompt("¿Cuántos quiere?"))

        let cantidadValidada = validarCantidad(cantidad)       

        switch (producto) {
            case "X":
                precio = 130000
                break
            case "XR":
                precio = 160000
                break  
            case "11":
                precio = 190000
                break     
            case "12":
                precio = 250000
                break
            default:
                alert("Ingrese un modelo válido.")
                precio = 0
                cantidadValidada = 0
                break    
        }

        subtotal += precio * cantidadValidada 

        continuarComprando = confirm( "¿Necesita algún otro equipo?" )
    } while (continuarComprando)

    return subtotal
}

const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        alert ("Por favor ingrese una cantidad correcta.")
        cantidad = parseInt(prompt("¿Cuántos quiere?"))
    }
    return cantidad
}    
 
const aplicarDescuento = (subtotal) => {
    const descuento = 0.90

    if (subtotal => 300000) {
        return subtotal * descuento
    } else {
        return subtotal
    }
} 

const calcularEnvio = (subtotalDescuento) => {
    const envioSi = confirm("¿Desea envío a domicio?")

    if (envioSi && subtotalDescuento >= 300000) {
        alert("Tenés el envío bonificado. El total de tu compra es: $"+subtotalDescuento)
    } else if (envioSi && subtotalDescuento < 300000) {
        subtotalDescuento += 2500
        alert("El envío cuesta $2500. El total es $"+subtotalDescuento)
    } else {
        alert("El Total de tu compra es: $"+subtotalDescuento)
    }
    
    return subtotalDescuento

}


const detalleDeCompra = (precioFinal) => {
    alert("El total a pagar es de $"+precioFinal+". Gracias por su compra.")
}

const subtotal = comprarProducto()

const subtotalDescuento = aplicarDescuento(subtotal)

const precioFinal = calcularEnvio(subtotalDescuento)

detalleDeCompra(precioFinal)