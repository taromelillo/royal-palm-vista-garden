import { slider } from '@/assets';
import { Slider } from '@/components';

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center my-2 gap-4">
      <div className="w-full h-[800px]">
        <Slider />
      </div>
      <section className="flex flex-col-reverse md:flex-row w-full md:px-10 animation-reveal">
        <article className="h-[500px] tracking-normal sm:leading-10 md:w-1/2 lg:leading-12 flex flex-col justify-center  md:justify-evenly items-center px-8 gap-4">
          <h2 className="text-xl">Lorem ipsum dolor sit amet</h2>
          <p className="text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            dictum vitae ex ut pellentesque. In tincidunt leo ac laoreet
            efficitur. Nunc auctor varius tellus. Sed nec justo nec diam feugiat
            congue. Phasellus vitae ligula nibh. Curabitur imperdiet enim sed
            orci scelerisque iaculis.
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
        <article className="h-[500px] px-8 sm:px-24 md:px-8 tracking-normal sm:leading-10 md:w-1/2 lg:leading-12 flex flex-col justify-center  md:justify-evenly items-center gap-4">
          <h2 className="text-xl">Lorem ipsum dolor sit amet</h2>
          <p className="text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            dictum vitae ex ut pellentesque. In tincidunt leo ac laoreet
            efficitur. Nunc auctor varius tellus. Sed nec justo nec diam feugiat
            congue. Phasellus vitae ligula nibh. Curabitur imperdiet enim sed
            orci scelerisque iaculis.
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
