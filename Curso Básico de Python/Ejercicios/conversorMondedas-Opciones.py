# Definimos
def exchanges(opcion,cantidad):
    # Inicializamos la variable de resultado a 0
    result = 0
    # USD A COP
    if opcion == 1:
        result = cantidad * 4050 # A 4050 COP es a lo que está hoy el dolar (Enero 10 de 2022)
        print(f'Los {cantidad} dolares equivalen a {result} pesos colombianos')
    # COP A USD
    elif opcion == 2:
        result = cantidad / 4050
        print(f'Los {cantidad} pesos colombianos equivalen a {result} dolares')
    else:
        print('Ingresa solo un número de la lista')


if __name__ == '__main__':
    try:
        # Menú de las opciones
        opcion = int(input('''
        ¿Qué opción deseas?
            [1] USD a COP
            [2] COP a USD
        Selecciona: '''))
        print('***********************************************************')
        # Mensaje para ingresar la cantidad
        cantidad = int(input('Ingresa la cantidad que quieres convertir: '))
        exchanges(opcion,cantidad)
    except:
        print('* * * * * * E R R O R * * * * * *')
        print('Por favor, Ingresa sólo valores numericos :)')