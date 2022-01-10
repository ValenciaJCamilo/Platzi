def es_primo(numero):  # Se define la función "es_primo" que recibe un número como parámetro
    contador = 0  # Iniciamos una variable contador en 0
    # Hacemos un bucle que recorra un rango desde 1 hasta el numero + 1, (recordemos que no es inclusivo por esto sumamos +1 para que tome el número)
    for i in range(1, numero + 1):
        if i == 1 or i == numero:  # Aquí preguntamos si i es igual a 1 o al número
            continue  # Si alguna de las dos condiciones es verdadera nos saltamos la linea y repetimos el bucle
        if numero % i == 0:  # Si el numero al dividirlo por i nos da como resto 0
            contador += 1 # Le sumamos al contador 1, esta linea es igual a tipear(contador = contador + 1)
    # Cuando finalice de hacer todas las validaciones preguntamos,
    # Si el contador es igual a 0, es decir si el numero al dividirlo por todos los numero entre 1 y el mismo
    # si las divisiones dieron inexactas entonces nunca tuvimos un resto igual a 0 quiere decir que el contador
    # nunca aumentó
    if numero == 1:
        return False
    if contador == 0:
        return True  # Si es verdadero retornamos Verdadero
    else:
        return False  # Si es falso retornamos Falso


def run():
    numero = int(input('Escribe un Número: ')) # Ingresamos el número a evaluar y lo almacenamos

    # Esto es equivalente a tipear si es_primo(numero) == True:
    if es_primo(numero):  # Podemos obviar el == True ya que esto se entiende por defecto
        print('Es primo 😁')  # Se imprime que sí es primo
    else:  # Si no
        print('No es primo 😭')  # Se imprime que no es primo


if __name__ == "__main__":
    run()