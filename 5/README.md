﻿# Запуск проекта в Visual Studio 2017

## Необходимые инструменты

1. Visual Studio 2017  
   Версия: 15.8 или выше  
   Редакции: Community (бесплатная) / Professional / Enterprise  
   Язык: английский  
   Скачать можно тут: https://www.visualstudio.com/downloads/
2. .NET Core 2.1 SDK  
   Скачать можно тут: https://www.microsoft.com/net/download

## Запуск проекта

1. Откройте панель Team Explorer (Ctrl + \, Ctrl + M).
2. Если на данный момент открыт другой репозиторий - нажмите Manage Connections.
3. В разделе Local Git Repositories нажмите Clone.
4. В появившемся окне укажите адрес репозитория, а также путь, куда его необходимо склонировать и нажмите Clone.
5. После завершения клонирования откроется Solution Explorer - Folder View - в нем необходимо открыть нужный солюшен.

# Запуск проекта в Visual Studio Code

## Необходимые инструменты

1. Visual Studio Code  
   Версия: 1.27 или выше  
   Скачать можно тут: https://www.visualstudio.com/downloads/
2. .NET Core 2.1 SDK  
   Скачать можно тут: https://www.microsoft.com/net/download

## Запуск проекта

Для того, чтобы склонировать и запустить проект нужно выполнить в командной строке следующие команды (Windows):

```
git clone <Repository Url>
cd .\Web-Frontend6\Frontend6\
dotnet restore
cd ..
code .
```

Для других платформ потребуется изменить формат путей, а также некоторые инструменты могут быть не добавлены в PATH

При первом запуске возможно потребуется установка дополнительных расширений к Visual Studio Code

1. C# for Visual Studio Code
   1. Откройте раздел Extensions (Ctrl+Shift+X)
   2. В поиске введите: C#
   3. В появившейся выдаче найдите C# for Visual Studio Code от Microsoft и нажмите Install
   4. После установки нажмите Enable и перезапустите Visual Studio Code
2. .NET Core Debugger
   1. Нажмите Ctrl+Shift+P
   2. Начните набирать: Download .NET Core Debugger
   3. Как только в автокомплите появится данный пункт - нажмите его
   4. Для надежности перезапустите Visual Studio Code
