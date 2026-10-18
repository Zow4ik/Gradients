# 🎨 Gradients

**Turn any photo into a CSS gradient. Zero API, all in your browser.**

Gradients — это легковесный инструмент для дизайнеров и разработчиков, который позволяет мгновенно извлекать цветовую палитру из любого изображения и генерировать готовый CSS-код.

## ✨ Фишки
*   **Приватность (Zero API):** Фото не загружаются на сервер. Вся работа (сжатие, извлечение палитры) происходит прямо в браузере.
*   **Скорость:** Палитра извлекается за < 100 миллисекунд благодаря `colorthief` и `picsquish`.
*   **Готовый код:** Экспорт градиента в CSS, Tailwind, SCSS и SVG в один клик.
*   **Гибкость:** Настройка режимов (Linear, Radial, Conic), углов, Drag-n-Drop стопов и их количества (от 2 до 4).

## 🛠 Стек
*   **React 18** + **Vite**
*   **SCSS** (модули)
*   **Библиотеки:** `colorthief`, `picsquish`, `color-2-name`, `lucide-react`

## 🚀 Локальный запуск

```bash
# 1. Клонируйте репозиторий
git clone https://github.com/your-username/gradients.git

# 2. Установите зависимости
npm install

# 3. Запустите dev-сервер
npm run dev