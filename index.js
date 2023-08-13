// TODO APP
// 1-) Start
// 2-) Add butonuna ulaş değişken içine at
// 3-) inputa ulaş bi değişken içine at
// 4-) appendChild kullanıp içine li elemanı eklemek için ul elemanına ulaş ve bi değişken içine ata.
// 5-) Add butonuna click eventi ekle
// 6-) Add butonuna bastığında çağrılacak fonksiyonu yaz => addTask
// 7-) addTask fonksiyonunda inputun value değeri üzerinden boş mu kontrolünü yap
// 8-) else durumunda ul'ye li ekleyecek fonksiyonu ekleyeceğiz => renderTodoItem ve buna input'un value değerini parametre olarak geçerceğiz => todoText
// 9-) Bu fonksiyon todoText tiye bi parametre alacak.
// 10-) li elementi create et ve bunu todoItemElement adındaki değişkene ata.
// 11-) Bu elemente ulaş ve classlistine todo_item ekle
// 12-) completeButton oluştur createElement yardımıyla
// 13-) bu elemente gerekli classı ekle classList yardımıyla
// 14-) butonun gerekli innerTextini ekle
// 15-) ve li elementine bu buttonu append et
// 16-) aynısını delete button için de yap
// 17-) textElement diye bi değişken oluştur ve p etiketi create et
// 18-) Bu elementin innerTextini parametreden gelen değeri aktar
// 19-) ve bu textElementi ul içine append et
// 20-) Ve bu elementi ul'ye append et.


// ADDING TASK TO THE LIST
let addBtn = document.getElementById("add_btn")
let todoInput = document.getElementById("todo_input")
let todoList = document.getElementById("todo_list")

const renderTodoItem = (todoText) => {
    let todoElement = document.createElement("li")
    todoElement.classList.add("todoItem")

    let completeButton = document.createElement("button")
    completeButton.classList.add("complete_button")
    completeButton.innerText = "Complete"
    todoElement.appendChild(completeButton)

    let deleteButton = document.createElement("button")
    deleteButton.classList.add("delete_button")
    deleteButton.innerText = "Delete"
    todoElement.appendChild(deleteButton)

    let textElement = document.createElement("p")
    textElement.innerText= todoText
    todoElement.appendChild(textElement)

    todoList.appendChild(todoElement)
}

const addTask = () => {
    if (todoInput.value === "") {
        alert("You can not pass an empty input!")
    } else {
        renderTodoItem(todoInput.value)
    }
}

addBtn.addEventListener("click", addTask)
