function fibonnaci(n) {
    let n1 = 0;
    let n2 = 1;
    let next;
  
    while (next < n) {
      console.log('vo while')
      n1 = n2;
      n2 = next;
      next = n1 + n2;
      console.log('next:', next);
    }
    console.log('next:', next);
      return next;
  }
  
  fibonnaci(20);