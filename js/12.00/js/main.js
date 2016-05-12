var sinif={
	telebeler:["Elsad","Qulu","Feride","Kamran"],
	muellimler:["Yolcu","Eldar","Samir"],
	mentorlar:[
		{
			seher:["Miti","Aysel","Heyder"],
			gunorta:["Orxan","Ferid"]
		},
		{
			axsam:["Kerim","Rehim"]
		}
	],
	'/*-':"Bu bir axmaq xususiyyetdir",
	"1":1,
};

document.write(sinif.telebeler[2]);
document.write(sinif.mentorlar[1].axsam[1]);
document.write(sinif["1"]);
document.write("<b>"+sinif.muellimler+"<b>");
// document.write("<i>""</i>");
