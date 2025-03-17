function toggleMenu(){
    var x = document.getElementById("hidden-items")
    var y = document.getElementsByName("body")

    if (x.style.display === "block") {
        x.style.display = "none"
        y.style.overflowY = "visible"
    } else {
        x.style.display = "block"
        y.style.overflowY = "hidden"

    }
}

var idToSwitch = 1

var timer = setInterval(autoSwitchCarousel, 4000)

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
            console.log(document.getElementById(cardId))
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