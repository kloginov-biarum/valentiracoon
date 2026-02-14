# Публикация на GitHub Pages

Репозиторий уже инициализирован, коммит сделан. Осталось:

## 1. Создать репозиторий на GitHub

1. Открой https://github.com/new
2. **Repository name:** `valentiracoon` (или любое имя)
3. Выбери **Public**, не добавляй README (у нас уже есть файлы)
4. Нажми **Create repository**

## 2. Подключить удалённый репозиторий и отправить код

В терминале из папки проекта выполни (подставь свой логин, если он не `kloginov-biarum`):

```bash
cd /Users/ergrevegvrg/PycharmProjects/valentiracoon
git remote add origin https://github.com/kloginov-biarum/valentiracoon.git
git push -u origin main
```

Если репозиторий уже был создан с другим именем — используй его в URL.

## 3. Включить GitHub Pages

1. В репозитории на GitHub: **Settings** → **Pages**
2. В блоке **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** main → / (root)
3. Сохрани (**Save**)

Через 1–2 минуты приложение откроется по адресу:

**https://kloginov-biarum.github.io/valentiracoon/**

(если имя репозитория другое — подставь его вместо `valentiracoon`)
