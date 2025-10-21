# 🌐 Using Playwright to Test The Website on Different Browsers

---

## 🧩 1. Install Playwright

In your project folder, run:

```bash
npm init -y
npm install -D playwright
```

This installs Playwright and its CLI tools.

---

## 🌍 2. Install All Browsers

Run the following command to download Chromium, Firefox, and WebKit:

```bash
npx playwright install
```

This ensures Playwright has the correct browser binaries for testing.

---

## 🧪 3. Start Your Local Website

Start your dev server as usual:

```bash
npm run dev
```

---

## 🖥️ 4. Open Your Localhost Site in Different Browsers

Now, use Playwright’s interactive mode to **manually test** your site:

```bash
npx playwright open http://localhost:5173
```

This opens a **Playwright browser chooser** where you can pick:

* **Chromium** (Google Chrome / Edge)
* **Firefox**
* **WebKit** (Safari)

You can also open a specific browser directly:

```bash
# Chromium
npx playwright open --browser=chromium http://localhost:5173

# Firefox
npx playwright open --browser=firefox http://localhost:5173

# WebKit (Safari)
npx playwright open --browser=webkit http://localhost:5173
```

---

## 🔍 5. Test and Inspect Manually

Once the browser launches:

* Navigate through your pages
* Check layout, responsiveness, and features
* Use dev tools (right-click → Inspect Element)
* Repeat in all three browsers
