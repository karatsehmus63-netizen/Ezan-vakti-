
// Ezan vakitlerini Türkiye/Yozgat için çekiyoruz
const url = "https://api.aladhan.com/v1/timingsByCity?city=Sorgun&country=Turkey&method=13";

fetch(url)
    .then(response => response.json())
    .then(data => {
        const vakitler = data.data.timings;
        const sayac = document.getElementById('sayac');
        
        // Ekrana vakitleri yazdırıyoruz
        sayac.innerHTML = `
            <h3>Yozgat/Sorgun Namaz Vakitleri</h3>
            <p>İmsak: ${vakitler.Fajr}</p>
            <p>Öğle: ${vakitler.Dhuhr}</p>
            <p>İkindi: ${vakitler.Asr}</p>
            <p>Akşam: ${vakitler.Maghrib}</p>
            <p>Yatsı: ${vakitler.Isha}</p>
        `;
    })
    .catch(error => {
        document.getElementById('sayac').innerText = "Vakitler yüklenemedi, lütfen tekrar deneyin.";
    });
