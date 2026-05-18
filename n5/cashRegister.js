function checkCashRegister(price, cash, cid) {
  
  const valoresMoedas = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  };

  
  let trocoDevido = (cash - price) * 100;
  let totalNoCaixa = 0;
  
  
  const caixaCentavos = cid.map(moeda => {
    const valorCentavos = Math.round(moeda[1] * 100);
    totalNoCaixa += valorCentavos;
    return [moeda[0], valorCentavos];
  });

  
  if (totalNoCaixa === trocoDevido) {
    return { status: "CLOSED", change: cid };
  }

  
  if (totalNoCaixa < trocoDevido) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  
  let arrayTroco = [];
  
  for (let i = caixaCentavos.length - 1; i >= 0; i--) {
    const nomeMoeda = caixaCentavos[i][0];
    let saldoDisponivelMoeda = caixaCentavos[i][1];
    const valorUnitarioMoeda = valoresMoedas[nomeMoeda];
    
    let acumuladoMoeda = 0;

    
    while (trocoDevido >= valorUnitarioMoeda && saldoDisponivelMoeda > 0) {
      trocoDevido -= valorUnitarioMoeda;
      saldoDisponivelMoeda -= valorUnitarioMoeda;
      acumuladoMoeda += valorUnitarioMoeda;
    }

    
    if (acumuladoMoeda > 0) {
      arrayTroco.push([nomeMoeda, acumuladoMoeda / 100]);
    }
  }

  
  if (trocoDevido > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  
  return { status: "OPEN", change: arrayTroco };
}


console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));


console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));


checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);