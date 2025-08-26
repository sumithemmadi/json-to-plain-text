# json-to-plain-text

[![Version](https://img.shields.io/npm/v/json-to-plain-text.svg)](https://www.npmjs.com/package/json-to-plain-text)
[![Stars](https://img.shields.io/github/stars/sumithemmadi/json-to-plain-text)](https://github.com/sumithemmadi/json-to-plain-text/stargazers)
[![Downloads](https://img.shields.io/npm/dt/json-to-plain-text.svg)](https://www.npmjs.com/package/json-to-plain-text)
[![License](https://img.shields.io/npm/l/json-to-plain-text.svg)](LICENSE)
[![Maintenance](https://img.shields.io/npms-io/maintenance-score/json-to-plain-text)](https://github.com/sumithemmadi/json-to-plain-text)
[![Issues](https://img.shields.io/github/issues/sumithemmadi/json-to-plain-text)](https://github.com/sumithemmadi/json-to-plain-text/issues)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/sumithemmadi)](https://github.com/sponsors/sumithemmadi)
[![Install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=json-to-plain-text&query=$.install.pretty&label=install%20size)](https://packagephobia.com/result?p=json-to-plain-text)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/json-to-plain-text)](https://bundlephobia.com/package/json-to-plain-text@latest)
[![Known Vulnerabilities](https://snyk.io/test/npm/json-to-plain-text/badge.svg)](https://snyk.io/test/npm/json-to-plain-text)

---

## 📖 Overview  

`json-to-plain-text` is a lightweight npm package that converts **JSON** into a clean, human-readable **plain-text**.  

Think of it as `JSON.stringify()`, but prettier, friendlier, and tailored for **logs, debugging, and CLI output**.

> [!NOTE]  
> From version **2.0.0+**, this package outputs plain text only.  
> If you need **colored output**, please use [version 1.1.4](https://www.npmjs.com/package/json-to-plain-text/v/1.1.4) .  

---

## ✨ Features  

- 🔹 Convert JSON objects into easy-to-read plain text  
- ⚡ Tiny & fast (zero dependencies)  
- 🛠 Configurable separators, spacing, quotes, and array formatting  
- ✅ Great for **logs, debugging, reports, and CLI tools**  

---

## 🔍 Why use this?  

Use `json-to-plain-text` when you need:  
- 📑 **Readable logs** – no more squinting at raw JSON  
- 🖥 **CLI outputs** – format objects neatly for the terminal  
- 🧪 **Debugging helpers** – quickly inspect nested objects  
- 📝 **Reports/configs** – human-friendly data printing  

---

## 🚀 Installation  

```bash
npm install json-to-plain-text
```

---

## 📦 Usage  

```js
import { jsonToPlainText } from "json-to-plain-text";
```

---

## ⚙️ API  

```ts
jsonToPlainText(data: unknown, options?: Options): string
```

### Parameters  

- **`data`** *(required)* – JSON-like input or JavaScript object.  
- **`options`** *(optional)* – Customize the formatting.  

| Option                   | Type    | Default | Description |
|---------------------------|---------|---------|-------------|
| `separator`              | string  | `:`     | Character used between keys and values. |
| `spacing`                | boolean | `true`  | Align keys with spacing before colons. |
| `squareBracketsForArray` | boolean | `false` | Display arrays inside `[]`. |
| `doubleQuotesForKeys`    | boolean | `false` | Wrap object keys in double quotes. |
| `doubleQuotesForValues`  | boolean | `false` | Wrap string values in double quotes. |

---

## 💡 Example  

```ts
import { jsonToPlainText, Options } from "json-to-plain-text";

const data = {
  place_id: "173937105",
  osm_type: "way",
  lat: "17.861533866867224",
  lon: "78.8081441896764",
  address: {
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
  },
  distance: 2,
};

const options: Options = {
  separator: ":",
  spacing: true,
  squareBracketsForArray: false,
  doubleQuotesForKeys: false,
  doubleQuotesForValues: false,
};

console.log(jsonToPlainText(data, options));
```

### ✅ Output  

```yaml
place_id : 173937105
osm_type : way
lat      : 17.861533866867224
lon      : 78.8081441896764
address  : 
city     : Hyderabad
state    : Telangana
country  : India
distance : 2
```

---

## 💝 Support  

If this project helps you, consider supporting my open-source work:  

- [💖 SPONSOR ME ON GITHUB](https://github.com/sponsors/sumithemmadi?o=sd&sc=t)  

A huge thanks to all sponsors for supporting my work!  

---

## 📜 License  

This project is licensed under the [MIT License](LICENSE).  

---

## 👨‍💻 Author  

- [Sumith Emmadi](https://github.com/sumithemmadi)  
