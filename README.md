# pratica_modulo_1
Trabalho prático do módulo 1 do bootcamp fullstack IGTI, construindo uma aplicação para visualização de cores a partir da escala RGB.

# Instruções
## Objetivos
<p>Exercitar os seguintes conceitos trabalhados no Módulo:</p>

<br>

<ul>
    <li>Utilização de elementos HTML.</li>
    <li>Utilização de CSS.</li>
    <li>Utilização de identificadores em elementos HTML.</li>
    <li>Captura de referência de elementos com JavaScript.</li>
    <li>Manipulação de eventos com JavaScript.</li>
    <li>Utilização de funções com JavaScript e CSS.</li>
    <li>Manipulação direta de CSS com JavaScript.</li>
</ul>

<br>

## Enunciado
<p>Construa, utilizando HTML, CSS e JavaScript puro, uma aplicação para a visualização de cores a partir da escala RGB.</p>

<br>

## Atividades
<p>Os alunos deverão desempenhar as seguintes atividades:</p>

<br>

<ol>
    <li>Implementar, através de HTML, CSS e JavaScript puro, uma aplicação que contenha três inputs do tipo “range”, cujos valores vão de 0 a 255 e representem,respectivamente, R (Red – Vermelho), G (Green – Verde) e B (Blue – Azul).</li>
    <li>Essa combinação de valores deve ser utilizada para preencher a cor de fundo de uma < div > quadrada.</li>
    <li>Além disso, inclua três inputs de texto somente-leitura (desabilitados) para a visualização do valor atual de cada input do tipo range.</li>
    <li>À medida em que o usuário modifica o valor dos ranges com as teclas ← e → do teclado, a <div> deve refletir a cor correspondente.</li>
    <li>A imagem abaixo ilustra uma possível interface para a aplicação.</li>
</ol>

<br>

## Dicas

<br>

<ul>
    <li>Utilize o método load de window.addEventListener para garantir que o DOM esteja totalmente carregado antes de qualquer instrução JavaScript.</li>
    <li>Utilize id's nos inputs e na div para mapeá-los no script com document.querySelector.</li>
    <li>Não se preocupe tanto com a interface gráfica. O mais importante é o código estar funcionando.</li>
    <li>Para definir a cor da div, utilize style.backgroundColor. O valor deve ser uma string que, por sua vez, interpola a função rgb() do CSS. Mais informações <a href="https://www.w3schools.com/cssref/func_rgb.asp">aqui</a>.</li>
    <li>Mais alguns valores de referência:</li>
</ul>