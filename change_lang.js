function getFileName(){
	var url = this.location.href
	var pos = url.lastIndexOf("/");
	if(pos == -1){
		pos = url.lastIndexOf("\\")
	}
	var filename = url.substr(pos +1)
	return filename;
}
function change_lang(lang){
	var file = getFileName();
	if(file.length == 0) file = "index.html";
	file = "../"+lang+"/"+file;
	location.href=file;
}
