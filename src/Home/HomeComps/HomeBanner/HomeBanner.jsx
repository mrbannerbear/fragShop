const HomeBanner = () => {
    return (
        <div className="bg-white">
            <div className="flex justify-center items-center">
                <div className="text-center">
                    <h1 className="font-bold text-2xl">Fragrances That Fit Your Personality</h1>
                    <p className="text-gray-600">Now on Sale for Upto 10%</p>
                </div>
                <div><img className="w-[340px]" src="https://www.coucoushop.com/image/cache/data/products/tom-ford-oud-wood-edp-50ml-3104-550x550h.jpg" alt="" /></div>
            </div>
        </div>
    );
};

export default HomeBanner;