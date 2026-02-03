import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  // แถวแรก 16 รูป
  { img: "all logoo/all logo-01.png" },
  { img: "all logoo/all logo-02.png" },
  { img: "all logoo/all logo-03.png" },
  { img: "all logoo/Untitled-4.png" },
  { img: "all logoo/all logo-05.png" },
  { img: "all logoo/all logo-06.png" },
  { img: "all logoo/all logo-07.png" },
  { img: "all logoo/all logo-08.png" },
  { img: "all logoo/all logo-09.png" },
  { img: "all logoo/all logo-10.png" },
  { img: "all logoo/all logo-11.png" },
  { img: "all logoo/all logo-12.png" },
  { img: "all logoo/all logo-13.png" },
  { img: "all logoo/all logo-14.png" },
  { img: "all logoo/all logo-15.png" },
  { img: "all logoo/all logo-16.png" },

  // แถวหลัง 20 รูป
  { img: "all logoo/all logo-17.png" },
  { img: "all logoo/all logo-18.png" },
  { img: "all logoo/all logo-19.png" },
  { img: "all logoo/all logo-20.png" },
  { img: "all logoo/Untitled-21.png" },
  { img: "all logoo/all logo-22.png" },
  { img: "all logoo/all logo-23.png" },
  { img: "all logoo/all logo-24.png" },
  { img: "all logoo/all logo-25.png" },
  { img: "all logoo/all logo-26.png" },
  { img: "all logoo/all logo-27.png" },
  { img: "all logoo/all logo-28.png" },
  { img: "all logoo/all logo-29.png" },
  { img: "all logoo/all logo-30.png" },
  { img: "all logoo/all logo-31.png" },
  { img: "all logoo/all logo-32.png" },
  { img: "all logoo/all logo-33.png" },
  { img: "all logoo/all logo-34.png" },
  { img: "all logoo/all logo-35.png" },
  { img: "all logoo/Untitled-36.png" },
];

const firstRow = reviews.slice(0, 16); // เอา 16 รูปแรก
const secondRow = reviews.slice(20, 36); // เอา 16 รูปหลัง

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        " relative h-full  cursor-pointer overflow-hidden rounded-xl border p-4 ",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="w-60 h-60 flex flex-row items-center gap-2 allign-middle justify-center">
        <img
          className="grayscale hover:grayscale-0 hover:brightness-100 object-cover"
          // width="100"
          // height="100"
          alt=""
          src={img}
        />
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden my-20 h-150">
      <Marquee pauseOnHover className="[--duration:50s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:50s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
