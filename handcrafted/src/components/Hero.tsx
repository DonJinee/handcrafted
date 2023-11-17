export default function Hero () {
    return (
        <div className="bg-cover hg-100%" style={{ 
            backgroundImage: `url("/images/landing.svg")`, 
        }}>
            <div className="grid grid-cols-4 h-full p-8 mb-2 bg-gray-600 mt-4 ml-20" >
                <div className="border-solid border-4 border-gray-600 max-w-md mt-16 p-8 mb-64 rounded-2xl col-start-1 col-end-3 row-start-1 row-end-4">
                    <h1 className="font-bold underline">You are Welcome to Handcrafted Haven</h1>
                    <p className="text-purple-700 text-opacity-100">Handcrafted Haven is an innovative web application that aims to 
                        provide a platform for artisans and crafters to showcase and sell
                        their unique handcrafted items. It serves as a virtual marketplace, connecting 
                        talented creators with potential customers who appreciate the beauty 
                        and quality of handmade products. 
                    </p>
                </div>
                <div className="border-indigo-700 bg-opacity-100 max-w-md border-solid border-4 rounded-2xl mt-64 mb-2 p-8 col-start-3 col-end-5 h-auto shadow-2xl opacity-100">
                    <p>Handcrafted Haven aims to revolutionize the way handcrafted items are discovered, 
                        appreciated, and acquired. By providing a digital platform for artisans to showcase 
                        their creativity and connect with a broader audience, the web application fosters a 
                        thriving community of passionate creators and conscious consumers. 
                        With its user-friendly features, secure e-commerce capabilities, and emphasis 
                        on customization and community engagement, Handcrafted Haven is set to become the go-to 
                        destination for those seeking unique, handcrafted treasures.
                    </p>

                </div>
            </div>
        </div>  
    );
}