import readlineSync from 'readline-sync';

const NUMERO_DE_NOTAS = 4;
const MEDIA_APROVACAO = 6.0;

function main(): void {
    const notas = coletarNotas();
    const media = calcularMedia(notas);
    exibirResultado(media);
}

/**
 * Coleta as notas do usuário com validação de entrada.
 * @returns Um array de números contendo as notas válidas.
 */
function coletarNotas(): number[] {
    const notas: number[] = [];

    for (let i = 0; i < NUMERO_DE_NOTAS; i++) {
        while (true) {
            const input = readlineSync.question(`Digite a nota do ${i + 1}º bimestre (0 a 10): `);
            const nota = parseFloat(input);

            if (isNaN(nota)) {
                console.log('❌ Entrada inválida. Por favor, digite um número.');
                continue;
            }

            if (nota < 0 || nota > 10) {
                console.log('⚠️ Nota inválida. Digite um valor entre 0 e 10.');
                continue;
            }

            notas.push(nota);
            break;
        }
    }

    return notas;
}

/**
 * Calcula a média de um conjunto de notas.
 * @param notas Um array de números contendo as notas.
 * @returns A média das notas.
 */
function calcularMedia(notas: number[]): number {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    return soma / notas.length;
}

/**
 * Exibe a média e o resultado da aprovação.
 * @param media A média calculada.
 */
function exibirResultado(media: number): void {
    console.log(`\n📊 Média final: ${media.toFixed(2)}`);

    if (media >= MEDIA_APROVACAO) {
        console.log('✅ Resultado: Aluno aprovado!');
    } else if (media >= 4.0) {
        console.log('⚠️ Resultado: Aluno em recuperação.');
    } else {
        console.log('❌ Resultado: Aluno reprovado.');
    }
}

// Executa o programa
main();
