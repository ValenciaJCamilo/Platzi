# Preguntamos y almacenamos 
pesos = float(input("¿Cuántos pesos colombianos tienes?"))
# Establecemos el valor del dolar (10 de Enero de 2022)
valor_dolar = 4050
# Operación respectiva para la conversión
dolares = pesos/valor_dolar
# Redondeamos los decimales a que solo sean 2
dolares=round(dolares,2)
# Convertimos el valor a str
dolares = str(dolares)
# Mostramos el resultado
print("Tienes $ " + dolares + " dolares")