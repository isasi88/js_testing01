chai.should();
context = describe;

function filter (list) {
	return list;
};


/* TO DO LIST - Do it before testing 
*Test:
*['test@test.com'] -> ['test@test.com']
*Test:
*['test@test.com', 'test@test.com'] -> ['test@test.com']
*Test:
*[] -> []
*['TEST@TEST.COM', 'test@test.com'] -> ['test@test.com']
*Test:
*['test(AT)test.com'] -> ['test@test.com']
*Test:
*['test@test(DOT)com'] -> ['test@test.com']
*/


describe ("the email list filters", function() {

	it("returns the same array with no duplicates", function() {
		expect(['test@test.com']).toEqual(filter(['test@test.com']));
	});

	it("always returns the same thing even if parameter changes", function() {
		expect(['test2@test.com']).toEqual(filter(['test2@test.com']));
	});

});
