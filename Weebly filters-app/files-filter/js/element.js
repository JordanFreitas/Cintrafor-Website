/**
 * This is required for element rendering to be possible
 * @type {PlatformElement}
 */
(function() {
    var FilteredBox = PlatformElement.extend({
        initialize: function() {
            var view = this;
            //grabs all settings from user input, splits by comma
            var temp = this.settings.get("name");
            var array = temp.split(',');
            var filterNum = 0;
            
            //Sets filters from settings
            $('.filtered-box-filter').each(function (){
                //If user has not entered enough variables
                if(array[filterNum] == null || array[filterNum] == "")
                {
                    array[filterNum] = "Add Filter Name";
                }
                //trim removes possible user error
                $('.filter-link')[filterNum].setAttribute('data-filter', "." + array[filterNum].trim());
                $('.filter-link')[filterNum].innerHTML = array[filterNum].trim();
                filterNum ++;
            });
            $('.portfolio-group').isotope({
                itemSelector: ('.portfolio-item'),
                masonry: {columnWidth: $('.isotope-item:first').width(), gutterWidth: -20, isFitWidth: true},
                filter: '*',
            });
        }
    });
    //Keeps track of the current filter highlighted
    var lastClickFilter = null;
    $('.portfolio-filter a').click(function() {
    if (lastClickFilter === null) {
        $('.portfolio-filter a').removeClass('portfolio-selected');
    }
    else {
        $(lastClickFilter).removeClass('portfolio-selected');
    }
    lastClickFilter = this;
    //highlights the current selected "clicked" tab
    $(this).addClass('portfolio-selected');
    });

    $('.portfolio-filter-container a').click(function() {
        $filters = $('.portfolio-group');
        if($filters){
            //isotope filters, returning true to show and false to hide
            $filters.isotope({
            //grabs the current clicked tab, displaying only cooresponding "Filter Items"
                filter: $(this).attr('data-filter')
            });
            return false;
            }
        });
    return FilteredBox;
})();