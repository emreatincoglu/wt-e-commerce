import { Grid3X3, List } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Kendi yazdığın action'ın adının setSortState olduğunu varsayıyorum
import { setSortState, setFilter } from "../../actions/productActions";

function ShopToolbar() {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.product.productList);

  const [localSort, setLocalSort] = useState("price:asc");

  const handleFilterClick = () => {
    dispatch(setSortState(localSort));
  };

  return (
    <section className="bg-white font-['Montserrat',ui-sans-serif,system-ui]">
      <div className="mx-auto flex min-h-[98px] max-w-[1050px] flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row md:px-0">
        <p className="text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]">
          Showing all {products.length} results
        </p>

        <div className="flex items-center gap-[15px]">
          <span className="text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]">
            Views:
          </span>
          <button
            aria-label="Grid view"
            className="flex h-[46px] w-[46px] items-center justify-center rounded-[5px] border border-[#ececec] text-[#252b42]"
            type="button"
          >
            <Grid3X3 aria-hidden="true" size={16} />
          </button>
          <button
            aria-label="List view"
            className="flex h-[46px] w-[46px] items-center justify-center rounded-[5px] border border-[#ececec] text-[#737373]"
            type="button"
          >
            <List aria-hidden="true" size={16} />
          </button>
        </div>

        <div className="flex items-center gap-[15px]">
          <input
             // Referansı input'a bağlıyoruz
            type="search"
            // Tailwind sınıfları tamamen siyah temaya göre güncellendi
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-black bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-black focus:text-black focus:ring-1 focus:ring-black"
            id="exampleSearch"
            placeholder="Type..."
            onChange={(e) => dispatch(setFilter(e.target.value))}
            // Dışarı tıklandığında (blur olduğunda) çok kısa bir gecikmeyle focus'u geri çağırıyoruz
          />
        </div>

        <div className="flex items-center gap-[15px]">
          <select
            aria-label="Sort products"
            className="h-[50px] w-[155px] rounded-[5px] border border-[#ddd] bg-[#f9f9f9] px-[10px] text-sm leading-7 tracking-[0.2px] text-[#737373] outline-none"
            value={localSort}
            // Seçim değiştiğinde SADECE lokal state değişir, API isteği atılmaz
            onChange={(e) => setLocalSort(e.target.value)}
          >
            <option value="price:asc">Price: Ascending</option>
            <option value="price:desc">Price: Descending</option>
            <option value="rating:asc">Rating: Ascending</option>
            <option value="rating:desc">Rating: Descending</option>
          </select>
          <button
            className="h-[50px] rounded-[5px] bg-[#23a6f0] px-5 text-sm font-bold leading-7 tracking-[0.2px] text-white"
            type="button"
            // 3. Tıklama olayı Redux'ı tetikleyen fonksiyonu çağırır
            onClick={handleFilterClick}
          >
            Filter
          </button>
        </div>
      </div>
    </section>
  );
}

export default ShopToolbar;
