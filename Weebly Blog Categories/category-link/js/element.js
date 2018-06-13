/**
 * This is required for element rendering to be possible
 * @type {PlatformElement}
 */
(function() {
    var CategoryLink = PlatformElement.extend({
        
        initialize: function() {
        //     this.fixStyles();
            this.updateImage();
        //     this.$('.wsite-image img').bind("load", this.updateImage.bind(this));
        var category = this.settings.get('category');
        var blog = this.settings.get('blog');
        // $("#w3s").attr("href", "https://www.w3schools.com/jquery/");
    //   var linkedItem = this.$('.blogLinkCategory');
    //   linkedItem.each(
    //   function() {
    //       console.log("this" + this);
    //       // linkedItem.attr("id", "blog" + category + blog);
    //       var tempId = '#blog';
    //       this.attr("id", "newblog");
    //       // tempId.concat(category).concat(blog);
    //       // console.log("id" + tempId);        
    //       this.attr("href", '/' + blog + '/category/' + category);
    //         }
    //   );
        // var url = "https:/cintrafor.weebly.com/" + blog + "/category/" + category;
        var url2 = "/" + blog + "/category/" + category;  
     
     
        // // var name = "codemzy";
        var urlEnc = "https://" + window.location.hostname +  url2 + "?callback=?";
        $.get(urlEnc, function(response) {
          var num = (response.match(/"blog-post"/g) || []).length;

          //set number of blogs in the instance
         var s = $('.blogCategoryLink');
          s.attr("id","idswag");
         //  $('#idswag').innerHTML = num;
          
         s.innerHTML = num;
         s.removeClass("blogCategoryLink");
          console.log("2" + num);


        });


        // $.get(url, function(response) { 
        //     console.log(response);
        //     var num = (response.match(/"blog-post"/g) || []).length;
        //     // var num = response.find('.blog-post').length;
        //     console.log("1" + num);
        //     // alert("2" +response)

        // });
        // $.get(url2, function(response) { 
        //     console.log(response);
            
        //     var num = (response.match(/"blog-post"/g) || []).length;
        //     // var num = response.find('.blog-post').length;
        //     console.log("2" + num);
        //     // alert("2" +response)

        // });
      
        // var page = new Webpa
        // $.get( "https://cintrafor.weebly.com/publications/category/china", function( data ) {
        //     // $( ".result" ).html( data );
        //     console.log(data);
        //     alert( "Load was performed." );
        //   });

        // console.log("here we goooo" + blog + check);
        },

        /**
         * Lots of styles are applied by default to editable areas of
         * the editor. To make the element looks how you want, some styles
         * need to be overwritten.
         *
         * Classes that are used are:
         *      - .editable-text
         *      - .paragraph
         *      - .ui-wrapper
         *      - .wsite-image
         *      - .wsite-*
         *      - (etc...)
         */
        // fixStyles: function() {
        //     var w = this.$el.find('.team-card__image--round').width();
        //     var h = w;

        //     this.$el.find('.editable-text').each(function(index) {
        //         $(this).attr('style', '');
        //     });

        //     this.$el.find('.element').each(function(index) {
        //         $(this).attr('style', '');
        //     });

        //     this.$el.find('img').css({
        //         display: '',
        //         width: '',
        //         height: ''
        //     });
        // },

        // updates the image and transforms it depending on what needs to happen to it.
        // if it's the default placeholder, we translate it so it's center in the image area
        // if it's an uploaded image that's too small, we resize it so it'll fit.
        updateImage: function() {
            var $img = this.$('div.wsite-image img');
            var $imgContainer = this.$('.team-card__image--' + this.settings.get('image_display'));
            var isInitialImage = !!this.$('div.wsite-initial-image img').length;

            // if there's no image to be found, stop executing.
            if ($img.length === 0) {
                return;
            }

            // reset the size of the image
            $img.css({
                'transform': 'none',
                'height': 'auto',
                'width': 'auto'
            });

            // grab sizes of the container and the image
            var imageSize = {
                height: $img.height(),
                width: $img.width()
            }
            var containerSize = {
                height: $imgContainer.height(),
                width: $imgContainer.width()
            }

            // if any of these are zero, stop executing.
            // if it's zero because the initial image hasn't loaded yet,
            // then bind a recall to when it finishes.
            if (!imageSize.height || !imageSize.width || !containerSize.height || !containerSize.width) {
                return;
            }

            // determine whether he have an initial image or not
            if (isInitialImage) {
                // if we do, we need to move it to fit.
                var dx = (containerSize.width - imageSize.width) / 2;
                var dy = (containerSize.height - imageSize.height) / 2;
                $img.css({
                    'transform': 'translate(' + dx + 'px,' + dy + 'px)'
                });                
            } else {
                // otherwise, if the image is smaller than the container, scale it up to fit.
                var scale = 1;
                // depending on if which way we scale more, our origin will change 
                var origin = 'left top'
                if (imageSize.height < containerSize.height) {
                    scale = containerSize.height / imageSize.height;
                    origin = 'center top';
                }
                if (imageSize.width < containerSize.width) {
                    var oldScale = scale;
                    scale = Math.max(scale, containerSize.width / imageSize.width);
                    if (scale > oldScale) {
                        origin = 'left top';
                    }
                }
                $img.css({
                    'transform-origin': origin,
                    'transform': 'scale(' + scale + ', ' + scale + ')'
                });
                $img.css({
                    'height': $img.height() + 'px',
                    'width': $img.width() + 'px'
                });
            }
        }
    });

    return CategoryLink;
})();