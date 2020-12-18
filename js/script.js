function initDropMenu() {
	const botaoMenu = document.querySelector('[data-menu="button"]')
	const menuList = document.querySelector('[data-menu="list"]')
    function abrirMenu() {
        menuList.classList.toggle('active')
        botaoMenu.classList.toggle('active')
    }   
    botaoMenu.addEventListener('click', abrirMenu)
}
initDropMenu()

const animacaoDeScrollar = () => {
	const divQueSeraAnimada = document.querySelectorAll('.js-scroll')
	const sessentaPorCentoDaTela = window.innerHeight * 0.6

	function animarAoScrollar() {
		divQueSeraAnimada.forEach((div) => {
			const distanciaAteOTopo = div.getBoundingClientRect().top
			const metadeDaTela = distanciaAteOTopo - sessentaPorCentoDaTela
			if(metadeDaTela < 0) {
				div.classList.add('animar-scroll')
			}
		})
	}

	animarAoScrollar()
	window.addEventListener('scroll', animarAoScrollar)
}
animacaoDeScrollar()

function initHorario() {
	const funcionamento = document.querySelector('[data-semana]')
    const diasSemanaFuncionamento = funcionamento.dataset.semana.split(',').map(Number)
	const horarioSemanaFuncionamento = funcionamento.dataset.horario.split(',').map(Number)
	const ano = document.querySelector('.ano')
    
	const dataAgora = new Date()
    const diaDaSemana = dataAgora.getDay()
	const horarioAgora = dataAgora.getHours()

	ano.innerText = dataAgora.getFullYear()

    //verifica se tem a data de hj na semana
    const semanaAberto = diasSemanaFuncionamento.indexOf(diaDaSemana) !== -1;
    
    //verifica se o horario ainda esta aberto
	const horarioAberto = 
	(
	horarioAgora >= horarioSemanaFuncionamento[0] && horarioAgora < horarioSemanaFuncionamento[1] 
	|| horarioAgora >= horarioSemanaFuncionamento[2] && horarioAgora < horarioSemanaFuncionamento[3]
	)
    
    if(semanaAberto && horarioAberto) {
		funcionamento.classList.add('aberto')
		funcionamento.innerText = 'Aberto'
    } else {
		funcionamento.classList.add('fechado')
		funcionamento.innerText = 'Fechado'
    }
}
initHorario()

const enviarMensagem = () => {
	const botaoEnviarMensagem = document.querySelector('[data-botao="botao"]')
	const formulario = document.querySelector('#formulario')
	const mensagemEnviada = document.querySelector('#mensagem-enviada')
	const nome = document.getElementById('nome')
	const telefone = document.getElementById('telefone')
	const email = document.getElementById('email')
	const texto = document.getElementById('text')

	function abrirNovamente() {
		formulario.classList.remove('excluir')
		mensagemEnviada.classList.remove('abriMensagem')
		nome.value = ''
		telefone.value = '' 
		email.value = '' 
		texto.value = ''
	}

	botaoEnviarMensagem.addEventListener('click', function() {
		if(nome.value !== '' && telefone.value !== '' &&  email.value !== '' &&  texto.value !== '') {
			formulario.classList.add('excluir')
			mensagemEnviada.classList.add('abriMensagem')
			setInterval(function() {
				abrirNovamente()
			}, 4000)
		} else {
			alert('Por favor, preencha todo o formulário!')
		}
	})
}
enviarMensagem()