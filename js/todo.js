const form = document.querySelector('.js-todoForm'),
    todoInput = form.querySelector('input'),
    todoList = document.querySelector('.js-todoList');

    console.log('todoInput', todoInput);
    console.log('todoList', todoList);

//function deleteTodo(event){
//    console.log(evnet.target);
//}

function showTodos(value){
    const div = document.createElement('div')
    div.className = 'task'; //클래스 이름이 task인 div를 생성!

    const label = document.createElement('label')
    label.className = 'checkbox-label'; //클래스 이름인 chebox-label인 label을 생성

    const input = document.createElement('input')
    input.type = 'checkbox'; //인풋 타입이 checkbox인 input을 생성
    
    const span = document.createElement('span')
    span.className = 'checkbox-span';
    span.innerText = value;

    //삭제하는 버튼
    const delBtn = document.createElement('a'); //Matreailz에서는 a태그로 버튼을 만듬
    delBtn.className = 'waves-effect #ffecb3 amber lighten-4 waves-heavy btn-small type=submit '; //btn-flat도 이쁨!
    delBtn.innerText = '🗑️';
    div.appendChild(delBtn); //label이나 span 밑으로 하면 같이 클릭됨 (체크박스하고)
    
    


    div.appendChild(label) //div 밑으로 label를 넣어줌!
    label.appendChild(input)//label밑으로 input을 넣어줌!
    label.appendChild(span) //label밑으로 span을 넣어줌!

    todoList.appendChild(div); //todoList(js-todoList) 클래스 밑으로 div를 넣어줌

    

    task_num = document.getElementsByTagName("input").length-1; // 태그이름(task)로 할일 갯수 가져오기! + task_num변수에 넣기
    

    

    console.log(task_num);                                      //-1 해준 이유는 맨 위에 인풋 때문에 하나 빼준거임!


}   


function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    showTodos(currentValue);
    todoInput.value = '';
}





function init(){
    form.addEventListener('submit', handleSubmit);
}

init();
