# Convierte pesos mexicanos, argentinos y colombianos a dólares

# """ """ Permite crear strings multilíneas
menu = """
Bienvenido al conversor de monedas multipaís 🪙

1-Pesos Mexicanos a USD
2-Pesos Colombianos a USD
3-Pesos Argentinos a USD

Elige una opción: 

"""
# De derecha a izquierda: Paso la varible menu a la función input para que la imprima y reciba el número que el usuario escogió, lo convierto a int y lo guardo en la variable 'opcion'
opcion = int(input(menu))

if opcion == 1: # Pesos mexicanos
	# Pregunto al usuario la cantidad a convertir
	pesos = float(input('¿Cuántos pesos mexicanos tienes?: '))
	# Escribo el valor del dolar en pesos mexicanos (Enero 10 de 2022)
	tipo_de_cambio = 20.45

elif opcion == 2: # Pesos colombianos
	# Pregunto al usuario la cantidad a convertir
	pesos = float(input('¿Cuántos pesos colombianos tienes?: '))
	# Escribo el valor del dolar en pesos colombianos (Enero 10 de 2022)
	tipo_de_cambio = 4050

elif opcion == 3: # Pesos argentinos
	# Pregunto al usuario la cantidad a convertir
	pesos = float(input('¿Cuántos pesos argentinos tienes?: '))
	# Escribo el valor del dolar en pesos argentinos (Enero 10 de 2022)
	tipo_de_cambio = 103.49
else:  # El usuario escribió algo diferente
	print('Escribe una opción correcta: ')


# Hago la conversión
dolares = pesos / tipo_de_cambio
# Redondeo los dólares a dos decimales
dolares = round(dolares, 2)
# Convierto el float de dolares a un string
dolares = str(dolares)

# Imprimo el valor de la conversion. Se pueden sumar (concatenar) strings con '+'
print('Tienes $' + dolares +' dólares')