export function formatMoney(valor) {
  const formatt = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  })
  return formatt.format(valor)
}

export function calcTot(cant, meses) {
  let tot
  if (cant < 5000) tot = cant * 0.5
  else if (cant >= 5000 && cant < 10000) tot = cant * 1.4
  else if (cant >= 10000 && cant < 15000) tot = cant * 1.3
  else tot = cant * 1.2

  if (meses === 6) {
    tot *= 1.1
  } else if (meses === 12) {
    tot *= 1.2
  } else {
    tot *= 1.3
  }
  return tot
}

export function calcPayMonth(cant, month) {
  return cant / month
}