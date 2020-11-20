const listPersons = [
  { name: "Hoàng Duy Khánh", age: 18, gender: "nam" },
  { name: "Lê Văn Nam", age: 60, gender: "nam" },
  { name: "Trần Chiến Công", age: 8, gender: "nam" },
  { name: "Bùi Việt Hoàng", age: 22, gender: "nam" },
  { name: "Phạm Minh Chiến", age: 16, gender: "nam" },
  { name: "Ngô Thị Thanh Tình", age: 45, gender: "nữ" },
  { name: "Nguyễn Mai Hường", age: 8, gender: "nữ" },
  { name: "Hà Văn Phòng", age: 30, gender: "nam" },
  { name: "Nguyễn Mai Phương", age: 14, gender: "nữ" },
  { name: "Lê Văn Hà", age: 55, gender: "nam" },
]

function countPersonByGender(listPersons, gender){
    let count = 0;
    for(let i in listPersons){
        if(listPersons[i].gender==gender)
            count++;
    }
    return count;
}

function statisticsByAge(listPersons){
    let child=0;
    let adults=0;
    let order=0;
    for(let i in listPersons){
        if(listPersons[i].age<18) child++;
        else if(listPersons[i].age>=18 && listPersons[i].age<30) adults++;
        else order++;
    }
    const statistic = {
        treCon: child,
        thanhNien: adults,
        nguoiGia: order
    };
    for(let i in statistic){
        console.log(i +" : s"+ statistic[i])
    }

}
function main(){
    console.log('Số người giới tính nam: ' + countPersonByGender(listPersons, 'nam'));
    console.log('Số người giới tính nam: ' + countPersonByGender(listPersons, 'nữ'));
    statisticsByAge(listPersons)
}
main();