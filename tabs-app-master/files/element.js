/**
 * This is required for element rendering to be possible
 * @type {PlatformElement}
 */
(function() {
    var FilteredBox = PlatformElement.extend({
        events: {
            // 'click .tabbed-box-tab': 'clickFilter',
            'click .portfolio-filter-container a': 'aConFilter',
            'click .portfolio-filter a': 'aFilter'
            // in case they type and that causes an overflow, we should determine scrollability here
            // 'keyup .tabbed-box-tab .paragraph': 'determineScrollability',
            // 'mousedown .scrollArrow-left': 'scrollLeft',
            // 'mousedown .scrollArrow-right': 'scrollRight',
            // 'touchstart .scrollArrow-left': 'scrollLeft',
            // 'touchstart .scrollArrow-right': 'scrollRight'
        },

        initialize: function() {
            var view = this;
            var lastClickFilter = null;
            this.cont = this.$('.portfolio-group');            

            // optimization
            // this.scrollArrowLeft = this.$('> .tabbed-box > .tabbed-box-bar > .scrollArrow-left');
            // this.scrollArrowRight = this.$('> .tabbed-box > .tabbed-box-bar > .scrollArrow-right');
            this.scrollFiltersBar = this.$('> .portfolio-filter-container > .portfolio-filter');

            // resize handler and mouseup handler
            // since we want to be able to handle mouseup wherever the user releases (not just over the element)
            // we set it here as a property of the window.
            $(window).resize(function() {
                this.determineScrollability();
            }.bind(this)).on('mouseup touchend', function() {
                this.stopScrolling();
            }.bind(this));

            // since scroll events don't propagate up, we have to bind it here as opposed to in the events object
            this.scrollFiltersBar.scroll(function() {
                this.determineHandlers();
            }.bind(this));

            // determine whether or not we should show the scroll handlers
            this.determineScrollability();

            // load the first tab.
            $(document).ready(function() {
                this.scrollFiltersBar.children().first().click();
            }.bind(this));

            this.cont.isotope({
                itemSelector: '.portfolio-group .portfolio-item',
                masonry: {columnWidth: $('.isotope-item:first').width(), gutterWidth: -20, isFitWidth: true},
                filter: '*',
            });
        },


        /*
            Handle click event on a tab.
            Uses 'rel' attribute of each tab as an index to access
            the class of the corresponding content area.
        */
        clickTab: function(e) {
            var active = $(e.currentTarget); // Clicked tab
            var content_wrapper = this.$('> .tabbed-box > .tabbed-box-content-group'); // wrapper for all content divs

            this.stopScrolling();
            this.determineClickScroll(active);

            // Set new active tab
            active.siblings().removeClass('active');
            active.addClass('active');

            // mark the new active tab
            this.settings.set('activeTabIndexInternal', this.scrollTabsBar.children().index(active));
            this.settings.save();

            // trigger children first
            content_wrapper.find('.tabbed-box-tab.active').click();

            // Set new active content
            content_wrapper.children().hide();
            content_wrapper.find('> .' + active.attr('rel')).fadeIn();
            this.determineHandlers();

            // fire resize event to handle any deterministic elements now appearing
            $(window).resize();

            // Stop propagation in case this is a nested tab app
            e.stopPropagation();
        },
        aConFilter: function(e){
            this.cont.isotope({
                filter: this.getAttribute('data-filter')
            });
    
            return false;
        },
        // aFilter: function(e){
        //      //first clicked we don't know which element is selected last time
        // if (lastClickFilter === null) {
        //     $('.portfolio-filter a').removeClass('portfolio-selected');
        // }
        // else {
        //     $(lastClickFilter).removeClass('portfolio-selected');
        // }

        // lastClickFilter = this;
        // $(this).addClass('portfolio-selected');
        // }
    });

    return FilteredBox;
})()