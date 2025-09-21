# ✅ Funcionalidades do Projeto - Gerenciador de Notas

Este documento descreve todas as funcionalidades implementadas no projeto **Gerenciador de Notas**, desenvolvido em **TypeScript** para execução em ambiente de terminal (CLI).

---

## 🧾 Funcionalidades Gerais

### 🎯 1. Coleta de Notas
- Solicita ao usuário a entrada de **4 notas bimestrais**.
- Utiliza uma interface interativa no terminal para entrada sequencial.
- Cada nota é solicitada individualmente, com rótulo indicando a ordem (1º, 2º, etc).

---

### 🛡 2. Validação de Entradas
- Aceita apenas **números válidos** (entre `0` e `10`).
- Rejeita:
  - Letras ou símbolos
  - Números negativos
  - Notas acima de 10
- Solicita reentrada caso o valor seja inválido.

---

### 🧮 3. Cálculo da Média
- Soma todas as notas válidas inseridas.
- Divide pela quantidade de notas (`4`) para calcular a média final.

---

### 📊 4. Exibição do Resultado
- Exibe a média com **duas casas decimais**.
- Mostra a situação do aluno com base na média:

| Média Final       | Resultado            |
|-------------------|----------------------|
| ≥ 6.0             | ✅ Aprovado           |
| ≥ 4.0 e < 6.0     | ⚠️ Recuperação        |
| < 4.0             | ❌ Reprovado          |

- Exibição colorida/simbólica com emojis para facilitar leitura.

---

### 🔁 5. Estrutura modular e reutilizável
- Separação clara de responsabilidades:
  - `coletarNotas()`: entrada e validação
  - `calcularMedia()`: lógica de cálculo
  - `exibirResultado()`: saída no terminal
- Fácil de expandir para mais notas, outras regras, ou exportação de relatórios.

---

### 💬 6. Interface de Linha de Comando (CLI)
- Baseada no pacote `readline-sync`
- Totalmente operável via terminal

---

## 📌 Possíveis melhorias futuras

- [ ] Suporte a mais disciplinas (multi-matérias)
- [ ] Exportação de boletim em PDF ou JSON
- [ ] Interface Web (com React ou HTML puro)
- [ ] Armazenamento das notas em arquivo local ou banco de dados

---

## ✍️ Autor

Desenvolvido por [Eduardo Pacheco]
