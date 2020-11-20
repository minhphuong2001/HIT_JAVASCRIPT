const listAccounts = [
    { id: 1, username: 'aduvip', balance: 1000000, type: 'normal' },
    { id: 2, username: 'aduvip1', balance: 500000, type: 'normal' },
    { id: 3, username: 'aduvip2', balance: 0, type: 'normal' },
    { id: 4, username: 'aduvip3', balance: 20000, type: 'normal', isActive: false },
    { id: 5, username: 'aduvip4', balance: 2500000, type: 'normal' },
    { id: 6, username: 'aduvip5', balance: 0, type: 'normal', isActive: false },
    { id: 7, username: 'aduvip6', balance: 1300000, type: 'normal' },
    { id: 8, username: 'aduvip7', balance: 2200000, type: 'normal' },
    { id: 9, username: 'aduvip8', balance: 1450000, type: 'normal', isActive: false },
    { id: 10, username: 'aduvip9', balance: 0, type: 'normal' },
    { id: 11, username: 'aduvip10', balance: 780000, type: 'normal', isActive: false },
    { id: 12, username: 'aduvip11', balance: 560000, type: 'normal' },
    { id: 13, username: 'aduvip12', balance: 0, type: 'normal', isActive: false },
    { id: 14, username: 'aduvip13', balance: 430000, type: 'normal' },
    { id: 15, username: 'aduvip14', balance: 990000, type: 'normal', isActive: false },
    { id: 16, username: 'aduvip15', balance: 10000, type: 'normal' },
  ]

  function setAccountVip(listAccounts){
      for(var i in listAccounts){
          if(listAccounts[i].balance > 1000000)
              listAccounts[i].type = 'VIP';
      }
      for(var i in listAccounts){
        if(listAccounts[i].balance > 1000000)
             console.log(listAccounts[i])
      }
  }
  function checkoutPromotion(listAccounts, id, money){
      var check=false;
      for(var i in listAccounts)
      {
        if(listAccounts[i].id==id && listAccounts[i].balance==0)
        {
            listAccounts[i].balance = money*2;
            check=true;
        }
        else if(listAccounts[i].id==id && listAccounts[i].balance!=0)
        {
            listAccounts[i].balance += money;
            check=true;
        } 
      }
      if(check==false){
        console.log("Khong co tai khoan thoa man")
      }
      else{
          for(var i in listAccounts){
            console.log(listAccounts[i]);
        }
      }
      
  }
  function checkIsActive(listAccounts){
     for(var i in listAccounts){
         if(listAccounts[i].isActive == false)
            listAccounts[i].isActive = 'true';
     }
     for(var i in listAccounts){
            console.log(listAccounts[i]);
    }
  }
  console.log('\n =========== SET VIP =========== \n');
  setAccountVip(listAccounts);
  console.log('\n =========== CHECK OUT PROMOTION =========== \n');
  checkoutPromotion(listAccounts,5,10500);
  console.log('\n =========== ACTIVE =========== \n');
  checkIsActive(listAccounts);