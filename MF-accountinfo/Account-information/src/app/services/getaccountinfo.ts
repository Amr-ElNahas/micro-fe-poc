const accountdb=[{
    accountnumber: "64684",

    balance: 100000,

    cardnumber: '4188-3201-1188-1967',
    
},
{
    accountnumber: "617786",

    balance: 90000.5,

    cardnumber: '4188-3201-1188-1967',
    
},
{
    accountnumber: "62334",

    balance: 300000,

    cardnumber: '4188-3201-1188-1967',
    
},
{
    accountnumber: "617710",

    balance: 20000,

    cardnumber: '4188-3201-1188-1967',
    
}

]
export function getaccountinfo(accountnumber: string) {
    for (var val of accountdb) {
        if(val["accountnumber"]==accountnumber)
        {
            return val;

        }
      }
  return {
    accountnumber: "notfound",

    balance: 0,

    cardnumber: '0',
  };
}
