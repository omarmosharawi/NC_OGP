jQuery(function($){
	var admin_table = ".main-content";
	$(admin_table).find('td').contents().unwrap();
	$(admin_table).find('tr').contents().unwrap();
	$(admin_table).find('tbody').contents().unwrap();
	$(admin_table).find('table').contents().unwrap();
});