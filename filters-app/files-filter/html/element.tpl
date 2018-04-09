
<script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-visible/1.2.0/jquery.visible.js"></script>
<script src="https://stackpath.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js"></script>
<div class="container">
    <div class="row margin-vert-30">
    <!-- Filter Buttons -->
    <div class="portfolio-filter-container margin-top-20">
    <ul class="portfolio-filter">
    <li class="portfolio-filter-label label label-primary">
    Filter By:
    </li>
    <li>
    <a href="#" class="portfolio-selected btn btn-default" data-filter="*">All</a>
    </li>
    <!-- sorting for each of the filters -->
    {{#filters_each}}
    <li class="filtered-box-filter" rel="filter-{{filters_index}}">
        <!-- data filter takes the filter name to sort by -->
    <a href="#" class="btn btn-default filter-link">
        <!-- this is the title of the filter -->
        {name_{{filters_index}}:text default="Headline {{filters_index}}"}
    </a>
    </li>
    {{/filters_each}}
    </ul>
    </div>
    <!-- End Filter Buttons -->
    </div>
    <!-- Content Area -->
    <div class="portfolio-group">
        {field_{{filters}}_content:content}
    </div>
</div>