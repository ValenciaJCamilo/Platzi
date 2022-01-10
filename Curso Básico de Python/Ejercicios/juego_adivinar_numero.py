import random # Este modulo es el paquete de código de Python para poder trabajar con la aleatoriedad

def run():
    print("¡Hey! Intenta adivinar el número en el que estoy pensando 🤞🏻")
    numero_aleatorio = random.randint(1, 100) # Con el punto accedemos a las funciones de un determinado módulo
    numero_elegido = int(input("Elige un número del 1 al 100 : ")) # Almacenamos y preguntamos el número
    while numero_elegido != numero_aleatorio: # Mientras que el número elegido sea diferente al número aleatorio
        if numero_elegido < numero_aleatorio: # Si el número es menor, se imprime el mensaje
            print("⬆️")
        else: # De lo contrario, se imprime el otro mensaje
            print("⬇️")
        numero_elegido = int(input("Elige otro número  :")) # Se le dice al usuario que ingrese otro número
    print("¡ADIVINASTE! 🔮")


if __name__ == "__main__":
    run()