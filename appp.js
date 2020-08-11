var name = "まるですか？"
confirm(name);
console.log(name);
if(true){
  alert("次の質問に答えてください。");
}else{
  alert("おめでとうございます。");
}

function getTrainType(){
  var station = Stationnamber();
  var type = Stationtype(station);
  if(station<=3 && station>=1){
    alert("あなたの最寄駅は"+type+"です。")
  }else{
    getTrainType();
  }
}
function Stationnamber(){
  var number =prompt("1,西大寺駅　2,新大宮駅　3,学園前駅\n最寄駅を半角の数字でお答えください。");
  number = Number(number);
  return number;
}
function Stationtype(station){
  var type;
  switch (station) {
    case 1:
      var type = "西大寺駅";
      break;
      case 2:
        var type = "新大宮駅";
        break;
        case 3:
          var type = "学園前駅";
          break;
    default:
    alert("数字って知ってますか？")

  }
  return type;
}
getTrainType();
