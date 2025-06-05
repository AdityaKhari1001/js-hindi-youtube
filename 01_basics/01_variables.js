const accountId = 144553
let accountEmail = "aditya@google.com"
var accountPassword = "123456"
accountCity = "Meerut"
let accountState;

// accountId=2 // not allowed


accountEmail = "adi@google.com"
accountPassword = "121212"
accountCity = "Dehradun"

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId ,accountEmail ,accountPassword ,accountCity ,accountState])
