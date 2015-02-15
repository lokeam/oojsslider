var constructSlideShow = function(element, options){
  var allSlides = document.querySelectorAll(element);
  var show = {};
  var Slideshow = {
    
        // Accepts parameters and calls all methods needed to start the slideshow
        boot: function(element, options){
          this.counter = 0;
          this.element = element;
          this.items = element.querySelector('figure');
          this.numItems = this.items.length;
          options || {};
          options.auto = options.auto || false;
          this.opts = {
            auto: (typeof options.auto === "undefined") ? false : options.auto,
            speed: (typeof options.auto.speed === "undefined") ? 1500 : options.auto.speed
          };
          this.items[0].classList.add('slideshowStart')
        },
    
        // Called when user changes the current slide
        showCurrent: function(index) {
          if(i > 0) {
            this.counter = (this.counter + 1 === this.numItems) ? 0: this.counter + 1;
          }
          else {
            this.counter = (this.counter - 1 < 0) ? this.numItems - 1 : this.counter - 1;
          }
          [].forEach.call(this.items, function(element) {
            element.classList.remove('slideshowStart');
          });
          this.items[this.counter].classList.add('slideshowStart');
        },
    
        // Creates all the controls needed to operate the slider
        addControls: function(element){
          var previousBtn = document.createElement("span");
          var nextBtn = document.createElement("span");
          var fragment = document.createDocumentFragment();
         
          previousBtn.classList.add('ssPrevBtn');
          nextBtn.classList.add('ssNextBtn');
          previousBtn.innerHTML = '&laquo;';
          nextBtn.innerHTML = '&raquo;';
          fragment.appendChild(previousBtn);
          fragment.appendChild(nextBtn);
          elment.appendChild(fragment);
        },
    
        // Allow user interactions to initiate slideshow change
        addEListeners: function(element){
          var that = this;
          element.querySelector('.ssNextBtn').addEventListener('click', function(){
            that.showCurrent(1);
          }, false);
          element.querySelector('.ssPrevBtn').addEventListener('click', function(){
            that.showCurrent(-1);
          }, false);
        }

        // TO ADD
        // // Toggles the full screen functionality
        // toggleFullScreen: function(elment){
        //   if (!document.fullscreenElement)
        // } 

      };

      [].forEach.call(allSlides, function (element) {
          console.log('in forEach call, testing element: ', element);
          show = Object.create(Slideshow);
          show.init(element, options);
      });
};
console.log('ding');

var ops = {
  auto: {
    speed:600,
    hoverPause:true
  }
}

constructSlideShow('#ssModule', ops);