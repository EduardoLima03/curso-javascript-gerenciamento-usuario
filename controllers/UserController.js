class UserController{

    constructor(formId, tableId){
        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);

        this.onSubmit();
    }

    onSubmit(){
        //let _this = this;
        this.formEl.addEventListener("submit", event =>{
    
            event.preventDefault();
            
            //_this.getValues();
            //se usar o this normal vou referenciar a funçao dentro
            //de submit. não é o que quero. faz uma gabiarra para pode
            //pega a instacia da class, como mostra a linha 8
            //**Segunda versao */
            /** com o arrowfuction posso usa o this que vem de 
             * fora do corpo dessa função
             */
            this.addLine(this.getValues());
        });
    }

    getValues(){

        let user = {};

        [...this.formEl.elements].forEach(function(field, index){

            if(field.name == "gender"){
                user[field.name] = field.value;
        
            }else{
                user[field.name] = field.value;
            }
        
            
        
        });
    
        return new User(user.name, user.gender, 
            user.birth, user.country, user.email, 
            user.password, user.photo, user.admin);
    }//fechando getValues

    addLine(dataUser){

        this.tableEl.innerHTML = `
            <tr>
                <td>
                    <img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm">
                </td>
                <td>${dataUser.name}</td>
                <td>${dataUser.email}</td>
                <td>${dataUser.admin}</td>
                <td>${dataUser.birth}</td>
                <td>
                    <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                    <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                </td>
            </tr>
        `;
    
    }// fechando o metodo addLine
}
// Fechando a Class