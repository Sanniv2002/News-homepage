import logo from "../assets/logo.svg"
import desktop from "../assets/image-web-3-desktop.jpg"
import retro from "../assets/image-retro-pcs.jpg"
import gaming from "../assets/image-gaming-growth.jpg"
import laptops from "../assets/image-top-laptops.jpg"

export default function Page(){
    return <section className="flex-col mx-28 my-20">
        {/* Top Nav Bar */}
        <div className="flex justify-between">
            <img src={logo} alt="" />
            <div className="flex justify-evenly">
                <button className="text-[#7e7c8b] pr-12 hover:text-[#ef9088] focus:text-[#f6a09a]">Home</button>
                <button className="text-[#7e7c8b] pr-12 hover:text-[#ef9088] focus:text-[#f6a09a]">New</button>
                <button className="text-[#7e7c8b] pr-12 hover:text-[#ef9088] focus:text-[#f6a09a]">Popular</button>
                <button className="text-[#7e7c8b] pr-12 hover:text-[#ef9088] focus:text-[#f6a09a]">Trending</button>
                <button className="text-[#7e7c8b] pr-12 hover:text-[#ef9088] focus:text-[#f6a09a]">Between</button>
            </div>
        </div>
        {/* Top Nav Bar */}

        <div className="grid grid-cols-3 gap-6 pt-16">
            <div className="col-span-2">
                <img src={desktop} alt="" />
                <div className="flex justify-center pt-10">
                    <h2 className="text-black font-bold text-5xl pr-8">The Bright Future of Web 3.0?</h2>
                    <div className=" pl-36">
                        <p>We dive into the next evolution of web that claims to put power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                        <button className="px-8 py-2 mt-9 font-sans font-medium text-white bg-[#f15d51] hover:bg-black transition-colors duration-300">READ MORE</button>
                    </div>
                </div>
            </div>

            <div className="col-span-1 bg-[#00001a]">
                <h2 className="text-[#e4ab53] font-bold text-4xl pt-9 pl-7">New</h2>
                <div className="pl-7 pt-10 pr-7">
                    <h2 className="text-white font-semibold text-xl hover:text-[#e1a963]">Hydrogen VS Electric Cars</h2>
                    <p className="text-[#a8a8c3] text-sm text-wrap pt-3">Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
                <div className="pl-7 pt-10 pr-7">
                    <h2 className="text-white font-semibold text-xl hover:text-[#e1a963]">The Downsides of AI Artistry</h2>
                    <p className="text-[#a8a8c3] text-sm text-wrap pt-3">What are the possible adverse effects of on-demand AI image generation?</p>
                </div>
                <div className="pl-7 pt-10 pr-7">
                    <h2 className="text-white font-semibold text-xl hover:text-[#e1a963]">Is VC Funding Drying Up</h2>
                    <p className="text-[#a8a8c3] text-sm text-wrap pt-3">Private funding of VC firms is down 50% YOY. We take a look at what that means</p>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-3 gap-12 pt-24">
            <div className="grid grid-cols-2">
                <img className="w-32 h-40 col-span-1" src={retro} alt="" />
                <div>
                    <h2 className="text-[#c8c7cd] text-5xl font-semibold">01</h2>
                    <h2 className="text-black font-bold text-xl pt-2">Reviving Retro PCs</h2>
                    <p className="text-[#78767e] pt-2 text-wrap">What happens when old PCs are given modern upgrades</p>
                </div>
            </div>

            <div className="grid grid-cols-2">
                <img className="w-32 h-40 col-span-1" src={laptops} alt="" />
                <div>
                    <h2 className="text-[#c8c7cd] text-5xl font-semibold">02</h2>
                    <h2 className="text-black font-bold text-xl pt-2">Top 10 Laptops of 2022</h2>
                    <p className="text-[#78767e] pt-2 text-wrap">Our best picks for various needs nd budgets.</p>
                </div>
            </div>

            <div className="grid grid-cols-2">
                <img className="w-32 h-40 col-span-1" src={gaming} alt="" />
                <div>
                    <h2 className="text-[#c8c7cd] text-5xl font-semibold">03</h2>
                    <h2 className="text-black font-bold text-xl pt-2">The Growth of Gaming</h2>
                    <p className="text-[#78767e] pt-2 text-wrap">How the pandemic hsa sparked fresh oppurtunities</p>
                </div>
            </div>
        </div>
    </section>
}