""" # Con esto podemos imprimir letra por letra el texto que ingresemos
def run():
    nombre = input("Escribe un nombre: ")
    for letra in nombre:
        print(letra)


if __name__ == '__main__':
    run() """

# CON ESTO IMPRIMIMOS LOS CARACTERES DE LA FRASE EN MAYÚSCULAS Y REEMPLAZAMOS LOS ESPACIOS POR -
def run():
    frase = input("Escribe una frase:")
    for caracter in frase:
        print(caracter.replace(" ", "-").upper())

if __name__ == '__main__':
    run() 