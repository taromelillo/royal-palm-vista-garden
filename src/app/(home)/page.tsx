import Slider from '@/components/ui/slider/Slider';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-14">
      <h1>Royal Palm Vista Garden</h1>
      <section className="py-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          dictum vitae ex ut pellentesque. In tincidunt leo ac laoreet
          efficitur. Nunc auctor varius tellus. Sed nec justo nec diam feugiat
          congue. Phasellus vitae ligula nibh. Curabitur imperdiet enim sed orci
          scelerisque iaculis. Morbi porta dui euismod facilisis gravida. Sed ut
          enim eget massa pulvinar mattis sit amet in ex. Aenean a enim interdum
          nunc lobortis ultricies sed ullamcorper lectus. Ut consectetur sit
          amet eros eu fringilla. Etiam vel nulla venenatis, interdum velit eu,
          luctus libero. Donec auctor viverra lacinia. In mollis augue est, et
          laoreet nibh bibendum nec. Praesent et nulla justo. Donec vel purus a
          dolor pellentesque aliquet id molestie mauris. Praesent pretium diam
          ligula, nec porta purus vulputate sit amet. Nam ac nulla at metus
          venenatis vestibulum vel ac ante. Curabitur id ultricies purus, a
          fringilla nunc. Fusce pellentesque maximus commodo. Suspendisse
          sagittis, nibh eu rhoncus ornare, massa felis facilisis sem, a viverra
          sapien leo non tortor. Integer in tempor lacus. Quisque euismod rutrum
          ipsum, ut mattis leo aliquam ac. In sodales dapibus erat eget
          elementum. Proin non gravida erat. Sed in ex quis turpis sagittis
          rhoncus at eget nisl. Vestibulum ornare mi vestibulum, rhoncus massa
          sed, gravida neque. Mauris arcu purus, feugiat eu ligula in, volutpat
          hendrerit augue. Proin eget lorem odio. Duis eu lobortis lacus.
        </p>
      </section>
      <Slider />
      <button className="btn">Press Me</button>
    </div>
  );
}
