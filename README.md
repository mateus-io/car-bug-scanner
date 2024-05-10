# Car Bug Scanner
## Demonstração 🚀:

<img src="https://github.com/mateus-io/car-bug-scanner/assets/52046972/09662c3a-88e1-47cc-9da4-38ec803598e8" width="270" height="480"/>

## Resumo do projeto:

#### O "Car Bug Scanner" é um aplicativo que detecta defeitos em fotos de carros.

## Motivação:

#### Detectar defeitos na VOLKSWAGEN BRASILIA 1981 do meu pai

<img src="https://github.com/mateus-io/car-bug-scanner/assets/52046972/425e387b-3675-4b7c-b4e9-c748cdc92a4e" width="200" height="250"/>

## O que foi construído:

- Um aplicativo React Native
- Uma API usando Python com Flask

----------------

- #### Serviços:

| App | Porta |
| ----------- | ----------- |
| Flask app | 8000 |

## 🚀 Setup Development Envirtonment

- #### Pré-requisitos:

###### Docker Instalado
###### Docker Compose Instalado

- #### 1º Passo:

#### Criar uma rede:

> ⚠️ Importante: Por segurança antes de criar a rede verifique se ela já não existe usando:
> <code> docker network ls </code>
> Caso ocorra algum problema com a rede, tente deletar ela e criar novamente usando:
> <code> docker network rm proxy </code>
> e
> <code> docker network create --driver=bridge --subnet=172.19.0.0/16 proxy </code>

- #### 2º Passo:

#### Navegar até a pasta docker

Na raiz do projeto, use:

<code> cd docker </code>

- #### 3º Passo:

#### Iniciar os serviços

<code> docker-compose up </code>

> ⚠️ OBS: Use a flag `--force-recreate`, caso dê `network not found` com a rede já criada
> <code> docker-compose up --force-recreate </code>
