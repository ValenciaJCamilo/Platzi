def run():
# IMPRIMIR LOS NÚMEROS PARES HASTA EL 1000
    for contador in range(1000):
        if contador % 2 != 0:
            continue
        print(contador)

# IMPRIMIR LOS NÚMEROS HASTA EL 10000, PERO SI NOS ENCONTRAMOS CON EL NÚMERO 5678, ENTONCES QUE EL CICLO PARE
    for i in range (10000):
        print(i)
        if i ==5678:
            break

# IMPRIMIR LETRA POR LETRA UN TEXTO INGRESADO, PERO SI NOS ENCONTRAMOS CON LA LETRA 'O' QUE NO SIGA IMPRIMIENDO LO DEMÁS
    texto = input("Escribe un texto: ")
    for letra in texto:
        if letra == 'o':
            break
        print(letra)


if __name__ == '__main__':
    run()