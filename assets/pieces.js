/* =========================================================
   Sweet Luxury v2 — catálogo compartido (inicio + colecciones)
   Datos reales tomados de catalogo.treinta.co. Precios siempre en COP;
   la conversión de moneda la hace i18n.js (formatPrice).
   ========================================================= */

const PIECES = [
  { id: "cabujon-737", nombre: "Cabujón 7.37 ct", ct: 7.37, precio: 750000, nivel: "Esencial", origen: "Colombia", mina: "no especificada", tratamiento: "perma",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2Fa30512b5-c3b2-5295-b4a8-6d4a7dbf2023.jpg" },
  { id: "canutillo-481", nombre: "Canutillo 4.81 ct", ct: 4.81, precio: 1200000, nivel: "Selecta", origen: "Colombia", mina: "no especificada", tratamiento: "sin tratamiento",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2F52e1e48d-e502-5bb4-8176-79074cb08f28.jpg" },
  { id: "canutillo-206", nombre: "Canutillo 2.06 ct", ct: 2.06, precio: 1300000, nivel: "Selecta", origen: "Colombia", mina: "no especificada", tratamiento: "sin tratamiento",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2Fd7cf9f16-8a14-5edc-9200-6df53647c4ab.jpg" },
  { id: "canutillo-236", nombre: "Canutillo 2.36 ct", ct: 2.36, precio: 1300000, nivel: "Selecta", origen: "Colombia", mina: "no especificada", tratamiento: "sin tratamiento",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2Fa2e9b017-5a91-53e3-9850-f008f2954c74.jpg" },
  { id: "canutillo-390", nombre: "Canutillo 3.90 ct", ct: 3.90, precio: 2000000, nivel: "Selecta", origen: "Colombia", mina: "no especificada", tratamiento: "no especificado",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2Ff7b0df8a-9e85-5d7f-adeb-2c58fcd7d5ad.jpg" },
  { id: "canutillo-oro-432", nombre: "Canutillo Natural Oro 18K 4.32 ct", ct: 4.32, precio: 6000000, nivel: "Exclusiva", origen: "Colombia", mina: "no especificada", tratamiento: "no especificado",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2Fe2a0b6bf-b3fb-5500-94fd-986715fd9627.jpg" },
  { id: "corazon-207", nombre: "Corazón 2.07 ct", ct: 2.07, precio: 2000000, nivel: "Selecta", origen: "Colombia", mina: "no especificada", tratamiento: "no especificado",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2F7f44630f-9e30-558e-bba8-741d328fd888.jpg" },
  { id: "cushion-255", nombre: "Cushion 2.55 ct", ct: 2.55, precio: 1500000, nivel: "Selecta", origen: "Colombia", mina: "no especificada", tratamiento: "no especificado",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2Fe0d17f8f-43e7-52ae-baa0-16100ae88531.jpg" },
  { id: "cuadrada-495", nombre: "Cuadrada 4.95 ct", ct: 4.95, precio: 10000000, nivel: "Exclusiva", origen: "Brasil", mina: "no especificada", tratamiento: "aceite",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2F63348b97-dca3-590e-845c-0096eaf96b5b.jpg" },
  { id: "gangas-1445", nombre: "Gangas 14.45 gr", ct: 14.45, precio: 400000, nivel: "Esencial", origen: "Colombia", mina: "no especificada", tratamiento: "no especificado",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2Fe4bc1f10-d99d-5fbd-83cc-784171ba6989.jpg" },
  { id: "trapiche-134", nombre: "Trapiche 1.34 ct", ct: 1.34, precio: 1000000, nivel: "Esencial", origen: "Colombia", mina: "no especificada", tratamiento: "aceite y perma",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2Fef559f9a-a603-5a86-8232-d276d7e14d88.jpg" },
  { id: "redonda-274", nombre: "Redonda 2.74 ct", ct: 2.74, precio: 800000, nivel: "Esencial", origen: "Colombia", mina: "no especificada", tratamiento: "aceite y perma",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2F33c153a7-6b7e-5d32-89f7-37466a82c2dc.jpg" },
  { id: "rectangular-190", nombre: "Rectangular 1.90 ct", ct: 1.90, precio: 1500000, nivel: "Selecta", origen: "Colombia", mina: "no especificada", tratamiento: "perma",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2F38457f15-874b-5e1a-8596-6f613fed273e.jpg" },
  { id: "lagrima-muzo-1", nombre: "Lágrima Muzo 1 ct", ct: 1, precio: 2000000, nivel: "Selecta", origen: "Colombia", mina: "Muzo", tratamiento: "no especificado",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2F447b5ee5-303b-599f-9168-d8008ae96690.jpg" },
  { id: "lagrima-muzo-283", nombre: "Lágrima Muzo 2.83 ct", ct: 2.83, precio: 3000000, nivel: "Selecta", origen: "Colombia", mina: "Muzo", tratamiento: "no especificado",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2Fbaad297c-94fd-5d2d-9461-f352ccc06b74.jpg" },
  { id: "ganga-2527", nombre: "Ganga 25.27 gr", ct: 25.27, precio: 2000000, nivel: "Selecta", origen: "Colombia", mina: "no especificada", tratamiento: "sin tratamiento",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2Fd765ab7b-31c2-5b8a-8347-2d5b927b0c59.jpg" },
  { id: "macla-1417", nombre: "Macla 14.17 ct", ct: 14.17, precio: 3000000, nivel: "Selecta", origen: "Colombia", mina: "Coscuez", tratamiento: "sin tratamiento",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2F285aba6a-1614-546a-b571-9e707dc16271.jpg" },
  { id: "lote-lagrimas-283", nombre: "Lote de lágrimas 2.83 ct", ct: 2.83, precio: 4000000, nivel: "Selecta", origen: "Colombia", mina: "no especificada", tratamiento: "perma",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2F009fc4cd-cefc-5e98-8d94-0ae3e187ce56.jpg" },
  { id: "baguettes-140", nombre: "Baguettes 1.40 ct", ct: 1.40, precio: 1500000, nivel: "Selecta", origen: "Colombia", mina: "no especificada", tratamiento: "perma",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2Fbc628f50-0e93-59a5-8923-533c483d44b8.jpg" },
  { id: "ovalo-495", nombre: "Óvalo 4.95 ct", ct: 4.95, precio: 2500000, nivel: "Selecta", origen: "Colombia", mina: "no especificada", tratamiento: "no especificado",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2Fee02ea49-2115-5697-b9a4-1bdd26891ff9.jpg" },
  { id: "ovalo-muzo-155", nombre: "Ovalo Muzo 1.55 ct", ct: 1.55, precio: 2500000, nivel: "Selecta", origen: "Colombia", mina: "Muzo", tratamiento: "no especificado",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2F11e7b90c-19e0-5794-b94c-2a18f10ee688.jpg" },
  { id: "pareja-26", nombre: "Pareja Esmeralda +26cts", ct: 26, precio: 4000000, nivel: "Selecta", origen: "Colombia", mina: "no especificada", tratamiento: "no especificado",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2F5df6155f-6087-5501-b330-eeb645dc0caa.jpg" },
  { id: "redonda-diamante-140", nombre: "Redonda talla diamante 1.40 ct", ct: 1.40, precio: 400000, nivel: "Esencial", origen: "Colombia", mina: "no especificada", tratamiento: "no especificado",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2Fc80dfd6f-2046-5af5-82f7-9742ac1b57dd.jpg" },
  { id: "talla-405", nombre: "Talla Esmeralda 4.05 ct", ct: 4.05, precio: 8000000, nivel: "Exclusiva", origen: "Colombia", mina: "no especificada", tratamiento: "no especificado",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2F4b84eae3-b5fb-5476-b0d4-8b6c763b5a9c.jpg" },
  { id: "trapiche-282", nombre: "Trapiche 2.82 ct", ct: 2.82, precio: 2000000, nivel: "Selecta", origen: "Colombia", mina: "no especificada", tratamiento: "aceite y perma",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2F39f800b5-3ed8-5ef5-bf85-c2ecfdce3e6c.jpg" },
  { id: "ganga-422", nombre: "Ganga 4.22 gr", ct: 4.22, precio: 1500000, nivel: "Selecta", origen: "Colombia", mina: "no especificada", tratamiento: "sin tratamiento",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2Fd3175887-3c77-5708-ad69-0bd0157a84a1.jpg" },
  { id: "macla-763", nombre: "Macla 7.63 ct", ct: 7.63, precio: 1200000, nivel: "Selecta", origen: "Colombia", mina: "Chivor", tratamiento: "no especificado",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2Fc08b64e0-5951-5f53-9a72-6981121268ab.jpg" },
  { id: "macla-998", nombre: "Macla 9.98 ct", ct: 9.98, precio: 1200000, nivel: "Selecta", origen: "Colombia", mina: "Chivor", tratamiento: "sin tratamiento",
    img: "https://imgproxy.treinta.co/sig/size:900:::/quality:85/plain/https%3A%2F%2Fcdn.treinta.co%2Fnew-products%2Fproducts%2F78e96f64-42a3-51fd-8411-9360020530a8%2F5c78691c-f3ed-5db9-8d1a-9091731502fc.jpg" }
];

/* Piezas que aparecen en la vitrina del inicio (por id, en este orden) */
const FEATURED = ["gangas-1445", "redonda-diamante-140", "ovalo-495", "lote-lagrimas-283", "macla-1417", "cuadrada-495"];

const WA_NUMBER = "573102169036";

const SLCat = {
  find: function(id){ return PIECES.find(function(p){ return p.id === id; }); },
  t: function(key){ return window.SLI18N ? window.SLI18N.t(key) : key; },
  price: function(n){ return window.SLI18N ? window.SLI18N.formatPrice(n) : ("$" + n.toLocaleString("es-CO") + " COP"); },
  word: function(w){ return window.SLI18N ? window.SLI18N.translateWord(w) : w; },
  name: function(n){ return window.SLI18N ? window.SLI18N.translatePieceName(n) : n; },
  treatment: function(k){ return window.SLI18N ? window.SLI18N.translateTreatmentLabel(k) : k; },
  treatmentInfo: function(k){ return window.SLI18N ? window.SLI18N.translateTreatmentInfo(k) : ""; },
  hasMine: function(p){ return p.mina && p.mina !== "no especificada"; },
  wa: function(msg){ return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg); },
  pieceWa: function(p){ return SLCat.wa(SLCat.t("piece_whatsapp_msg_intro") + " " + SLCat.name(p.nombre) + " · " + SLCat.price(p.precio)); }
};
