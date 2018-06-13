<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-visible/1.2.0/jquery.visible.js"></script>
<script src="https://stackpath.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js"></script>
<div class="element-content blogCategoryLink" onclick="javascript:window.location.href='/{{blog}}/category/{{category}}'">
        {{#button}}
            {button_text:button align="center"}
        {{/button}}
		{{#content}}
	        {field_{{name}}_content:content}
        {{/content}}
 </div>

