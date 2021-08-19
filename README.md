<p align="center">
  <img src="public/img/icon.svg" width="96" alt="Icon" />
</p>

<h1 align="center">Digicards</h1>

<p align="center">Design your own digital business cards that can be easily shared.</p>

Project management can be tracked on this [Trello board](https://trello.com/b/euocxOCd/topexcel-trello).

[Website mockup](https://yiu50b.axshare.com) | [Designer mockup](https://4twccs.axshare.com)

> NOTE: This project is developed by Deakin University masters students alongside industry partners.

## Stack

- React `17.x`
- Tailwind CSS `2.x`
- Express `4.x`
- MySQL `8.x`

## Requirements

- Node.js `14.x`
- Parcel `1.x`

## Getting started

1. Clone the repository:

```sh
git clone <URL>
```

2. Install Node.js dependencies:

```sh
npm install
```

3. Create a `.env` file and add the following:

```sh
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
POLOTNO_API_KEY=
```

You can get the `POLOTNO_API_KEY` from [https://polotno.dev/cabinet](https://polotno.dev/cabinet).

## Development

**Start the design editor development server**

```sh
npm run editor
```

Open [http://localhost:1234](http://localhost:1234) in your browser.

**Start the development web server**

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

**Build the design editor app**

```sh
npm run build
```

Output will be in the **/editor/dist** folder.

**Start the web server**

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
