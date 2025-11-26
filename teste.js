const equipamentos = [
    {id: 1, nome: "Notebook", valor: 1200.00, categoria: 'Notebook', status: 1}, 
    {id: 2, nome: "Monitor 27''", valor: 750.50, categoria: 'Periférico', status: 1}, 
    {id: 3, nome: "Teclado Mecânico", valor: 350.00, categoria: 'Periférico', status: 1},
    {id: 4, nome: "Mouse Óptico", valor: 89.90, categoria: 'Periférico', status: 0}, 
    {id: 5, nome: "Projetor HD", valor: 1500.00, categoria: 'Audiovisual', status: 1}, 
    {id: 6, nome: "Servidor Rack", valor: 8500.00, categoria: 'Rede', status: 0}, 
    {id: 7, nome: "Impressora Laser", valor: 620.00, categoria: 'Periférico', status: 1}, 
    {id: 8, nome: "Tablet 10''", valor: 999.00, categoria: 'Dispositivo Móvel', status: 0}, 
    {id: 9, nome: "Webcam Full HD", valor: 150.00, categoria: 'Audiovisual', status: 1},
    {id: 10, nome: "Switch Gigabit", valor: 450.00, categoria: 'Rede', status: 1} 
];


const btnDisponivel = document.getElementById('disponivel')
const listaEquipamentos = document.getElementById('lista_equipamentos')

btnDisponivel.addEventListener('click', ()=>{
    fnFiltrar('disponivel')
})

function fnFiltrar(status){
    if(!status) return

    if(status === 'disponivel'){
        const equipamentosDisponiveis = equipamentos.filter(equipamento => equipamento.status === 0);

        console.dir(equipamentosDisponiveis)

        equipamentosDisponiveis.forEach(item =>{
            const li = document.createElement('li')
            li.innerHTML = item
            listaEquipamentos.appendChild(li)
        })
    }
}