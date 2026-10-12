<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sorteio-estrela</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bitcount+Ink:wght@100..900&family=Bungee&family=Indie+Flower&family=Oswald:wght@200..700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</head>
<body>
    <h1>Sorteio Com Estrelas</h1>
    <div class="geral">
        <div class="tela-esq" id="jogares-selecionados">Tela Da Esquerda</div>
        <div class="tela-meio">
        <textarea id="lista" cols="60" rows="10" placeholder="
        nome e o nivel do jogador
        ex:
        lucas 2 
        juan henrique 4 
        herick 3"></textarea>
        <input type="text" id="times" placeholder="quantidade de times">
        <button onclick="adicionar()">Adicionar</button>
        <button onclick="sortear()">Sortear</button>
        </div>
        <div class="tela-dir" id="jogares-sorteados">Tela Da Direita</div>
    </div>
    <script src="script.js"></script>
</body>
</html>
