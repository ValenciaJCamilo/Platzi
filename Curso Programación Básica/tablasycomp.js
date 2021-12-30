var bancoCliente = "Bancolombia";
var cuentaCliente = true;
var bancoDestino = "BBVA";
var cuentaDestino = true;
var hora = 20;
var montoTransferencia = 1000000;
var dineroTotalCliente = 5000000;
var transaccion;

if (bancoCliente == bancoDestino)
{
  transaccion = 0;
}
else
{
  transaccion = 100;
}

if (bancoCliente && bancoDestino)
{
  if((hora >= 9 && hora <=12) || (hora >= 15 && hora <= 20))
  {
    if (dineroTotalCliente > montoTransferencia+transaccion)
    {
      var total = montoTransferencia+transaccion
      alert ("Has enviado " + montoTransferencia +" y la transacción ha tenido un valor de "+ transaccion + " dolares. Has pagado un total de " + total + " USD 🤑.")
    }
    else
    {
      alert("¡UPS! No tienes saldo suficiente para realizar esta transacción 😔")
    }
  }
  else
  {
    alert ("Estas no son horas de estar haciendo transferencias 😡")
  }
}
else
{
    alert ("No es posible. Fallo en alguna de las cuentas 💀")
}
