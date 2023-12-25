var toggleButton = document.getElementById("toggleButton");
var closeButton = document.getElementById("closeButton");
var dropdownDiv = document.getElementById("dropdownDiv");
var floatingButton = document.getElementById("floatingButton");

toggleButton.addEventListener("click", function(event) {
    event.stopPropagation();  
    dropdownDiv.classList.toggle("hidden");
    closeButton.style.display = "block"; 
    floatingButton.style.display = "none";
});

closeButton.addEventListener("click", function(event) {
    event.stopPropagation();  
    dropdownDiv.classList.add("hidden");
    closeButton.style.display = "none"; 
    floatingButton.style.display = "block";
});

$(document).ready(function () {
    $("#aciklama").click(function () {
        $("#metin").html(`<p style="font-size:16px; text-align: left;">
        <h4 style="margin-bottom: 10px;">200'den fazla Yılın Oyunu ödülü kazanan The Last of Us™'ta <br>duygusal hikaye anlatımını ve unutulmaz karakterleri deneyimleyin.</h4>
        
        <p style="margin-bottom: 10px;">
            Enfekte olmuş ve sertleşmiş hayatta kalanların kol gezdiği harap olmuş bir medeniyette, yorgun bir kahraman olan Joel, 14 yaşındaki Ellie'yi askeri karantina <br>bölgesinden kaçırmak için tutulur. Ancak, küçük bir iş olarak başlayan şey, kısa sürede acımasız bir ülke çapında yolculuğa dönüşür.
        </p>
        
        <p style="margin-bottom: 10px;">
            The Last of Us tek oyunculu hikayenin tamamını ve Ellie ile en iyi arkadaşı Riley'nin hayatlarını sonsuza dek değiştiren olayları araştıran ünlü bir ön bölüm olan Left Behind'ı içerir.
        </p>
        
        <p style="margin-bottom: 10px;">
            ©2022 Sony Interactive Entertainment LLC. Naughty Dog LLC tarafından yaratılmış ve geliştirilmiştir. The Last of Us, Sony Interactive Entertainment LLC'nin ve ilgili şirketlerin ABD ve diğer ülkelerdeki tescilli ticari markasıdır.
        </p>
        
        <p style="margin-bottom: 10px;">
            Gizlilik Politikası: <a href="https://www.playstation.com/legal/privacy-policy/" target="_blank">https://www.playstation.com/legal/privacy-policy/</a>
        </p>
        
        <p style="margin-bottom: 10px;">
            Kullanıcı Sözleşmesi: <a href="https://www.playstation.com/legal/op-eula/" target="_blank">https://www.playstation.com/legal/op-eula/</a>
        </p>
        
        <p style="margin-bottom: 10px;">
            Sağlık uyarısı:
        </p>
        
        <p style="margin-bottom: 10px;">
            - UYARI: EPİLEPSİ VEYA NÖBET ÖYKÜSÜNÜZ VARSA KULLANMADAN ÖNCE DOKTORA BAŞVURUNUZ. BELİRLİ ÖRNEKLER, ÖNCEKİ ÖYKÜSÜ OLMAYAN NÖBETLERİ TETİKLEYEBİLİR. KULLANMADAN ÖNCE VE DAHA FAZLA BİLGİ İÇİN ÖNEMLİ SAĞLIK VE GÜVENLİK UYARILARINA BAKIN <a href="https://www.playstation.com/en-us/legal/health-warning/" target="_blank">https://www.playstation.com/en-us/legal/health-warning/</a>
        </p>
    </p>`);
    });

    $("#sistemgereksinimleri").click(function () {
        $("#metin").html(`<p> 
        
        <p style="font-size:16px; text-align: left;">
            <h4 style="margin-bottom: 10px;">The Last of Us™ Part I Minimum Sistem Gereksinimleri:</h4>
            
            <p style="margin-bottom: 10px;">
                - Requires a 64-bit processor and operating system
            </p>
            
            <p style="margin-bottom: 10px;">
                - OS: Windows 10 Version 1909 or Newer
            </p>
            
            <p style="margin-bottom: 10px;">
                - Processor: AMD Ryzen 5 1500X, Intel Core i7-4770K
            </p>
            
            <p style="margin-bottom: 10px;">
                - Memory: 16 GB RAM
            </p>
            
            <p style="margin-bottom: 10px;">
                - Graphics: AMD Radeon 470 (4 GB), NVIDIA GeForce GTX 970 (4 GB), NVIDIA GeForce 1050 Ti (4 GB)
            </p>
            
            <p style="margin-bottom: 10px;">
                - Storage: 100 GB available space
            </p>
            
            <p style="margin-bottom: 10px;">
                - Sound Card: TBD
            </p>
            
            <p style="margin-bottom: 30px;">
                - VR Support: N/A
            </p>
            
            <h4 style="margin-bottom: 10px;">The Last of Us™ Part I Önerilen Sistem Gereksinimleri:</h4>
            
            <p style="margin-bottom: 10px;">
                - Requires a 64-bit processor and operating system
            </p>
            
            <p style="margin-bottom: 10px;">
                - OS: Windows 10 Version 1909 or Newer
            </p>
            
            <p style="margin-bottom: 10px;">
                - Processor: AMD Ryzen 5 3600X, Intel Core i7-4770K
            </p>
            
            <p style="margin-bottom: 10px;">
                - Memory: 16 GB RAM
            </p>
            
            <p style="margin-bottom: 10px;">
                - Graphics: AMD Radeon RX 5800 XT (8 GB), AMD Radeon RX 6600 XT (8 GB), NVIDIA GeForce RTX 2070 SUPER (8 GB), NVIDIA GeForce RTX 3060 (8 GB)
            </p>
            
            <p style="margin-bottom: 10px;">
                - Storage: 100 GB available space
            </p>
            
            <p style="margin-bottom: 10px;">
                - Sound Card: TBD
            </p>
            
            <p style="margin-bottom: 10px;">
                - VR Support: N/A
            </p>  
        </p>`);
    });

    $("#aktivasyon").click(function () {
        $("#metin").html(`<p style="font-size:16px; text-align: left;">
        <h4 style="margin-bottom: 10px;">Steam Arayüzünü İndirme ve Kurma:</h4>
        
        <p style="margin-bottom: 10px;">
            - Steam arayüzünü indirin ve bilgisayarınıza kurun.
        </p>
        
        <p style="margin-bottom: 10px;">
            - Steam arayüzünü açın, kayıt olun ve giriş yapın.
        </p>
        
        <p style="margin-bottom: 10px;">
            - Üst menüde "Oyunlar" sekmesine tıklayın.
        </p>
        
        <p style="margin-bottom: 10px;">
            - Ardından, açılabilir listede yer alan "Steam’de Ürün Etkinleştir…" seçeneğini tıklayın.
        </p>
        
        <p style="margin-bottom: 10px;">
            - Açılan yeni pencerede "İleri" butonuna tıklayın ve sözleşmeyi kabul edin.
        </p>
        
        <p style="margin-bottom: 10px;">
            - Karşınıza çıkan yeni pencerede "Ürün Kodu" kısmında açılan bölüme ürün kodunu girin ve "İLERİ" butonuna tıklayın.
        </p>
        
        <p style="margin-bottom: 10px;">
            - "Etkinleştirme Başarılı" ekranını gördükten sonra sağ altta yer alan "BİTİR" butonuna basarak oyunun yüklemesini başlatın.
        </p>
        
        <p style="margin-bottom: 10px;">
            - Artık oyunu Steam platformunda "KÜTÜPHANE" kısmında görebileceksiniz.
        </p>
        
        <p style="margin-bottom: 10px;">
            - Oyunun indirmesi ve yüklemesi bittikten sonra oynamaya başlayabilirsiniz.
        </p>
        
        <p style="margin-bottom: 10px;">
            - Daha fazla bilgi ve destek için: <a href="https://help.steampowered.com/tr/wizard/HelpWithSteam" target="_blank">https://help.steampowered.com/tr/wizard/HelpWithSteam</a>
        </p>
    </p>`);
    });
});

var aciklama = document.getElementById("aciklama");
var sistemgereksinimleri = document.getElementById("sistemgereksinimleri");
var aktivasyon = document.getElementById("aktivasyon");
var metin = document.getElementById("metin");

aciklama.addEventListener("click", function(){
    aciklama.classList.add("active");
    sistemgereksinimleri.classList.remove("active");
    aktivasyon.classList.remove("active");
});

sistemgereksinimleri.addEventListener("click", function(){
    aciklama.classList.remove("active");
    sistemgereksinimleri.classList.add("active");
    aktivasyon.classList.remove("active");
});

aktivasyon.addEventListener("click", function(){
    aciklama.classList.remove("active");
    sistemgereksinimleri.classList.remove("active");
    aktivasyon.classList.add("active");
});