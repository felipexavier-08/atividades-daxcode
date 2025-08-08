    function mudarCor() {
      const cores = ['lightblue', 'lightgreen', 'blue', 'yellow', 'purple'];
      const corAtual = document.body.style.backgroundColor;
      let novaCor;


      do {
        novaCor = cores[Math.floor(Math.random() * cores.length)];
      } while (novaCor === corAtual);

      document.body.style.backgroundColor = novaCor;
    }