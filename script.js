function validação(){
    const nome = document.querySelector('.nome').value.toUpperCase();
    const vip = String(nome);
    const negado = String(nome);
    if (vip == 'LUISA ALMEIDA' || vip == 'ANA PAULA TEDESCO' || vip == 'NATALIA CRISTINA' || vip == 'ALEXANDRE SANTANNA'){
        document.querySelector('.mensagem').innerHTML = `VIP e tem acesso exclusivo à festa! </br> Aproveite a noite com tranquilidade, sabendo que sua entrada está garantida. Divirta-se muito!`;
    }else if (negado == 'WILLYAN LUIZ GENARO' || negado == 'MARCELO SANTANNA' || negado == 'PEDRO MAURICIO'){
        document.querySelector('.mensagem').innerHTML = `Acesso negado. </br>  não poderá entrar na festa. </br> Agradecemos sua compreensão.`;

    }
    else if( nome == ''){
        document.querySelector('.mensagem').innerHTML = `Informe os dados corretamente.`;

    }
    
    else {
        document.querySelector('.mensagem').innerHTML = `Acesso concedido. </br> Aproveite a festa!`;
    }


}