# Imprimir todas las potencias de 2 hasta llegal al número 100000
def run():
    LIMITE = 100000 # Establecemos el número hasta el cual vamos a iterar
    contador = 0 # Inicializamos el contador en 0 que será por donde empezará el elevado (2^0)
    potencia_2 = 2**contador # Elevamos 2 al número mediante (**)
    while potencia_2 < LIMITE: # Mientras que el número sea menor a 100000
        print('2^' + str(contador) + ' = ' + str(potencia_2)) # Se imprime esta mensaje
        contador += 1 # Al contador se le suma 1
        potencia_2 = 2**contador # Se vuelve a elevar, ahora con el contador actualizado


if __name__ == "__main__":
    run()