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
                    array[filterNum] = "temp";
                }
                $('.filter-link')[filterNum].setAttribute('data-filter', "." + array[filterNum]);
                $('.filter-link')[filterNum].innerHTML = array[filterNum];
                filterNum ++;
            });
        }
    });
    return FilteredBox;
})();