var createCarousel = function (element) {
  var allSlides = document.querySelectorAll(element);
  var carouselInstance = {};
  var Slideshow = {
            boot: function (element) {
                this.counter = 0;
                this.element = element;
                this.slides = element.querySelectorAll('div.slides');
                this.numItems = this.slides.length;
                this.speed = 2000;
                this.slides[0].classList.add('currentSlide');
                this.addButtons(element);
                this.addEventListeners(element);
                this.cycle(this.element, this.speed);
            },
            showCurrent: function (index) {
                if (index > 0) {
                    this.counter = (this.counter + 1 === this.numItems) ? 0 : this.counter + 1;
                } else {
                    this.counter = (this.counter - 1 < 0) ? this.numItems - 1 : this.counter - 1;
                }
                [].forEach.call(this.slides, function (element) {
                    element.classList.remove('currentSlide');
                });
                this.slides[this.counter].classList.add('currentSlide');
            },
            addButtons: function (element) {
                var prevBtn = document.createElement("span");
                var nextBtn = document.createElement("span");
                var frag = document.createDocumentFragment();
                prevBtn.classList.add('carouselPrevious');
                nextBtn.classList.add('carouselNext');
                prevBtn.innerHTML = '&laquo;';
                nextBtn.innerHTML = '&raquo;';
                frag.appendChild(prevBtn);
                frag.appendChild(nextBtn);
                element.appendChild(frag);
            },
            addEventListeners: function (element) {
                var that = this;
                element.querySelector('.carouselNext').addEventListener('click', function () {
                    that.showCurrent(1);
                }, false);
            
                element.querySelector('.carouselPrevious').addEventListener('click', function () {
                    that.showCurrent(-1);
                }, false);
            },
            cycle: function (element, slideSpeed) {
                var that = this,
                    interval = window.setInterval(function () {
                        that.showCurrent(1);
                    }, slideSpeed);
            },
        };
        
    // make instances of Slideshow as needed
    [].forEach.call(allSlides, function (element) {
        carouselInstance = Object.create(Slideshow);
        carouselInstance.boot(element);
    });
};

createCarousel('#ssModule');