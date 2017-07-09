var ObjectToXML = require('../');

function basicTest (test) {
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
					">>" : "asdf"
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
		, i : {
			"@" : {
				numeric : 42
			}
		}
		, j : {
			"@" : {
				numeric : 42
			}
			, "#" : "value"
		}
	});

	var expect = ''
		+ '<a>\n'
		+ '  <b>\n'
		+ '    <c>\n'
		+ '      <d>asdf</d>\n'
		+ '    </c>\n'
		+ '  </b>\n'
		+ '  <e foo="bar">\n'
		+ '    asdf\n'
		+ '</e>\n'
		+ '  <f prop="value">value</f>\n'
		+ '</a>\n'
		+ '<g><![CDATA[ test & data ]]></g>\n'
		+ '<h>&lt;!asdf&amp;</h>\n'
		+ '<i numeric="42" />\n'
		+ '<j numeric="42">value</j>\n';

	console.log(str);
	test.equal(expect, str);
	test.done();
}

exports["basic test"] = basicTest;

basicTest({
	equal(expect, str){
		console.log(`STR:- ${str}`);
		if(expect === str){
			console.log('equal');
			return true;
		} else {
			console.log('not equal');
			return false;
		}
	},
	done() {
		console.log('done');
	}
})