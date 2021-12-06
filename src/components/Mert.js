import './Mert';

function Mert() {

    const satirislemleri=()=>
    {
        return "selam";
    }

    


    const islem=()=>
    {
        var sayi1=Number(1);
        var sayi2=Number(2);
        var sonuc=Number(sayi1+sayi2);

        return(sonuc);
    }

        let mesaj="merhaba";
        

  return (
    <div className="Mert">
    
     <input value="" placeholder="isim giriniz : "></input>
     
     
     <p>{mesaj}</p>
     <p>{satirislemleri()}</p>
     <p>{islem()}</p>
     
    </div>
  );
}

export default Mert;
