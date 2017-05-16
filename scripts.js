var banners = document.querySelectorAll('img.banner1,img.banner2,img.banner3');
var activeBanner = 0;

function advanceBanner(){
    banners[activeBanner].classList.remove('active');

    activeBanner++;

    if(activeBanner >= banners.length){
        activeBanner = 0;
    }

    banners[activeBanner].classList.add('active');
}
setInterval(advanceBanner,3000);
