def run():
    # Estructuramos nuestro diccionario
    poblacion_paises = {
	'Argentina': 44938712,
	'Brasil': 210147125,
	'Colombia': 50372424
}

    # Con esto imprimimos las llaves del diccionario (nombres)
    print(" ---------- LLAVES = KEYS ----------")
    for pais in poblacion_paises.keys():
        print(pais)


    # Con esto imprimimos los valores del diccionario
    print(" ---------- VALORES = VALUES -----------")
    for poblacion in poblacion_paises.values():
        print(poblacion)

    # Con esto imprimimos la llave y el valor del diccionario
    print(" ---------- LLAVE Y VALOR = ITEMS ----------")
    for pais,poblacion in poblacion_paises.items():
        print(pais + ' tiene ' +str(poblacion) + ' habitantes')

if __name__ == '__main__':
    run()