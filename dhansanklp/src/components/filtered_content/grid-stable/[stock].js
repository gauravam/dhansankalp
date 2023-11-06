import { useRouter } from "next/router";
import { stockData } from "@/constants/stockdata"; // Check the import path
import Image from "next/image";
import ReactMarkdown from "react-markdown";

const Stock = () => {
  const router = useRouter();
  const { stock } = router.query;

  const temp = stockData[6];
  console.log(temp);

  const formatAnalysisGreen = (analysis) => {
    const sections = analysis.split("\n\n");

    return sections.map((section, index) => {
      const lines = section.split("\n");

      return (
        <div key={index} style={{ marginBottom: "20px" }}>
          {lines.map((line, index) => (
            <p key={index} style={{ marginBottom: "10px", fontWeight: "bold" }}>
              {line}
            </p>
          ))}
        </div>
      );
    });
  };

  return (
    <div class="bg-gray-100">
      <table class="max-w-8xl mx-auto mt-10">
        <tbody>
          <tr>
            <td colSpan="8">
              <div class="bg-white rounded-lg shadow-md p-5">
                <div class="text-center">
                  <Image
                    class="rounded-full mx-auto"
                    src={temp.Img}
                    alt="Profile picture"
                    width={60}
                    height={60}
                  />
                  <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-3">
                    {temp.Name}
                  </h2>
                  <h2 class="text-gray-600 mt-1 font-semibold">
                    {temp.Sector}
                  </h2>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="8">
              <div class="bg-white rounded-lg shadow-md p-5">
                <div class="text-center ">
                  <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold">
                    Growth Rate
                    {temp.TechincalRating === 1 && " - Very Poor 😞"}
                    {temp.TechincalRating === 2 && " - Below par 😐"}
                    {temp.TechincalRating === 3 && " - Good to hold 🙂"}
                    {temp.TechincalRating === 4 && " - Very Good Growth 😊"}
                  </h3>
                </div>
                <div className="mt-1 ">
                  <h2 className="mb-5 text-center font-bold p-5 ">
                    Overview of Recent Results
                  </h2>
                  <div className="pl-10">
                    {formatAnalysisGreen(temp.ConCallAnalysis)}
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Stock;
