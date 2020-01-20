$(".loginBtn").click(function() {
    
    loginTest();

}
)

function login(){
    $ajax({
        url:url,
        type:'POST',
        data:$('.form').serialize(),
        success:function(data){
            if(data.code==200){

                window.location.href="../index.html"
            }
            else if(data.code==400){
                alert("WORING");
            }
        }
    })
}

function loginTest(){

    var data = $('.form').serializeArray();
    var id = data[0].value;
    var password = data[1].value;

    if((id=="admin")&&(password=="password"))
    {
        window.location.href="../index.html";
    }
    else alert("WORNG");

}