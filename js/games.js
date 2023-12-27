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


var aciklama = document.getElementById("aciklama");
var sistemgereksinimleri = document.getElementById("sistemgereksinimleri");
var aktivasyon = document.getElementById("aktivasyon");
var metin = document.getElementById("metin");

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
