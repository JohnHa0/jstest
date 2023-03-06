var cityArr = [];
	cityArr[0] = ["南京市"];
	cityArr[1] = ["无锡市"];
	cityArr[2] = ["徐州市"];
	cityArr[3] = ["常州市"];
	cityArr[4] = ["苏州市"];
	cityArr[5] = ["南通市"];
	cityArr[6] = ["连云港市"];
	cityArr[7] = ["淮安市"];
	cityArr[8] = ["盐城市"];
	cityArr[9] = ["扬州市"];
	cityArr[10] = ["镇江市"];
	cityArr[11] = ["泰州市"];
	cityArr[12] = ["宿迁市"];
var areaArr = [];
	areaArr[0] = ["玄武区","秦淮区","鼓楼区","建邺区","栖霞区","雨花台区","江宁区","浦口区","六合区","溧水区","高淳区"];
	areaArr[1] = ["滨湖区","梁溪区","新吴区","锡山区","惠山区","江阴市","宜兴市"];
	areaArr[2] = ["云龙区","鼓楼区","贾汪区","泉山区","铜山区","丰县","沛县","睢宁县","邳州市","新沂市"];
	areaArr[3] = ["天宁区","钟楼区","新北区","武进区","金坛区","溧阳市"];
	areaArr[4] = ["姑苏区","虎丘区","吴中区","相城区","吴江区","昆山市","常熟市","张家港市","太仓市"];
	areaArr[5] = ["崇川区","港闸区","通州区","如东县","如皋市","海门市","启东市","海安市"];
	areaArr[6] = ["连云区","海州区","赣榆区","东海县","灌云县","灌南县"];
	areaArr[7] = ["清江浦区","淮安区","淮阴区","洪泽区","涟水县","盱眙县","金湖县"];
	areaArr[8] = ["亭湖区","盐都区","大丰区","响水县","滨海县","阜宁县","射阳县","建湖县","东台市"];
	areaArr[9] = ["广陵区","邗江区","江都区","宝应县","仪征市","高邮市"];
	areaArr[10] = ["京口区","润州区","丹徒区","丹阳市","扬中市","句容市"];
	areaArr[11] = ["海陵区","高港区","姜堰区","兴化市","靖江市","泰兴市"];
	areaArr[12] = ["宿城区","宿豫区","沭阳县","泗阳县","泗洪县"];
function getCity(){
	var cityobj=document.getElementById("city");
	var indexs = $("#city option:selected").val();
	$("#area").empty();
	for(var i=0;i<areaArr[indexs].length;i++){
	   $("#area").append("<option value='"+areaArr[indexs][i]+"'>"+areaArr[indexs][i]+"</option>");
	}
};

$(function(){
	
	var aa=	setInterval(function(){
			var d = new Date();
			var hour=d.getHours();
			var m=d.getMinutes();
			//alert(hour)
			if(hour==15){
				//clearInterval(aa);
				//rain();
				//a()
			}
				

		},100)



})