import { slider } from '@/assets';
import { Calendar, Checkout, Title } from '@/components';

export default function Book() {
  return (
    <div className="">
      <div className="h-[20rem] block">
        {/* <h1
          className="relative"
          style={{
            fontSize: "10rem",
            textTransform: "uppercase",
            fontWeight: 800,
            position: "relative",
            zIndex: "3",
            lineHeight: 1,
            top: "25%",
            left: "20%",
          }}
        >
          Book now
        </h1> */}
        <img
          src={`${slider[0]}`}
          className="object-cover object-center absolute top-0 left-0 bottom-0"
          style={{
            width: '100%',
            height: '25rem',
            WebkitMaskImage: 'linear-gradient(rgb(0 0 0 / 1), transparent)',
            maskImage: 'linear-gradient(rgb(0 0 0 / 1), transparent)',
          }}
          alt=""
        />
      </div>
      {/* <Title title="Book now" /> */}
      <Calendar />
      <Checkout />
    </div>
  );
}
