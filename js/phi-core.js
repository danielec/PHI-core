var PHI = {};

$extend(PHI, {
	id: function(prefix, length){
		prefix = prefix ? "phi-" + prefix + "-" : "phi-";
		if(!length) length = 10;
		
		var multy = Math.pow(10, length + 1);
		
		do{
			var ret = prefix + (Math.random() * multy).toInt(); 
		}while(PHI._generatedList.contains(ret));
		
		PHI._generatedList.push(ret);
		
		return ret;
	},
	_generatedList : []
});

PHI.CSS = {};

$extend(PHI.CSS, {
	getStyleSheet : function(){
		if(!document.styleSheets.length)
			if(Browser.Engine.Trident)
				document.createStyleSheet();
			else
				new Element('style', {'type' : 'text/css'}).inject($$('head').getLast());
		return document.styleSheets[0];
	},
	setRule : function(selector, value, styleSheet){
		if(!styleSheet) styleSheet = PHI.CSS.getStyleSheet();
		var last = styleSheet.cssRules ? styleSheet.cssRules.length : styleSheet.rules.length;
		switch($type(value)){
			case 'string':
				value = value + ";";
			break;
			case 'array':
				value = value.join(";");
			break;
		}
		if(styleSheet.insertRule)
			styleSheet.insertRule(selector + "{" + value + "}", last);
		else
			styleSheet.addRule(selector, value);
	},
	setRules : function(rules, styleSheet){
		$H(rules).each(function(value, selector){
			PHI.CSS.setRule(selector, value, styleSheet);
		});
	}
});
