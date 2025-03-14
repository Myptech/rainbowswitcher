1. Описание проекта
Целью данного проекта является автоматизация процессов непрерывной интеграции и непрерывной доставки для приложения на C#. Для этого была использована технология CI/CD, которая позволяет настроить автоматизированный и стабильный процесс сборки, тестирования и развёртывания приложения при помощи GitHub Actions. Мы настроили пайплайн, который строит, тестирует и развёртывает наш проект автоматически при каждом пуше в основную ветку или при открытии/слиянии pull request в основную ветку.

2. Цели CI/CD
CI/CD — это практика программной инженерии, которая позволяет создавать автоматизированные пайплайны интеграции, тестирования и развёртывания. Целями CI/CD являются:

- Непрерывная интеграция (Continuous Integration): автоматическая сборка, выполнение тестов и выявление ошибок в коде на ранних стадиях.
- Непрерывное развертывание (Continuous Deployment): автоматическое развёртывание приложения после успешного прохождения этапов тестирования и сборки.

В рамках проекта пайплайн CI/CD автоматически выполняет следующие этапы:
- Сборка приложения.
- Тестирование.
- Развёртывание артефакта в отдельную папку.

3. Использованные инструменты и технологии
- GitHub Actions — для создания и управления пайплайном CI/CD.
- NET SDK 8.0 — для разработки и сборки.
- Ubuntu — операционная система для выполнения пайплайна.

4. Описание пайплайна
GitHub Actions пайплайн настроен для выполнения задач при каждом пуше в ветку `main` или при открытии pull request на эту ветку. В рамках пайплайна определены шаги для стабильного и автоматизированного прогона тестов и сборки.

```yaml
name: CI/CD Pipeline for C# App

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup .NET
        uses: actions/setup-dotnet@v3
        with:
          dotnet-version: '8.0.x'

      - name: Install dependencies
        run: dotnet restore

      - name: Build project
        run: dotnet build --configuration Release

      - name: Run tests
        run: dotnet test

      - name: Deploy artifact
        if: github.ref == 'refs/heads/main'
        run: |
          mkdir -p deploy
          cp -r bin/Release/net8.0/* deploy/
```
Объяснение шагов:
- Checkout code:** клонирование репозитория на виртуальную машину для выполнения сборки.
- Setup .NET:установка .NET SDK нужной версии.
- Install dependencies: восстановление зависимостей проекта.
- Build project: сборка проекта в режиме Release.
- Run tests: запуск тестов для проверки корректности работы кода.
- Deploy artifact:копирование артефакта в директорию `deploy` для упрощенного развертывания.

5. Скрины успешного выполнения pipeline
![image](https://github.com/user-attachments/assets/3d034a8d-0190-4e8d-8b80-e8a291abb9a9)

6. Заключение
Использование пайплайна CI/CD позволяет значительно повысить скорость и стабильность разработки, автоматизируя процессы сборки, тестирования и развертывания. В данном проекте для организации процесса был использован GitHub Actions, что позволило интегрировать все этапы в одну цепочку и минимизировать ручной труд. Это упрощает управление проектом и увеличивает его надёжность.

