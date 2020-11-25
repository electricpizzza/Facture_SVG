window.onload = function() {

    var table = ["apple","hamid","kawtar","apple","hamid","kawtar","apple","hamid","kawtar","apple","hamid","kawtar","apple","hamid","kawtar"];

    const nb_tab = Math.ceil(table.length/10);
    var paper = [];

    for (let n = nb_tab-1; n >=0; n--) {
        var paper = new Raphael(document.getElementById('canvas_container'), 1100, 1510);
   
   // === header == // 
   var header = paper.rect(0, 0, 1100, 100);
   var image = paper.image("https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png", 3,3,97,97);
   var text = paper.text(900, 50,'Facture').attr({"font-size":"100"});
   var text = paper.text(300, 50,'NewDev Maroc').attr({"font-size":"50"});

   // === content == // 

   var tab = paper.rect(4,330,1092,1400)


   
   var height = 330;

   for (let index = 1+(10*n); index < 10 +(10*n); index++) {
       const element = table[index-1];
       if (element!=undefined) {
        var cell = paper.rect(4,height,1092,100);
       var indiceCell =  paper.rect(4,height,100,100);
       var indice = paper.text(20,height+20,index).attr({"font-size":"25"});

       //  titre
       var indiceCell =  paper.rect(104,height,500,100);
       var indice = paper.text(150,height+50,element).attr({"font-size":"25"});

       //  P.U
       var indiceCell =  paper.rect(604,height,200,100);
       var indice = paper.text(650,height+50,`${120} DHs`).attr({"font-size":"20"});


       //  QTE
       var indiceCell =  paper.rect(804,height,100,100);
       var indice = paper.text(850,height+50,`${12}`).attr({"font-size":"20"});

       //  TOTAL
       var indiceCell =  paper.rect(904,height,192,100);
       var indice = paper.text(980,height+50,`${1200} DHs`).attr({"font-size":"20"});


       height+= 100

       }
       
   }
   
       //  TOTAL
       var indiceCell =  paper.rect(604,height,500,100);
       var indice = paper.text(650,height+50,`Total : `).attr({"font-size":"20"});
       var indiceCell =  paper.rect(904,height,292,100);
       var indice = paper.text(980,height+50,`${1200} DHs`).attr({"font-size":"20"});



   var footer = paper.rect(0,1350,1100,1510).attr({fill:"#00cbd6"});
   var footerTxt = paper.text(980,1450,`NewDev Maroc`).attr({"font-size":"20"});
        
    }
    
}
