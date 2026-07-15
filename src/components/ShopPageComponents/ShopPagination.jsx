import React from "react";
import ReactPaginateModule from "react-paginate";

const ReactPaginate = ReactPaginateModule.default || ReactPaginateModule;

function ShopPagination({ currentPage, pageCount, onPageChange }) {
  if (!pageCount || pageCount <= 1) {
    return null;
  }

  const controlledPage = Math.min(currentPage, pageCount - 1);

  return (
    <div className="w-full overflow-x-auto pb-2 sm:flex sm:justify-center sm:overflow-visible sm:pb-0">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={onPageChange}
        pageCount={pageCount}
        forcePage={controlledPage}
        pageRangeDisplayed={3}
        previousLabel="First"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={1}
        containerClassName="mx-auto flex h-14 w-max overflow-hidden rounded-[6.728px] border-[1.346px] border-[#bdbdbd] bg-white font-['Montserrat',ui-sans-serif,system-ui] text-xs font-bold leading-6 tracking-[0.2px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] sm:h-[74px] sm:text-sm"
        pageClassName="border-l border-[#e9e9e9] bg-white"
        pageLinkClassName="flex h-full min-w-10 items-center justify-center px-3 text-[#23a6f0] transition-colors hover:bg-[#f8f8f8] sm:min-w-[49px] sm:px-5"
        previousClassName="bg-[#f3f3f3]"
        previousLinkClassName="flex h-full min-w-16 items-center justify-center px-4 text-[#bdbdbd] sm:min-w-[80px] sm:px-[25px]"
        nextClassName="border-l border-[#e8e8e8] bg-white"
        nextLinkClassName="flex h-full min-w-16 items-center justify-center px-4 text-[#23a6f0] transition-colors hover:bg-[#f8f8f8] sm:min-w-[84px] sm:px-[25px]"
        breakClassName="border-l border-[#e9e9e9] bg-white"
        breakLinkClassName="flex h-full min-w-10 items-center justify-center px-3 text-[#23a6f0] sm:min-w-[49px] sm:px-5"
        activeClassName="bg-[#23a6f0]"
        activeLinkClassName="!bg-[#23a6f0] !text-white hover:!bg-[#23a6f0]"
        disabledClassName="cursor-not-allowed"
        disabledLinkClassName="text-[#bdbdbd] hover:bg-transparent"
      />
    </div>
  );
}

export default ShopPagination;
