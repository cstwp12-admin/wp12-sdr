# Third-party licences

WP12 Site Photo Report is made by WPN (see `LICENSE`). It includes the open-source components below. Each is used under its own licence. The notices stay inside the library files themselves (`src/libs/`, and the copies the build publishes), and this file lists them in one place. The same list is in the app: Setup → About and licences.

| Component | Version | Licence | Where it is used | Source |
| --- | --- | --- | --- | --- |
| jsPDF | 2.5.1 | MIT | Makes the PDF reports. Inlined in `index.html` | https://github.com/parallax/jsPDF |
| JSZip | 3.10.1 | MIT (it is offered as MIT or GPL-3.0; the app uses it under MIT) | Makes ZIP files and Word documents. Inlined in `index.html` | https://github.com/Stuk/jszip |
| pako | in JSZip | MIT | Compression inside JSZip | https://github.com/nodeca/pako |
| qrcode-generator | 1.4.4 | MIT | Draws the QR codes. Inlined in `index.html` | https://github.com/kazuhikoarase/qrcode-generator |
| pdf.js (Mozilla) | 3.11.174 | Apache-2.0 | Reads PDF drawings and previews PDFs. Loaded when needed (`pdfjs.min.js`, `pdfjs.worker.min.js`) | https://github.com/mozilla/pdf.js |
| jsQR | 1.4.0 | Apache-2.0 | Reads QR codes on phones without a built-in reader. Loaded when needed (`jsqr.min.js`) | https://github.com/cozmo/jsQR |
| heic2any | as in `heic2any.min.js` | MIT | Converts HEIC photos to JPEG. Loaded when needed (`heic2any.min.js`) | https://github.com/alexcorvi/heic2any |
| libheif and libde265 (inside heic2any) | as built into `heic2any.min.js` | LGPL-3.0 | The HEIC / HEVC decoder in heic2any | https://github.com/strukturag/libheif, https://github.com/strukturag/libde265 |
| Barlow, Barlow Condensed, IBM Plex Mono | Google Fonts | SIL Open Font Licence 1.1 | Page fonts, loaded from Google Fonts | https://fonts.google.com |

## Notes on the LGPL parts

libheif and libde265 are inside `heic2any.min.js`. That file is separate from the app (`index.html`), is loaded only when a HEIC photo is added, and can be replaced by another build of heic2any without changing the app. Their source code is at the addresses above. The app does not change them.

## Apache-2.0

pdf.js and jsQR are licensed under the Apache License, Version 2.0 (https://www.apache.org/licenses/LICENSE-2.0). Their copyright and licence notices stay at the top of `pdfjs.min.js`, `pdfjs.worker.min.js` and `jsqr.min.js`. pdf.js: Copyright 2023 Mozilla Foundation. jsQR: Copyright Cosmo Wolfe and contributors.

## MIT licence

The following components are licensed under the MIT licence: jsPDF, JSZip, pako, qrcode-generator and heic2any. Copyright holders:

- jsPDF: Copyright (c) 2010-2021 James Hall and the contributors named in the file header of `jspdf.umd.min.js`.
- JSZip: Copyright (c) 2009-2016 Stuart Knightley, David Duponchel, Franz Buchinger, António Afonso. pako: Copyright (c) Vitaly Puzrin and Andrei Tuputcyn.
- qrcode-generator: Copyright (c) 2009 Kazuhiko Arase.
- heic2any: Copyright (c) Alex Corvi.

```
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

## Fonts

Barlow, Barlow Condensed and IBM Plex Mono are licensed under the SIL Open Font Licence, Version 1.1 (https://openfontlicense.org). The app loads them from Google Fonts and does not copy them into the repository.
