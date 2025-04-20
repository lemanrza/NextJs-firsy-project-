import React from "react";

const weights = [
  "0 - 0.1 kq",
  "0.101 - 0.25 kq",
  "0.251 - 0.5 kq",
  "0.501 - 0.75 kq",
  "0.751 - 1 kq",
  "1 - 5000 kq",
];

const prices = {
  adi: ["1.68 ₼", "3.38 ₼", "5.10 ₼", "6.14 ₼", "6.65 ₼", "6.65 ₼"],
  maye: ["2.74 ₼", "5.66 ₼", "8.06 ₼", "9.95 ₼", "10.97 ₼", "10.97 ₼"],
  tehlukeli: ["2.74 ₼", "5.66 ₼", "8.06 ₼", "9.95 ₼", "10.97 ₼", "10.97 ₼"],
};

const Tarifler = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-8">
      <div className="grid grid-cols-4 gap-4 w-full max-w-6xl">
        <div className="bg-white rounded-xl shadow p-6 h-[500px]">
          <h2 className="font-semibold text-lg mb-4 text-black">⚖️ Çəki (kq)</h2>
          <ul className="space-y-6 text-sm text-black">
            {weights.map((w, idx) => (
              <li key={idx}>{w}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow p-6 h-[500px]">
          <h2 className="font-semibold text-lg mb-4 text-black">📦 Adi</h2>
          <ul className="space-y-6 text-sm text-black">
            {prices.adi.map((price, idx) => (
              <li key={idx}>{price}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow p-6 h-[500px]">
          <h2 className="font-semibold text-lg mb-4 text-black">💧 Maye</h2>
          <ul className="space-y-6 text-sm text-black">
            {prices.maye.map((price, idx) => (
              <li key={idx}>{price}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow p-6 h-[500px]">
          <h2 className="font-semibold text-lg mb-4 text-black">💧 Təhlükəli</h2>
          <ul className="space-y-6 text-sm text-black">
            {prices.tehlukeli.map((price, idx) => (
              <li key={idx}>{price}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tarifler;
