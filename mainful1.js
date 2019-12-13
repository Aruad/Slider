let root = document.getElementById('root');
let images = [
'./images/8.jpg',
'./images/9.jpg',
'./images/10.jpg',
'./images/11.jpg',
'./images/12.jpg',
'./images/13.jpg',
'./images/14.jpg',
'./images/15.jpg'
]
/**
* @desc Create Slider
* @param {Object} root - html el from document where we want to made our slider
* @param {Array} images - array with url of imgs
*/

class Slider {
    constructor(root, images) {
        this.root = root;
        this.SliderWrapper = document.createElement('div');
        this.urlImages = images;
        this.rightButton = document.createElement('button');
        this.leftButton = document.createElement('button');
        this.indexImage = 0;
    }

    renderImages() {
        this.urlImages.forEach(url => {
            let img = document.createElement('img');
            img.setAttribute('src', url);
            img.className = 'sliderImg';
            this.SliderWrapper.append(img);
        });
        
    }
    renderLeftBtn() {
        //this.leftButton.innerHTML ='назад';
        this.leftButton.classList.add('sliderControlBtnLeft');
        let images = document.querySelectorAll('img');
        this.leftButton.onclick = () => {
            images[this.indexImage].classList.remove('showedImg');
            if (this.indexImage <=0) {
                this.indexImage = images.length - 1;
            }
            else this.indexImage--;
            images[this.indexImage].classList.add('showedImg');
            
        }
        this.SliderWrapper.append(this.leftButton);
    }

    renderRightBtn() {
        //this.rightButton.innerHTML ='вперед';
        this.rightButton.classList.add('sliderControlBtnRight');
        let images = document.querySelectorAll('img');
        this.rightButton.onclick = () => {
            images[this.indexImage].classList.remove('showedImg');
            if (this.indexImage >= images.length -1) {
                this.indexImage = 0;
            }
            else this.indexImage++;
            images[this.indexImage].classList.add('showedImg');
            
        }
        this.SliderWrapper.append(this.rightButton);
       
    }
/**
* @desc render Slider - append slider to root el     
*/
    
    render() {
        this.SliderWrapper.className ='sliderWrapper';
        this.root.append(this.SliderWrapper);
        this.renderImages();
        this.renderLeftBtn();
        this.renderRightBtn(); 
        let images = document.querySelectorAll('img');
        images[0].classList.add('showedImg');
    }
}
let slider1 = new Slider(root, images);
slider1.render();
console.log(slider1);
// let slider2 = new Slider(root, images);
// slider2.render();