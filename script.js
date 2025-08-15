document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
        const valueDisplay = document.getElementById(`${slider.id}-value`);

        slider.addEventListener('mousedown', function () {
            valueDisplay.style.display = 'block';
        });
        slider.addEventListener('input', function () {
            const labels = {
                'rosto': {
                    0: 'Muito feio/a', 1: 'Feio/a', 2: 'Mais ou menos', 3: 'Normal',
                    4: 'OK', 5: 'Bonito/a', 6: 'Muito bonito/a', 7: 'Lindo/a',
                    8: 'Muito lindo/a', 9: 'Maravilhoso/a', 10: 'Perfeito/a'
                },
                'corpo': {
                    0: 'Muito feio/a', 1: 'Feio/a', 2: 'Mais ou menos', 3: 'Normal',
                    4: 'OK', 5: 'Bonito/a', 6: 'Muito bonito/a', 7: 'Lindo/a',
                    8: 'Muito lindo/a', 9: 'Maravilhoso/a', 10: 'Perfeito/a'
                },
                'personalidade': {
                    0: 'Insuportável', 1: 'Enjoado/a', 2: 'Chato/a', 3: 'Nada demais',
                    4: 'OK', 5: 'Legal', 6: 'Gente boa', 7: 'Simpático/a',
                    8: 'Muito simpático/a', 9: 'Atraente', 10: 'Perfeito/a'
                }
            };
            valueDisplay.textContent = labels[this.id][this.value];
            valueDisplay.style.display = 'block';

            // Position the tooltip above the thumb
            const percent = (this.value / this.max) * 100;
            const offset = 8 - (percent * 0.15); // Better thumb position calculation
            valueDisplay.style.left = `calc(${percent}% - ${offset}px)`;
        });

        slider.addEventListener('mouseout', function () {
            setTimeout(() => {
                valueDisplay.style.display = 'none';
            }, 500);
        });
    });
});

function calcularMedia() {
    const rosto = parseInt(document.getElementById('rosto').value);
    const corpo = parseInt(document.getElementById('corpo').value);
    const personalidade = parseInt(document.getElementById('personalidade').value);

    if (isNaN(rosto) || isNaN(corpo) || isNaN(personalidade)) {
        document.getElementById('resultado').innerText = "Por favor, preencha todas as características.";
        return;
    }

    const media = (rosto + corpo + personalidade) / 3;
    let mensagem;

    if (media < 4.5) {
        mensagem = "Passa! Deus te proteja dessa praga!";
    } if (media >= 4.5 & media <= 5.5) {
        mensagem = "Pensa! Você ainda precisa conhecer mais essa pessoa.";
    } if (media > 5.5) {
        mensagem = "Pega! Tá esperando o que ainda?";
    }

    document.getElementById('resultado').innerText = `${mensagem}`;

}
