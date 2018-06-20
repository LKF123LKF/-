//点击+
function add(obtn) {
       // alert(obj.parentNode.parentNode.querySelector(".num"));
       var onum=parseInt(obtn.parentNode.parentNode.querySelector(".num").innerHTML);

    obtn.parentNode.parentNode.querySelector(".num").innerHTML=onum+1;
    var oprice=parseFloat(obtn.parentNode.parentNode.parentNode.querySelector(".unit").innerHTML);
    obtn.parentNode.parentNode.parentNode.querySelector(".subtal").innerHTML = oprice*(onum+1);
    // var anum = parseInt(document.querySelector('.num').innerHTML);
    var otital=parseInt(document.querySelector(".goods_num").innerHTML);
    // alert(otital);
    document.querySelector(".goods_num").innerHTML=otital+1;
    var opricetital=parseFloat(document.querySelector(".pricetal").innerHTML);
    var osubtal=parseFloat(obtn.parentNode.parentNode.parentNode.querySelector(".subtal").innerHTML);
    // alert(osubtal);
    document.querySelector(".pricetal").innerHTML=opricetital+oprice;
   }
//   点击-
function jian(obtn) {
    var onum=parseInt(obtn.parentNode.parentNode.querySelector(".num").innerHTML);
    var oprice=parseFloat(obtn.parentNode.parentNode.parentNode.querySelector(".unit").innerHTML);
    if (onum>0) {
        obtn.parentNode.parentNode.querySelector(".num").innerHTML = onum - 1;
        obtn.parentNode.parentNode.parentNode.querySelector(".subtal").innerHTML = (onum - 1)*oprice;

        var otital=parseInt(document.querySelector(".goods_num").innerHTML);
        // alert(otital);
        document.querySelector(".goods_num").innerHTML=otital-1;
        var opricetital=parseFloat(document.querySelector(".pricetal").innerHTML);
        var osubtal=parseFloat(obtn.parentNode.parentNode.parentNode.querySelector(".subtal").innerHTML);
        // alert(osubtal);
        document.querySelector(".pricetal").innerHTML=opricetital-oprice;
    }
}
点击删除
function del(delt) {
    var odel=document.querySelector(".del");

    odel.parentNode.parentNode.parentNode.removeChild(odel.parentNode.parentNode);
}
