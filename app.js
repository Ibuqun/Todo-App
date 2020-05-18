//LIST CONTROLLER

const listController = (function (){



}) ();

//UI CONTROLLER
const UIController = (function (){
    
    return {
        getInput : function () {
            return document.querySelector(".add__description").value;
        } , 


        addListItem: function (input) {
            let html;
            html = "<li></li>" ;
            newHtml = html.replace('', input);

            document.querySelector('.myUL').insertAdjacentHTML('beforeend', newHtml);
        }
             
        

     

}
}) ();

//GLOBAL APP CONTROLLER
const globe = (listController, UIController) => {
 
    document.querySelector(".addBtn").addEventListener('click', function () {

    let read = UIController.getInput();
    UIController.addListItem(read);

    });
    
    


};

globe();