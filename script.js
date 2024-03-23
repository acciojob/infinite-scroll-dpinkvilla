//your code here!
let listItem=document.getElementById("infi-list");
let index=1;
let loadingExtraItems = false; 


function extraItems(){
    for (i = 0; i < 2; i++) {
        let list1 = document.createElement("li");
        list1.innerText = "nik" + index++;
        listItem.appendChild(list1);
    } 
	extraItems();
};
// extraItems();

function addItems() {
    for (i = 0; i < 10; i++) {
        let list = document.createElement("li");
        list.innerText = "nik" + index++;
        listItem.appendChild(list);
    }
};

addItems();




listItem.addEventListener('scroll', function() {
    if (listItem.scrollTop + listItem.clientHeight >= listItem.scrollHeight) {
        extraItems(); // Load more items when scrolled to the bottom
        // console.log("reached end");
        // addItems();
        
    }
    
});
// listItem.addEventListener('scroll', function() {
//     //1.first method
//     // extraItems();
    
    
    

//     //2nd method
//     if (listItem.scrollTop + listItem.clientHeight >= listItem.scrollHeight) {
//         extraItems(); // Load more items when scrolled to the bottom
//         // console.log("reached end");
//         // addItems(); 
//     }
//     extraItems();
    

//     //3rd method
//     if (listItem.scrollHeight - listItem.scrollTop === listItem.clientHeight) {

        
//     }
//     extraItems();
    
// });


