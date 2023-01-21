const form = document.querySelector('#form-habits') // variavel recebe nosso formulario
const nlwSetup = new NLWSetup(form) // criamos um objeto com essa biblioteca nlwSetup, e ela precisava de um form pra funcionar
const button = document.querySelector("header button")

button.addEventListener('click', add) // registrou em memoria o evento de click da função add
form.addEventListener('change', save) // registrou em memoria uma alteração 'change'

// função add para adicionar os dias
function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists) {
        alert("dia já incluso ❌")
        return
    }
    
    alert('Adicionado com sucesso ✔')
    nlwSetup.addDay(today)
    
}

// save para pegar os dados e guardar no localStorage sempre que houver modificaçoes no form
function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}


// data 
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} // pegou do localStorage as infos que estavam em texto e transformou em objeto
nlwSetup.setData(data) // adiciona dentro desse objeto do nlwSetup através dessa funçao
nlwSetup.load() // manda carregar o codigo 