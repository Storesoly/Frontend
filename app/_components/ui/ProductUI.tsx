import Image from "next/image"

const ProductUI = () => {
    return (
        <div className="relative flex items-center justify-center h-full w-full bg-[#EDE8DF] overflow-hidden py-10">

            {/* Watermark — same as FeaturesSection */}
            <div
                className="absolute inset-x-0 top-10 pointer-events-none select-none overflow-hidden"
                style={{
                    maskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 50%, transparent 90%)",
                    WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 50%, transparent 90%)",
                }}
            >
                <p
                    className="text-center leading-none tracking-[-0.06em] text-[#c8c0b4]"
                    style={{ fontSize: "clamp(110px, 19vw, 240px)", opacity: 0.45 }}
                >
                    Product
                </p>
            </div>

            {/* Image */}
            <div className="relative z-10">
                <Image
                    src="https://pbs.twimg.com/media/HIVvMGHWwAASi0b?format=jpg&name=4096x4096"
                    alt=""
                    width={500}
                    height={500}
                    className="w-[1280px] h-auto object-cover rounded-xl shadow-xl mt-52"
                />
            </div>

        </div>
    )
}

export default ProductUI