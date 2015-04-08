var ObjectToXML = require('../');

exports["basic test"] = function (test) {
	var str = ObjectToXML({
		a : {
			b : {
				c : {
					"#" : { d : "asdf"}
				}
			}
			, e : {
				"@" : {
					foo : "bar"
				}
				, "#" : {
					"#" : "asdf"
				}
			}
			, f : {
				"@" : {
					prop : "value"
				}
				, "#" : "value"
			}
		}
		, g : "<![CDATA[ test & data ]]>"
		, h : "<!asdf&"
	});

	var expect = ''
		+ '<a>\n'
		+ '  <b>\n'
		+ '    <c>\n'
		+ '      <d>asdf</d>\n'
		+ '    </c>\n'
		+ '  </b>\n'
		+ '  <e foo="bar">\n'
		+ '    <#>asdf</#>\n'
		+ '  </e>\n'
		+ '  <f prop="value">value</f>\n'
		+ '</a>\n'
		+ '<g><![CDATA[ test & data ]]></g>\n'
		+ '<h>&lt;!asdf&amp;</h>\n'
		;
	
	test.equal(expect, str);
	test.done();
}
