import { useRouter } from "next/router";

interface CardTypes {
  slug: string;
  frontmatter: {
    [key: string]: any;
  };
}
const AnimationArticleCard = ({ slug, frontmatter }: CardTypes) => {
  const router = useRouter();
  console.log("slug:", slug);

  return (
    //   card border
    <div
      onClick={() => {
        router.push(`/Animation/${slug}`);
      }}
      className="w-[100%] h-max flex-col flex items-center justify-center border-y border-[1px] border-[#323334]"
    >
      <div className="w-[100%] h-[300px] flex items-center justify-center  ">
        {/* actual card */}
        <div className=" w-[300px] md:w-[60%] h-[240px]  rounded-lg z-30 bg-green-400 group cursor-pointer  ">
          <div className="w-[100%] h-[240px] border rounded-lg z-30 p-5 bg-black transition ease-in-out delay-150  group-hover:relative  group-hover:translate-y-5 group-hover:translate-x-10 ">
            {" "}
            {/*hover:border-[#EC519B]*/}
            <div className="w-[100%] h-[50%] flex  items-center justify-center text-white text-3xl md:text-4xl font-bold">
              {frontmatter.title}
            </div>
            <div className="w-[100%] h-[50%] flex items-end text-white ">
              <div className="w-max h-[40px] px-5 bg-red-300 text-black flex items-center justify-center font-bold rounded-[3px]">
                {frontmatter.tags}
              </div>
              <div className="w-[90%]  flex justify-end  text-white font-thin">
                {frontmatter.date}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationArticleCard;
