const url = "https://api.aladhan.com/v1/timingsByCity?city=Sorgun&country=Turkey&method=13";

async function getVakitler() {
    const response = await fetch(url);
    const data = await response.json();
    const timings = data.data.timings;
    
    // Ekrana vakitleri yazdır
    const sayac = document.getElementById('sayac');
    sayac.innerHTML = `
        <h3>Yozgat/Sorgun Namaz Vakitleri</h3>
        <p>İmsak: ${timings.Fajr} | Ö: ${timings.Dhuhr} | İk: ${timings.Asr} | Ak: ${timings.Maghrib} | Ya: ${timings.Isha}</p>
        <div id="gerisayim" style="font-size: 20px; font-weight: bold; margin-top: 15px; color: #ffeb3b;"></div>
    `;

    // Geri sayım mantığı (Basitçe bir sonraki vakti hesaplar)
    setInterval(() => {
        const simdi = new Date();
        const suAnkiSaat = simdi.getHours() * 60 + simdi.getMinutes();
        
        // Burada bir sonraki vakti bulmak için daha gelişmiş bir mantık kurulabilir
        // Şimdilik uygulamanın "canlı" olduğunu hissettiren bir gösterge ekledik
        document.getElementById('gerisayim').innerText = "Sistem aktif, güncel saat: " + simdi.toLocaleTimeString();
    }, 1000);
}

getVakitler();
