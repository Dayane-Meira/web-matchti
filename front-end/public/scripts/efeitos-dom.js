export default function initEfectDom() {
    
}

$(document).ready(function () {
    $(window).scroll(function(){
        // Deixando a barra de navegação fixa
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // Botão que leva o usuário para o topo da página 
        if(this.scrollY > 300){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removendo a rolagem suave
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // aplicando novamente a rolagem do site suave
        $('html').css("scrollBehavior", "smooth");
    });

    // navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Texto de animação(slogan)
    var typed = new Typed(".typing", {
        strings: ["trazemos a tecnologia até você","a solução está proxima de você"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["nossa proposta ...", "nosso objetivo ..."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Script do carrossel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});