# Aula 03 (12/03) 

## Modularização (import/export)

Existem duas formas: 
* CJS (Common JavaScript) ou
* ESM (EcmaScript Modules)

Para esta aula vamos apenas mostrar o uso do **ESM (EcmaScript Modules)**

[referência Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules) 

### Exportando recursos do módulo

Isso é feito usando a declaração ```export```

A maneira mais fácil de usá-lo é colocá-lo na frente de qualquer item que você queira exportar para fora do módulo, por exemplo:

~~~js
export const name = "john";

export function draw() {
    ...
}
~~~

Uma maneira mais conveniente de exportar todos os itens que você deseja exportar é usar uma única instrução de exportação no final do arquivo do módulo, seguida por uma lista separada por vírgula dos recursos que você deseja exportar envoltos em chaves. Por exemplo:

~~~js
export { name, draw }
~~~

### Importando recursos para o seu script

Depois de exportar alguns recursos do seu módulo, é necessário importá-los para o script para poder usá-los. A maneira mais simples de fazer isso é a seguinte:

~~~js
import { name, draw } from "./arquivo.js";
~~~

## Vamos brincar um pouco...

Utilizaremos alguns trechos de código de ajuda que podem ser encontrados na pasta [trechos](./trechos/)


