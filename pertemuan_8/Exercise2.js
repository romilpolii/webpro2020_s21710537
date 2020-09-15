var account ={
    name : "Romil",
    expenses1 : 0,
    expenses2 : 0,
};
var addExpenses1 = function(amount, description){
    amount.expenses1 = amount.expenses1 + description;
};
var addExpenses2 = function(amount, description){
    amount.expenses2 = amount.expenses2 + description;
};
var getAccountSummary = function(amount){
    total=amount.expenses1 + amount.expenses2;
    console.log("name : "+account.name);
    console.log("Rincian : Expense Rp. "+amount.expenses1+" & Expenses Rp. "+amount.expenses2);
    console.log("Total : Rp. "+total);
    //console.log(account);
};
addExpenses1(account,10000);
addExpenses2(account,20000);
getAccountSummary(account);

var resetAccount=function(account){
    account.name="";
    account.expenses1=0;
    account.expenses2=0;
};
resetAccount(account);
console.log(account);
