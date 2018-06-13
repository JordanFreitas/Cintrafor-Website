<div class="element-content portfolio-item {{name}}">
<div class="team-card--{{style}}">
        {{#image}}
    <div class="team-card__image--{{image_display}}">
        {pic:image}
    </div>
	        {{/image}}
    <div class="team-card__extras">
		{{#content}}
	        {field_{{name}}_content:content}
        {{/content}}
    </div>
</div>
 </div>