""" PALÍNDROMO: Un palíndromo es una palabra o frase que se lee 
igual al derecho y al revés """

# DEFINIMOS LA FUNCIÓN PALÍNDROMO QUE RECIBE UNA PALABRA
def palindromo(palabra):
    palabra = palabra.replace(' ','') # Con esto eliminamos los espacios en blanco
    palabra = palabra.lower() # Pasamos la palabra a minúscula para que los caracteres sean igual
    palabra_invertida = palabra[::-1] # Generamos la palarbra invertida
    if palabra == palabra_invertida: # Preguntamos si la palabra se lee igual al derecho y al revés
        return True
    else:
        return False  

# DEFINIMOS LA FUNCIÓN RUN
def run():
    palabra = input("Escribe una palabra: ")
    es_palindromo = palindromo(palabra)
    if es_palindromo == True:
        print("Es palíndromo")
    else:
        print("No es palíndromo")


""" 
ENTRY POINT: Punto de entrada de los programas en Python
Lo que queremos correr será la función run  """
if __name__ == '__main__':
    run()
