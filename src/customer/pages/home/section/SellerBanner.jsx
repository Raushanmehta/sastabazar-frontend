import { Button } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";

const SellerBanner = () => {
  return (
    <section
      className="relative w-full h-[200px] sm:h-[300px] 
      md:h-[400px] lg:h-[450px] overflow-hidden">
      {/* Background Image */}
      <img  src="https://media.madigital.eu/1/fotos/1809/17102024imagemartigomadezgifcompngtowebpconverterwebp.webp"
        alt="Seller banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r
       from-black/60 via-black/40 to-transparent z-0" />

      {/* Content */}
      <div className="absolute top-1/2 transform -translate-y-1/2
       text-white px-4 sm:px-8 md:px-16 lg:px-32 z-10">
        <h1
          className="text-xl sm:text-3xl md:text-4xl lg:text-5xl 
          font-bold drop-shadow-md">
          Sell Your Products
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-1 sm:mt-2 drop-shadow-md">
          With{" "}
          <span className="font-semibold text-2xl sm:text-3xl text-yellow-300">
            SastaBazar
          </span>
        </p>

        {/* Button Section */}
        <div className="mt-4 sm:mt-6">
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<StorefrontIcon />}>
            Become a Seller
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SellerBanner;
