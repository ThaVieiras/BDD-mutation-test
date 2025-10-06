# BDD & Teste de Mutação - Calculadora

Este projeto demonstra a aplicação de duas técnicas de teste de software: **Behavior-Driven Development (BDD)** e **Teste de Mutação**. A aplicação testada é uma calculadora simples em JavaScript.

O objetivo é garantir a qualidade e robustez do código através de testes que verificam o comportamento esperado (BDD) e identificam falhas nos testes (Mutação).

---

### Tecnologias Utilizadas

* **Node.js:** Ambiente de execução.
* **Cucumber.js:** Framework para BDD, que permite escrever testes em linguagem natural.
* **Stryker:** Framework para Teste de Mutação, que avalia a eficácia dos testes.

---

### Como Executar

#### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/ThaVieiras/BDD-MUTATION-TEST.git](https://github.com/ThaVieiras/BDD-MUTATION-TEST.git)
    ```
2.  **Instale as dependências:**
    Acesse a pasta do projeto e execute:
    ```bash
    npm install
    ```
3.  **Execute os testes de BDD:**
    ```bash
    npm test
    ```
4.  **Execute o teste de mutação:**
    ```bash
    npm run stryker
    ```
