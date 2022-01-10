# DEFINIMOS LA FUNCIÓN QUE ES EL PROCESO QUE VAMOS A REUTILIZAR. SE RECOMIENDA DEJARLO AL INICIO DEL CÓDIGO
def conversor(tipo_pesos, valor_dolar): # Se define la función y se pasan los dos parámetros que van a cambiar
    pesos = float(input("¿Cuántos pesos " +tipo_pesos+" tienes? ")) # Hacemos la pregunta y pasamos el parámetro que cambiará(tipo_peso)
    dolares = pesos/valor_dolar # Realizamos la conversión necesaria para pasar de USD a pesos
    dolares = round(dolares,2) # Redondeamos a 2 decimales
    dolares = str(dolares) # Pasamos a string (str) los dolares
    print("Tienes $" + dolares +" dolares") # Imprimimos el mensaje del resultado

# CREAMOS EL MENÚ DE LAS OPCIONES
menu = """
Bienvenido al conversor de monedas multipaís 🪙 - Funciones
1-Pesos Mexicanos a USD
2-Pesos Colombianos a USD
3-Pesos Argentinos a USD
Elige una opción: 
"""

# CONDICIONALES AL MOMENTO DE SELECCIONAR LAS OPCIONES
opcion = int(input(menu)) # Pasamos la varible del menu para poder seleccionar una opción

if opcion == 1: # Pesos mexicanos
    conversor("mexicanos",20.45) # Aquí pasamos la funcion, junto a los dos valores cuando la opción sea 1. 
elif opcion == 2: # Pesos colombianos
	conversor("colombianos",4050) # Aquí pasamos la funcion, junto a los dos valores cuando la opción sea 2. 
elif opcion == 3: # Pesos argentinos
    conversor("argentinos",103.49) # Aquí pasamos la funcion, junto a los dos valores cuando la opción sea 3. 
else:  # El usuario escribió algo diferente
	print('Escribe una opción correcta: ')