# Руководство по сайту GREENLEAF Каталог

## 1. Развёртывание на домен

### Вариант А: Vercel (рекомендуется — бесплатно, быстро, HTTPS автоматически)

1. Зайдите на [vercel.com](https://vercel.com) и войдите через GitHub
2. Нажмите **"Add New Project"**
3. Выберите репозиторий `PrimusC/siteaidar`
4. Vercel автоматически определит Vite — просто нажмите **Deploy**
5. Сайт будет доступен по адресу `siteaidar.vercel.app`

**Подключение своего домена:**
- В настройках проекта: Settings → Domains → Add Domain
- Введите ваш домен (например `greenleaf-sibay.ru`)
- Добавьте DNS-записи у вашего регистратора домена:
  - Тип: `CNAME`, Имя: `@` или `www`, Значение: `cname.vercel-dns.com`
- HTTPS подключится автоматически

### Вариант Б: Netlify (тоже бесплатно)

1. Зайдите на [netlify.com](https://netlify.com) и войдите через GitHub
2. Нажмите **"Add new site"** → **"Import an existing project"**
3. Выберите репозиторий `PrimusC/siteaidar`
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Нажмите **Deploy**

**Подключение домена:** Site settings → Domain management → Add custom domain

### Вариант В: GitHub Pages (бесплатно, но нужна небольшая настройка)

1. Установите пакет: `npm install --save-dev gh-pages`
2. В `package.json` добавьте:
   ```json
   "homepage": "https://primusc.github.io/siteaidar",
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. В `vite.config.js` добавьте `base: '/siteaidar/'`
4. Запустите `npm run deploy`

> **Важно:** для SPA на GitHub Pages нужен файл `dist/404.html` с редиректом.
> Vercel/Netlify — проще и лучше для SPA.

### Вариант Г: VPS / Хостинг (если уже есть сервер)

```bash
# На сервере
npm run build
# Скопируйте содержимое папки dist/ в корень веб-сервера
# Настройте nginx:
```

```nginx
server {
    listen 80;
    server_name your-domain.ru;
    root /var/www/siteaidar/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 2. Передача сайта другому человеку

### Что передать:

1. **Ссылка на репозиторий:** https://github.com/PrimusC/siteaidar
2. **Доступ:** добавьте человека как Collaborator:
   - GitHub → репозиторий → Settings → Collaborators → Add people
3. **Это руководство** (файл `GUIDE.md`)

### Что нужно человеку для работы:

- Установить [Node.js](https://nodejs.org/) (LTS версия)
- Склонировать репозиторий: `git clone https://github.com/PrimusC/siteaidar.git`
- Установить зависимости: `npm install`
- Запустить dev-сервер: `npm run dev`
- Открыть в браузере: `http://localhost:5173`

---

## 3. Управление сайтом

### Структура файлов

```
src/
├── data/
│   ├── config.js          ← Контакты, имя клиента, информация о компании
│   ├── categories.js      ← 10 категорий и их подкатегории
│   ├── brands.js          ← Список брендов
│   └── products/
│       ├── index.js       ← Связывает категории с файлами товаров
│       ├── face-care.js   ← Товары: Уход за лицом (135 шт)
│       ├── decorative.js  ← Товары: Декоративная косметика (49 шт)
│       ├── body-care.js   ← Товары: Уход за телом (101 шт)
│       ├── hair-care.js   ← Товары: Уход за волосами (66 шт)
│       ├── oral-care.js   ← Товары: Гигиена полости рта (41 шт)
│       ├── personal-hygiene.js ← Товары: Личная гигиена (67 шт)
│       ├── children.js    ← Товары: Товары для детей (44 шт)
│       ├── health.js      ← Товары: Здоровье (59 шт)
│       ├── eco-laundry.js ← Товары: Эко-стирка (49 шт)
│       └── eco-home.js    ← Товары: Эко-дом (56 шт)
├── components/            ← Визуальные компоненты (карточки, шапка, футер)
└── pages/                 ← Страницы сайта
```

### Как изменить контакты

Откройте `src/data/config.js` и измените:

```js
export const client = {
  name: 'Айдар Ахметов',          // Имя партнёра
  city: 'г. Сибай',               // Город
  phone: '+7 (XXX) XXX-XX-XX',    // Телефон
  whatsapp: '7XXXXXXXXXX',        // WhatsApp (без +)
  telegram: 'Aydar_Akhmetovv',    // Telegram username
};
```

### Как добавить новый товар

Откройте файл нужной категории (например `src/data/products/face-care.js`) и добавьте объект в массив:

```js
{
  id: 'facecare-136',                        // Уникальный ID
  subcategory: 'ochishenie',                  // Якорь подкатегории (см. ниже)
  name: 'Название товара',
  brand: 'SEALUXE',                           // Бренд
  volume: '200 мл',                            // Объём
  retailPrice: 1500,                           // Розничная цена
  partnerPrice: 750,                           // Партнёрская цена
  pv: 3,                                       // PV (баллы)
  imageUrl: 'https://...',                     // Ссылка на фото
  description: 'Описание товара...',
},
```

### Якоря подкатегорий (поле subcategory)

| Категория | Подкатегория | Якорь |
|---|---|---|
| **Уход за лицом** | Очищение и демакияж | `ochishenie` |
| | Тонизирование. Увлажнение. Питание | `tonizirovanie` |
| | Комплексный уход | `kompleks` |
| | Маски для лица | `maski` |
| **Декоративная косметика** | Базы под макияж | `bazy` |
| | Декоративная косметика | `dekorativnaya` |
| | Уход за кожей губ | `guby` |
| | Аксессуары для макияжа | `aksessuary` |
| | Коллекция ароматов | `parfum` |
| **Уход за телом** | Уходовые средства для тела | `telosredstva` |
| | Уход за кожей рук и ног | `rukinogi` |
| | Гели для душа | `geli` |
| | Для здоровья тела | `zdorovietela` |
| | Аксессуары для душа | `aksessuarydusha` |
| | Мыло для лица и тела | `mylo` |
| **Уход за волосами** | Шампуни и бальзамы | `shampuni` |
| | Маски, масло для волос | `volosmaski` |
| | Средства для укладки | `volosukladka` |
| | Краска для волос | `voloskraska` |
| | Аксессуары для волос | `volosrascheski` |
| **Гигиена полости рта** | Зубные пасты | `zubpasty` |
| | Ополаскиватели и спреи | `zubopolaskivatel` |
| | Зубные щётки и зубочистки | `zubschetki` |
| **Личная гигиена** | Женская гигиена | `zhenskaya` |
| | Салфетки и предметы гигиены | `salfetki` |
| | Туалетная бумага | `bumaga` |
| **Товары для детей** | Уход за детской кожей | `detskayakozha` |
| | Детские зубные пасты и щётки | `detskiezuby` |
| | Салфетки и подгузники | `podguzniki` |
| | Текстиль для детей | `detskiytextil` |
| **Здоровье** | БАДы и витамины | `bady` |
| | Полезные напитки | `napitki` |
| | Чай | `chai` |
| **Эко-стирка** | Средства для стирки | `stirka` |
| | Кондиционеры для белья | `konditsioner` |
| | Детская стирка | `detskayastirka` |
| | Отбеливатели и пятновыводители | `otbelivateli` |
| | Мыло для стирки | `mylostirka` |
| **Эко-дом** | Средства для мытья посуды | `posuda` |
| | Средства для уборки дома | `uborka` |
| | Средства для ванной и туалета | `vannaya` |
| | Аксессуары для уборки | `aksessuaryuborki` |

### Как изменить цену товара

Найдите товар в соответствующем файле и измените поля `retailPrice` и `partnerPrice`.

### Как удалить товар

Удалите весь объект `{ ... },` из массива.

### Как заменить фото товара

Замените ссылку в поле `imageUrl`. Фото может быть:
- Прямая ссылка на изображение (URL заканчивается на `.jpg`, `.png`, `.webp`)
- Загруженное на любой хостинг изображений

### Как добавить новую категорию

1. Создайте файл `src/data/products/new-category.js` по образцу существующих
2. Добавьте импорт в `src/data/products/index.js`
3. Добавьте категорию в `src/data/categories.js`

### Как обновить сайт после изменений

Если сайт размещён на Vercel/Netlify:
```bash
git add .
git commit -m "описание изменений"
git push
```
Сайт обновится автоматически через 1-2 минуты.

---

## Быстрый чеклист для нового пользователя

- [ ] Установить Node.js
- [ ] `git clone https://github.com/PrimusC/siteaidar.git`
- [ ] `cd siteaidar && npm install`
- [ ] `npm run dev` — запустить локально
- [ ] Изменить контакты в `src/data/config.js`
- [ ] `git add . && git commit -m "update" && git push` — опубликовать
