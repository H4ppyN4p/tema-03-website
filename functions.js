function toggleMenu(){
    var x = document.getElementById("hidden-items")

    if (x.style.display === "block") {
        x.style.display = "none"
    } else {
        x.style.display = "block"

    }
}




//Phone code

var is_index = document.getElementById('carousel-nav-button-1')

var idToSwitch = 1

if (is_index != null ){
    var timer = setInterval(autoSwitchCarousel, 4000)
}

function autoSwitchCarousel(){


    if (idToSwitch < 3) {
        idToSwitch = idToSwitch +1
    }  else {
        idToSwitch = 1
    }

    switch(idToSwitch) {
        case 1:
            switchCarouselElement('carousel-nav-button-1')
            break
        case 2:
            switchCarouselElement('carousel-nav-button-2')
            break
        case 3:
            switchCarouselElement('carousel-nav-button-3')
            break
    }
}


function switchCarouselElement(buttonId){

    switch(buttonId) {
        case 'carousel-nav-button-1':
            setCarouselCard('carousel-card-1')
            break

        case 'carousel-nav-button-2':
            setCarouselCard('carousel-card-2')
            break;

        case 'carousel-nav-button-3':
            setCarouselCard('carousel-card-3')
            break;
    }

    setCarouselButtonStyles(buttonId)
}

function setCarouselButtonStyles(buttonId){
    document.getElementById('carousel-nav-button-1').style.backgroundColor = '#E2B961'
    document.getElementById('carousel-nav-button-2').style.backgroundColor = '#E2B961'
    document.getElementById('carousel-nav-button-3').style.backgroundColor = '#E2B961'

    document.getElementById(buttonId).style.backgroundColor = '#242733'
    document.getElementById(buttonId).style.border = '2px solid #E2B961'
}

function setCarouselCard(cardId){
    switch(cardId) {
        case 'carousel-card-1':
            document.getElementById(cardId).style.left = '0'
            document.getElementById(cardId).style.right = '0'
            document.getElementById(cardId).style.zIndex = '2'
            idToSwitch = 1
            clearInterval(timer)
            timer = setInterval(autoSwitchCarousel, 4000)

            


            document.getElementById('carousel-card-3').style.left = 'inherit'
            document.getElementById('carousel-card-3').style.right = '-215px'
            document.getElementById('carousel-card-3').style.zIndex = '1'
            

            document.getElementById('carousel-card-2').style.right = 'inherit'
            document.getElementById('carousel-card-2').style.left = '-215px'
            document.getElementById('carousel-card-2').style.zIndex = '1'



            break

        case 'carousel-card-2':
            document.getElementById(cardId).style.left = '0'
            document.getElementById(cardId).style.right = '0'
            document.getElementById(cardId).style.zIndex = '2'
            idToSwitch = 2
            clearInterval(timer)
            timer = setInterval(autoSwitchCarousel, 4000)


            document.getElementById('carousel-card-1').style.left = 'inherit'
            document.getElementById('carousel-card-1').style.right = '-215px'
            document.getElementById('carousel-card-1').style.zIndex = '1'
            

            document.getElementById('carousel-card-3').style.right = 'inherit'
            document.getElementById('carousel-card-3').style.left = '-215px'
            document.getElementById('carousel-card-3').style.zIndex = '1'

            break

        case 'carousel-card-3':
            document.getElementById(cardId).style.left = '0'
            document.getElementById(cardId).style.right = '0'
            document.getElementById(cardId).style.zIndex = '2'
            idToSwitch = 3
            clearInterval(timer)
            timer = setInterval(autoSwitchCarousel, 4000)


            document.getElementById('carousel-card-2').style.left = 'inherit'
            document.getElementById('carousel-card-2').style.right = '-215px'
            document.getElementById('carousel-card-2').style.zIndex = '1'

            

            document.getElementById('carousel-card-1').style.right = 'inherit'
            document.getElementById('carousel-card-1').style.left = '-215px'
            document.getElementById('carousel-card-1').style.zIndex = '1'

    }
}


// Tablet code
var is_index_tablet = document.getElementById('carousel-nav-button-1-tablet')

var idToSwitchTablet = 1

if (is_index_tablet != null ){
    var timer_tablet = setInterval(autoSwitchCarouselTablet, 4000)
}

function autoSwitchCarouselTablet(){

    
    if (idToSwitchTablet < 3) {
        idToSwitchTablet = idToSwitchTablet +1
    }  else {
        idToSwitchTablet = 1
    }

    switch(idToSwitchTablet) {
        case 1:
            switchCarouselElementTablet('carousel-nav-button-1-tablet')
            break
        case 2:
            switchCarouselElementTablet('carousel-nav-button-2-tablet')
            break
        case 3:
            switchCarouselElementTablet('carousel-nav-button-3-tablet')
            break
    }
}


function switchCarouselElementTablet(buttonId){

    switch(buttonId) {
        case 'carousel-nav-button-1-tablet':
            setCarouselCardTablet('carousel-card-1-tablet')
            break

        case 'carousel-nav-button-2-tablet':
            setCarouselCardTablet('carousel-card-2-tablet')
            break;

        case 'carousel-nav-button-3-tablet':
            setCarouselCardTablet('carousel-card-3-tablet')
            break;
    }

    setCarouselButtonStylesTablet(buttonId)
}

function setCarouselButtonStylesTablet(buttonId){
    document.getElementById('carousel-nav-button-1-tablet').style.backgroundColor = '#E2B961'
    document.getElementById('carousel-nav-button-2-tablet').style.backgroundColor = '#E2B961'
    document.getElementById('carousel-nav-button-3-tablet').style.backgroundColor = '#E2B961'

    document.getElementById(buttonId).style.backgroundColor = '#242733'
    document.getElementById(buttonId).style.border = '2px solid #E2B961'
}

function setCarouselCardTablet(cardId){
    switch(cardId) {
        case 'carousel-card-1-tablet':
            document.getElementById(cardId).style.display = 'block'
            idToSwitchTablet= 1
            clearInterval(timer_tablet)
            timer_tablet = setInterval(autoSwitchCarouselTablet, 4000)

            


            document.getElementById('carousel-card-3-tablet').style.display = 'none'
            

            document.getElementById('carousel-card-2-tablet').style.display = 'none'



            break

        case 'carousel-card-2-tablet':
            document.getElementById(cardId).style.display = 'block'
            idToSwitchTablet = 2
            clearInterval(timer_tablet)
            timer_tablet = setInterval(autoSwitchCarouselTablet, 4000)


            document.getElementById('carousel-card-1-tablet').style.display = 'none'
            

            document.getElementById('carousel-card-3-tablet').style.display = 'none'

            break

        case 'carousel-card-3-tablet':
            document.getElementById(cardId).style.display = 'block'
            idToSwitchTablet = 3
            clearInterval(timer_tablet)
            timer_tablet = setInterval(autoSwitchCarouselTablet, 4000)


            document.getElementById('carousel-card-2-tablet').style.display = 'none'

            

            document.getElementById('carousel-card-1-tablet').style.right = 'none'

    }
}
