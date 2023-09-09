function clock() {
    const now = new Date();
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
  
    // Setup Canvas
    ctx.save(); // save the default state
  
    
  
    ctx.restore(); // restore default state
  }
  
  clock();