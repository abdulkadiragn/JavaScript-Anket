const secenekler = ["Evet","Hayır"];
const form = document.querySelector(".question-form");
const result = document.querySelector(".result");
const yazilacakYer = document.querySelector("#yuzde");
const button = document.querySelector('button')

form.addEventListener('submit',e=> {
    e.preventDefault();
    let skor  = 0;
    let kullaniciCevaplari = [
      form.q1.value,
      form.q2.value,
      form.q3.value,
      form.q4.value,
    ];

    kullaniciCevaplari.forEach((cevap) => {
        if(cevap == secenekler[0]){
            skor += 25;
        }
        else if(cevap == secenekler[1]){
            skor += 0;
        }
    })
    result.classList.remove('d-none')
    let i = 0;
    //animasyon (bekletmek için setInterval, clearInterval = break gibi düşünebilirsin.)
    const bastir = setInterval(() => {
        yazilacakYer.textContent = `${i}%`;
        if(i === skor){
            clearInterval(bastir)
        }
        else{
            i++;
        }
        button.setAttribute('disabled','')
    },10)

})
