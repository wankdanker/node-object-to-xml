var o2x = require('./');
var test = require("tape");

test('original usage', function (t) {
	var expected = '<?xml version="1.0" encoding="utf-8"?><BandResponse xmlns:xsni="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><Band><BandEventList><BandEvent><EventID>1</EventID></BandEvent><BandEvent><EventID>2</EventID></BandEvent><BandEvent><EventID>3</EventID></BandEvent><BandEvent><EventID>4</EventID></BandEvent></BandEventList></Band></BandResponse>';

	var o = { 
		"?xml version=\"1.0\" encoding=\"utf-8\"?": null,
		"BandResponse": {
			"@": {
				"xmlns:xsni": "http://www.w3.org/2001/XMLSchema-instance",
				"xmlns:xsd": "http://www.w3.org/2001/XMLSchema"
			},
			"#": {
				"Band": {
					"BandEventList": {
						"BandEvent" : [
							{ "EventID" : 1 },
							{ "EventID" : 2 },
							{ "EventID" : 3 },
							{ "EventID" : 4}
						]
					}
				}
			}
		}
	};

	var actual = o2x(o).replace(/\n\s*/g, '');

	t.equal(actual, expected);
	t.end();
});

test('better usage without #', function (t) {
	var expected = '<?xml version="1.0" encoding="utf-8"?><BandResponse xmlns:xsni="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><Band><BandEventList><BandEvent><EventID>1</EventID></BandEvent><BandEvent><EventID>2</EventID></BandEvent><BandEvent><EventID>3</EventID></BandEvent><BandEvent><EventID>4</EventID></BandEvent></BandEventList></Band></BandResponse>';

	var o = { 
		"?xml version=\"1.0\" encoding=\"utf-8\"?": null,
		"BandResponse": {
			"@": {
				"xmlns:xsni": "http://www.w3.org/2001/XMLSchema-instance",
				"xmlns:xsd": "http://www.w3.org/2001/XMLSchema"
			},
			"Band": {
				"BandEventList": {
					"BandEvent" : [
						{ "EventID" : 1 },
						{ "EventID" : 2 },
						{ "EventID" : 3 },
						{ "EventID" : 4}
					]
				}
			}
		}
	};

	var actual = o2x(o).replace(/\n\s*/g, '');

	t.equal(actual, expected);
	t.end();
});

test('old nodeunit test basic usage', function (t) {
	var expected = ''
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
		+ '<i numeric="42" />\n'
		+ '<j numeric="42">value</j>\n'
		;

	var actual = o2x({
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

	t.equal(actual, expected)
	t.end();
});