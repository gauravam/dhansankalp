import { useRouter } from "next/router";

const Stock = () => {
  const router = useRouter();
  const { stock } = router.query;

  return (
    <div>
      {stock}
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4">
        <div className="bg-red-500 h-50 col-span-2 row-span-4">1</div>
        <div className="bg-blue-500 h-24">2</div>
        <div className="bg-green-500 h-24">3</div>
        <div className="bg-yellow-500 h-24">4</div>
        <div className="bg-purple-500 h-24">5</div>
        <div className="bg-indigo-500 h-24">6</div>
        <div className="bg-pink-500 h-24">7</div>
        <div className="bg-cyan-500 h-24">8</div>
        <div className="bg-teal-500 h-24">9</div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-1 gap-4">
        <div class="bg-green-500 h-24 flex items-center justify-center text-white text-2xl">
          3
        </div>
        <div class="bg-blue-500 h-24 flex items-center justify-center text-white text-2xl">
          4
        </div>
      </div>
    </div>
  );
};

export default Stock;
