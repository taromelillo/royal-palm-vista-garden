import { slider } from "@/assets";
import { Slider } from "@/components";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center my-2 gap-24">
      <div className="w-full h-[800px]">
        <Slider />
      </div>
      <section className="flex flex-col-reverse md:flex-row w-full md:px-10 animation-reveal">
        <article className="tracking-normal bg-red-900 md:w-1/2 tracking-widest md:bg-green-200 leading-12 flex items-center px-8">
          <p className="text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            dictum vitae ex ut pellentesque. In tincidunt leo ac laoreet
            efficitur. Nunc auctor varius tellus. Sed nec justo nec diam feugiat
            congue. Phasellus vitae ligula nibh. Curabitur imperdiet enim sed
            orci scelerisque iaculis. Morbi porta dui euismod facilisis gravida.
            Sed ut enim eget massa pulvinar mattis sit amet in ex. Aenean a enim
            interdum nunc lobortis ultricies sed ullamcorper lectus. Ut
            consectetur sit amet eros eu fringilla.
          </p>
        </article>
        <div className="flex justify-center h-[500px] md:w-1/2 rounded overflow-hidden">
          <img
            src="https://res.cloudinary.com/didni0nof/image/upload/v1703882780/samples/rpvg-assets/rpvg9_mrf1c1.jpg"
            alt=""
            className="object-cover object-center scale-[1.5]"
          />
        </div>
      </section>
      <section className="flex flex-col-reverse md:flex-row-reverse w-full md:px-10 animation-reveal">
        <article className=" md:w-1/2 tracking-widest leading-12 flex items-center px-8">
          <p className="text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            dictum vitae ex ut pellentesque. In tincidunt leo ac laoreet
            efficitur. Nunc auctor varius tellus. Sed nec justo nec diam feugiat
            congue. Phasellus vitae ligula nibh. Curabitur imperdiet enim sed
            orci scelerisque iaculis. Morbi porta dui euismod facilisis gravida.
            Sed ut enim eget massa pulvinar mattis sit amet in ex. Aenean a enim
            interdum nunc lobortis ultricies sed ullamcorper lectus. Ut
            consectetur sit amet eros eu fringilla.
          </p>
        </article>
        <div className="flex justify-center h-[500px] md:w-1/2 rounded overflow-hidden">
          <img
            src="https://res.cloudinary.com/didni0nof/image/upload/v1703897828/samples/rpvg-assets/rpvg2_non9mw.jpg"
            alt=""
            className="object-cover object-center scale-[1] md:scale-[1.5]"
          />
        </div>
      </section>
    </div>
  );
}
