1. Mohon jelaskan apa itu Node.js? Apa perbedannya dengan JavaScript?
2. Mohon jelaskan arsitektur dari Node.js?
3. Apa perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js?
4. Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js?

Jawaban

1. Node.js adalah runtime environment untuk javascript yang memungkinkan javascript dapat berjalan di server/diluar browser. Sedangkan javascript adalah bahasa pemograman yang open-source dan cross-platform untuk pengembangan aplikasi web.
2. Node.js menggunakan arsitektur single threaded event loop untuk menangani beberapa client seacara bersamaan.
3. Built in module adalah module bawaan dari node.js itu sendiri, External module adalah module yang di install lewat npm, custom module adalah module yang di buat oleh developer/programmer di dalam file node.js
4. Built in module: - console.log()
   External module: - express js
   Custom module: export default function helloworld() {
   return "Hello World"
   }
