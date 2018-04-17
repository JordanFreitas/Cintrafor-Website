<div class="element-content portfolio-item {{name}}">
<div class="team-card--{{style}}">
        {{#image}}
    <div class="team-card__image--{{image_display}}">
        {pic:image}
    </div>
	        {{/image}}
    <div class="team-card__content">
        <div class="name">{name:text default="Awesome Name"}</div>
        {{#title}}
            <div class="title">{title:text default="Title"}</div>
        {{/title}}
    </div>
    <div class="team-card__extras">
        {{#about}}
            <div class="text">{extras_text:text default="Donec ullamcorper nulla non metus auctor fringilla."}</div>
        {{/about}}
        {{#button}}
            {button_text:button default="Learn More" align="center"}
        {{/button}}
		{{#content}}
	        {field_{{name}}_content:content}
        {{/content}}
    </div>
</div>
 </div>