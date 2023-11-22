let belanja = parseInt(prompt("Masukan Total Belanja"));
document.write(`Anda Belanja = ${belanja}`)
let diskon = 0
switch (true){

case (belanja < 100000 ):
  document.write("tidak mendapatkan diskon");
  break;

case (belanja >=  100000 && belanja <= 200000 ):
   diskon = belanja *  10 / 100 ;
  document.writeln(`anda mendapat diskon 10% total menjadi ${belanja - diskon} `);
break;

case (belanja >= 200000):
   diskon = belanja * 25 / 100;
  document.writeln(`Anda mendapat diskon 25% dan total menjadi ${belanja - diskon}`);


}