/**
 * This is required for element rendering to be possible
 * @type {PlatformElement}
 */
(function() {
    var CategoryLink = PlatformElement.extend({
        initialize: function() {
            // set up our handlers
            this.setUpEvents();
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
        // sets up the image for proper usage.
        setUpEvents: function() {
           // var $imgContainer = this.$('.team-card__image--' + this.settings.get('image_display'));
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
// // linkedItem.attr("id", "blog" + category + blog);
// var tempId = '#blog';
// this.$('.blogLinkCategory').attr("id", "newblog");
// tempId.concat(category).concat(blog);
// console.log("id" + tempId);        
// this.$('#newblog').attr("href", '/' + blog + '/category/' + category);
// // linkedItem.child().attr("href", '/' + blog + '/category/' + category);

// console.log("all" + tempId + linkedItem.children());
// console.log("all" + tempId + JSON.stringify(linkedItem));
                  

            // $.get("/?url=www.cintrafor.weebly.com/publications/category/china", function(response) { 
            //     alert("1" + response) 
            // });
            // $.get("/?url=https://cintrafor.weebly.com/publications/category/china", function(response) { 
            //     alert("2" +response) 
            // });
            // $.get("https://cintrafor.weebly.com/publications/category/china", function(response) { 
            //     alert("3" + response) 
            // });
            // // var page = new Webpa
            // // $.get( "https://cintrafor.weebly.com/publications/category/china", function( data ) {
            // //     // $( ".result" ).html( data );
            // //     console.log(data);
            // //     alert( "Load was performed." );
            // //   });

            // console.log("here we goooo" + blog + check);

        },

    });

    return CategoryLink;
})();