$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        800:{
            items:4
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var backgrounds = [
        'rdr-index.jpg',
        'valorant-index.jpeg',
        'godofwar-index.jpg',
        'daysgone-index.jpg'
    ];

    var indexBackground = document.getElementById('index-background');

    changeBackground();

    function changeBackground() {
        var randomIndex = Math.floor(Math.random() * backgrounds.length);
        var selectedBackground = backgrounds[randomIndex];
        var imageUrl = 'img/index-background/' + selectedBackground;

        indexBackground.style.backgroundImage = 'url(' + imageUrl + ')';
    }

    window.addEventListener('load', function () {
        changeBackground();
    });
});

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

function loadMoreGames() {
    var loadMoreButton = document.getElementById("load-more-button");
    var loadingLogo = document.getElementById("loading-logo");
    var additionalGames = document.getElementById("additional-games");

    setTimeout(function () {

        loadingLogo.classList.remove("d-none");
        loadMoreButton.style.display = "none";
        setTimeout(function () {

            var newGamesHTML = "";
            for (var i = 0; i < 3; i++) {
                newGamesHTML += `
                <div class="col-12 col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                <div class="card bg-dark mb-5">
                    <a href="gamesDetails/tlou.html"><img class="card-img-top img-fluid" src="img/gamesList/tlou.jpg" alt="The Last of Us"></a>
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <div>
                                <p class="card-text gameName">The Last of Us</p>
                                <i class="fab fa-2x fa-steam me-2" style="color: #ffffff;"></i>
                                <i class="fab fa-2x fa-windows" style="color: #ffffff;"></i>
                            </div>
                            <div>
                                <div class="align-self-start text-center mt-2">
                                    <h6>1734,09 ₺</h6>
                                    <p>1168.73 ₺</p>

                                </div>
                                <div class="align-self-end text-center mt-4">
                                    <a href="#">
                                        <i class="btn-sm shop fas fa-2x fa-shopping-basket align-self-end"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                `;
            }
            additionalGames.innerHTML += newGamesHTML;

            loadingLogo.classList.add("d-none");
            loadMoreButton.style.display("block");

        }, 2000);

    }, 2000);
}
    document.addEventListener("DOMContentLoaded", function () {
        var iframe = document.querySelector('.carousel__slide iframe');
        var thumbnails = document.querySelectorAll('.carousel__thumbnails label');

        thumbnails.forEach(function (label, index) {
            label.addEventListener('click', function () {
                updateIframe(index);
            });
        });

        function updateIframe(index) {
            var slides = document.querySelectorAll('.carousel__slide');

            // Tüm slaytlardaki videoları duraklat
            slides.forEach(function (slide) {
                var video = slide.querySelector('iframe');
                if (video) {
                    var videoSrc = video.getAttribute('src');
                    video.setAttribute('src', '');
                    video.setAttribute('src', videoSrc);
                }
            });

            // Seçili slayttaki videoyu oynat
            var selectedSlide = slides[index];
            var selectedVideo = selectedSlide.querySelector('iframe');
            if (selectedVideo) {
                selectedVideo.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
            }
        }
    });
    
    