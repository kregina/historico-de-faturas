# Orbita: solução para o backend.

Esse arquivo foi criado com o intuito de expressar uma sugestão para o backend do problema apresentado, assim como o detalhamento e seus diagramas.

# Requisitos Funcionais

## 1: Medição e envio de consumo de dados

### Descrição: O dispositivo conectado ao modem deve medir o consumo de dados e persisti-lo em uma base de dados remota

#### Fluxo pricipal:
- A cada 1 hora dispositivo deve:
    - consultar o modem para obter a quantidade de dados utilizados da hora em questão

    - enviar os dados para uma aplicação remota

- A aplicação remota deve receber os dados e persisti-los
	
#### Fluxos Alternativos:

- Leitura de modem falhou:
    - agendar uma nova execução do determinado horário para 24hrs após a falha da consulta.

- Envio para aplicação remota falhou:
    - agendar uma nova execução do determinado horário para 24hrs após a falha do envio.

- Requisição duplicada na aplicação remota:
    - ignonar requisição duplicada (idempotência);

### 2: Geração de fatura

### Descrição: O sistema deve gerar as faturas do mês em questão.

#### Fluxo pricipal:		
- A cada 1 mês:
    - consultar o banco de dados para obter os clientes ativos

-para cada cliente ativo:
    - agendar o cálculo da fatura

- para cada cálculo de fatura:
    - consultar dados do mês
    - calcular total
    - persistir dados