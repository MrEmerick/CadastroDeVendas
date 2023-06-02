export function comission(sale: number) {
  let comission = 0

  if (sale < 5000) {
    comission = sale * 1 / 100  
  } else if (sale >= 5001 && sale < 10000) {
    comission = sale * 1.5 / 100  
  } else if (sale >= 10001 && sale < 20000) {
    comission = sale * 2 / 100  
  } else if (sale > 20000) {
    comission = sale * 3 / 100
  }
    return comission

}
