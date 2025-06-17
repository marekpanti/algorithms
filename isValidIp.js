function isValidIP(str) {
  if (!str) return false; 
  const IPToCheck = str.split('.')
  console.log(IPToCheck);
  if (IPToCheck.length !== 4) return false;
  
  for (let i = 0; i < IPToCheck.length; i++) {
    console.log('tu')
    if 
    if (!(IPToCheck[i] >= 0 && IPToCheck[i] <= 255)) {
      return false;
    }
  }
  return true;
}

isValidIP("0.0.0.0")