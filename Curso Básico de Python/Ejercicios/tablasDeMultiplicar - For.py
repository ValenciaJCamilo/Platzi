# Establecemos que será desde la tabla 1 hasta la 10
for i in range(1,11):
    # Imprimimos el mensaje para saber en qué tabla estamos
    print(f"Esta es la tabla del {i}")
    # Establecemos un rango para multiplicar hasta el 10(Ej: 2x10)
    for j in range(11):
        # Imprimimos el resulta de la multiplicación
	    print(f"{i} x {j} = {i*j}")