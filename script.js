class SLIDER {
    constructor(options){
        this.slider = document.querySelector(options.slider);
        this.sliderLine = this.slider.querySelector('.slider__line');
        this.slides = this.sliderLine.children
        this.next   = this.slider.querySelector('.slider__next')
        this.prev   = this.slider.querySelector('.slider__prev')
        
        this.dir = options.direction.toUpperCase() == 'X' ? 'X' : 'Y'
        this.timeMove = options.time  != undefined ? options.time : 1000 
        this.width = this.slider.clientWidth
        this.height = this.slider.clientHeight
        this.moveSize = 'X' === this.dir ? this.width : this.height
        
        this.activeSlide = 0
        
        this.sliderLine.style = `position: relative; 
                                 height: ${this.height}px;
                                 overflow: hidden;                             
                                `           
        for (let i = 0; i < this.slides.length; i++) {
            const sl = this.slides[i]
            sl.style = `position: absolute;
                        width: ${this.width}px;
                        height: ${this.height}px;
                        `
            if (i != this.activeSlide) {
                sl.style.transform = `translate${this.dir}(${this.moveSize}px)`
            }
            if (i === this.slides.length - 1) {
                sl.style.transform = `translate${this.dir}(${-this.moveSize}px)`
            }
            this.next.addEventListener('click' , () => this.move(this.next))
            this.prev.addEventListener('click' , () => this.move(this.prev))
        }
    }
}

const slider = new SLIDER({
    slider: '.slider',
    direction: 'X',
    time: 1000,
    autoplay: true,
    interval: 2000
})