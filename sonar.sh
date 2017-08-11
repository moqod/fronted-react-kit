#! /bin/bash
docker run --user $(id -u):$(id -g) --rm -v ${PWD}:/code -i moqod/sonar-scanner-js -Dsonar.login=a885c95e1806f57c19fa2690f525ce39c680f4bf -Dsonar.host.url=https://dumy.mqd.me -Dsonar.projectKey=PROJECT-KEY -Dsonar.language=js -Dsonar.projectVersion=0.1 -Dsonar.sources=src/app
