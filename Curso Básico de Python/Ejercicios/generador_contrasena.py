import random # Importamos el modulo random para poder generar la aleatoriedad
# Este modulo nos sirve para poder traer las listas de mayusculas, minusculas, simbolos y números de ASCII
# import string

# Aquí creamos nuestra lista 
def generar_contrasena():
# Haciendo uso de "import string" esta es la manera en cómo crearíamos la lista
#    mayus = list(string.ascii_uppercase)
#    minus = list(string.ascii_lowercase)
#    chars = list(string.punctuation)
#    nums = list(string.digits) 

    # Procedemos a llenar la lista manualmente
    mayus = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z']
    minus = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z']
    nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    chars = ['*', '+', '-', '/', '@', '_', '?', '!', '[', '{', '(', ')', '}', ']', ',', ';', '.', '>', '<', '~', '°', '^', '&', '$', '#', '"']

    # Aquí creamos una lista que acopla la lista generada anteriormente
    caracteres = mayus + minus + nums + chars

    # Aquí generamos una lista vacía que guardará caracteres elegidos al azar de la lista creada
    contrasena = []

    for i in range(16): # Este será el total de caracteres que tendrá la contraseña 
        caracter_random = random.choice(caracteres) # Con choice elegimos un caracter al azar de la lista de caracteres y posteriormente se guarda
        contrasena.append(caracter_random) # Aquí agregamos ese caracter que ha sido seleccionado, a la nueva lista vacía creada
        
    contrasena = ''.join(contrasena) # Con esto convertimos una lista en String
    return contrasena # La devolvemos para poder guardarla en la función y se pueda mostrar

def run():
    contrasena = generar_contrasena() # Aquí llamamos la funcion
    print('Tu contraseña es: ' + contrasena) # Aquí imprimimos el resultado


if __name__ == "__main__":
    run()