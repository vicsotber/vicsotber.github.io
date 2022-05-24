
window.onload = function() {
    //Script for Classifieds sublist
    let classifieds  = document.getElementById("classifieds");
    classifieds.addEventListener("mouseover", function(){
        document.getElementById("sublist").setAttribute("style","display: block");
        document.getElementById("nav-row-right").setAttribute("style","display: none");
    });

    let sublist  = document.getElementById("sublist");
    sublist.addEventListener("mouseout", function(){
        document.getElementById("sublist").setAttribute("style","display: none");
        document.getElementById("nav-row-right").setAttribute("style","display: block");
    });

    classifieds.addEventListener("mouseout", function() {
        document.getElementById("sublist").setAttribute("style","display: none");
        document.getElementById("nav-row-right").setAttribute("style","display: block");
    })

    //Script for side menu
    let menu = document.getElementById("nav-menu");
    let section = document.getElementById("section");
    let sideMenu =  document.getElementById("side-menu");
    menu.addEventListener("click", function(){
        if(section.getAttribute("style")==="margin-left:250px") {
            //150px
            section.setAttribute("style","margin-left:0px")
            sideMenu.setAttribute("style","display:none")
        }else {
            section.setAttribute("style","margin-left:250px")
            // sideMenu.setAttribute("style","display:block")
            //150px
            if(document.getElementById('header-row').getAttribute('style')==='display:none') {
                sideMenu.setAttribute("style","display:block;top:54px;max-height:90%")
            }else{
                sideMenu.setAttribute("style","display:block")
            }
        }
    });

    let lastScroll = window.scrollY;
    window.addEventListener('scroll',function(){
        let currentScroll = window.scrollY;
        if(currentScroll>=90 && window.screen.width>766) {
            document.getElementById('nav-row-middle-icon').setAttribute('style','display:inline-block;position:unset')
            document.getElementById('header-row').setAttribute('style','display:none')
        }else if(currentScroll<5 && window.screen.width>766){
            document.getElementById('nav-row-middle-icon').setAttribute('style','display:none;position:relative')
            document.getElementById('header-row').setAttribute('style','display:block')
        }

        if(document.getElementById('header-row').getAttribute('style')==='display:none') {
            if(section.getAttribute("style")==="margin-left:250px") {
                document.getElementById('side-menu').setAttribute('style','display:block;top:54px;max-height:90%')
            }
        }else{
            if(section.getAttribute("style")==="margin-left:250px") {
                document.getElementById('side-menu').setAttribute('style','display:block')
            } 
        }
    })

    window.addEventListener('resize',function(){
        if(window.screen.width>766 && window.screen.width<=994) {
            document.getElementById('nav-row-middle').setAttribute('style','position:absolute;left:50%')
        }else if(window.screen.width>994) {
            document.getElementById('nav-row-middle').setAttribute('style','position:absolute;left:33%')
        }else if(window.screen.width<=766) {
            document.getElementById('header-row').setAttribute('style','display:none')
            document.getElementById('nav-row-middle-icon').setAttribute('style','display:inline-block;position:unset')
        }
    })
}