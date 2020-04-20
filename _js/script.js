lim1 = 0; lim2 = 0; rec = 0; tn = 0; nome = ""; validade = 0; seg = 0;
    function nac1(minhadiv, tras) {
      document.getElementById("troca").innerHTML = '<img src="cartao_frente.png"/>';
      document.getElementById("minhadiv").style.display = 'block';
      document.getElementById("band").style.display = 'block';
      document.getElementById("tras").style.display = 'none';
      var recebe = document.getElementById("tip_n").value
      document.getElementById("nacionalidade").innerHTML = "NACIONAL"
    }
    function nac2(minhadiv, tras) {
      document.getElementById("troca").innerHTML = '<img src="cartao_frente.png"/>';
      document.getElementById("minhadiv").style.display = 'block';
      document.getElementById("band").style.display = 'block';
      document.getElementById("tras").style.display = 'none';
      var recebe1 = document.getElementById("tip_i").value
      document.getElementById("nacionalidade").innerHTML = "INTERNACIONAL"
    }
    function colocar(minhadiv, tras) {
      document.getElementById("troca").innerHTML = '<img src="cartao_frente.png"/>';
      document.getElementById("minhadiv").style.display = 'block';
      document.getElementById("band").style.display = 'block';
      document.getElementById("tras").style.display = 'none';
      rec = document.getElementById("num").value;
      document.getElementById("primq").innerHTML = '';
      for (var i = 0; i < rec.length; i++) {

        if (i == 4 || i == 8 || i == 12) {
          document.getElementById("primq").innerHTML += '⠀⠀⠀⠀⠀' + rec[i];
        } else {
          document.getElementById("primq").innerHTML += rec[i];
        }
      }
      if (rec[0]==5) {
        document.getElementById("band").innerHTML = '';
        document.getElementById("band").innerHTML = '<img src="band.png"/>';
      }else if(rec[0]==4){
        document.getElementById("band").innerHTML = '';
        document.getElementById("band").innerHTML = '<img src="band2.png"/>';
      }else if(rec[0]==3){
        document.getElementById("band").innerHTML = '';
        document.getElementById("band").innerHTML = '<img src="band3.png"/>';
      }else if(rec[0]==6){
        document.getElementById("band").innerHTML = '';
        document.getElementById("band").innerHTML = '<img src="band4.png"/>';
      }else{document.getElementById("band").innerHTML = '<img src="band5.png"/>'; }
    }
    function coln(minhadiv, tras) {
      document.getElementById("troca").innerHTML = '<img src="cartao_frente.png"/>';
      document.getElementById("minhadiv").style.display = 'block';
      document.getElementById("band").style.display = 'block';
      document.getElementById("tras").style.display = 'none';
      nome = document.getElementById("num2").value;
      document.getElementById("nome").innerHTML = '';
      document.getElementById("nome").innerHTML = nome;
     
    }

    function colv(minhadiv, tras) {
      document.getElementById("troca").innerHTML = '<img src="cartao_frente.png"/>';
      document.getElementById("minhadiv").style.display = 'block';
      document.getElementById("band").style.display = 'block';
      document.getElementById("tras").style.display = 'none';
      validade = document.getElementById("num3").value;
      document.getElementById("val").innerHTML = '';
      for (var j = 0; j < validade.length; j++) {

        if (j == 2) {
          document.getElementById("val").innerHTML += '/' + validade[j];
        } else {
          document.getElementById("val").innerHTML += validade[j];
        }
      }
    }
    function cols(minhadiv, tras) {
      document.getElementById("tras").style.display = 'block';
      document.getElementById("minhadiv").style.display = 'none';
      seg = document.getElementById("num4").value;
      document.getElementById("seg").innerHTML = '';
      document.getElementById("seg").innerHTML = seg;
    }
    function verso(minhadiv, tras) {
      document.getElementById("tras").style.display = 'block';
      document.getElementById("minhadiv").style.display = 'none';
      document.getElementById("band").style.display = 'none';
      document.getElementById("troca").innerHTML = '<img src="cartao_verso.png"/>';

    }