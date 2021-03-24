var app = new Vue({
  el: '#root',
  data: {
    imgArray: [
      'https://www.thebalancecareers.com/thmb/PsG0_bvGnJ-npJiq8RYiEO6WTT4=/3435x2576/smart/filters:no_upscale()/high-angle-view-of-lower-east-side-manhattan-downtown--new-york-city--usa-640006562-5ae52a273de423003776ae2e.jpg',
      'https://pix10.agoda.net/hotelImages/3375/-1/f73547b49eadee36c6346f52a5b4f4fe.jpg?s=1024x768',
      'https://lh3.googleusercontent.com/proxy/MqFY1oRbwNEYlEx0JBVSzdK3DI4Qpfuemcm2DUT5HfT9vBQk8XG0ZwLvJrWsycFz2cZLpkkmu5DPnWIDUqgD5smH2x-Ba4hJXFa1xWl6IUxd',
      'https://images.theconversation.com/files/341416/original/file-20200612-38729-440wg3.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip',
    ],
    index: 0,
    timer: 0,
  },
  mounted: function () {
    this.startRotation();
  },
  methods:{
    next: function() {
      if (this.index < this.imgArray.length - 1) {
        this.index ++;
      } else {
        this.index = 0;
      }
    },
    prev: function() {
      if (this.index > 0) {
        this.index --;
      } else {
        this.index = this.imgArray.length - 1;
      }
    },
    selected: function(index) {
      this.index = index
    },
    startRotation: function() {
      this.timer = setInterval(this.next, 3000);
    },
    stopRotation: function() {
      clearTimeout(this.timer);
      this.timer = 0;
    },
  }
});
