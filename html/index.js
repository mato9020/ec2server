
const charLimit = 7;
var counter=0;
var showRacks = function(rack){
    var words = rack["words"];
    var currElement = $("#bingos");
    if($("#bingos").length>8){
        
    }
    ($("#bingos")).append(`<u2 id =${"list"+counter}></u2>`);
    currElement = $(`#${"list"+counter++}`);
    rack["words"].filter(Boolean).map(racks=>
        {
            if(currElement.children().length>8){
                ($("#bingos")).append(`<u2 id =${"list"+counter}></u2>`);
                currElement = $(`#${"list"+counter++}`);
            }
            var placeString = '_';   
            placeString = placeString.repeat(racks.length);
            currElement.append(`<li><span class = "answer" id=${racks}>${placeString}</span></li>`);
        });
    document.getElementById("Rack").innerHTML = rack["rack"];
};
var genericGetRequest = function(){
   
};

$("#WordEntered").on('click',function() {
    var enteredWord = document.getElementById("GuessBox").value.toUpperCase();
    var x = document.getElementById(enteredWord);
    if(x!=null){
        document.getElementById(enteredWord).innerHTML = enteredWord;
    }
});

$("#generateRack").on('click', function(){
    const node= $("#bingos");
    while(node.firstChild){
        node.removeChild(node.firstChild);
    }
    $.ajax({
        url:"api.php",
        method:"GET",
        success:data=>{
            console.log("success");
            console.log(data);
            showRacks(data);

        }
    });
});
