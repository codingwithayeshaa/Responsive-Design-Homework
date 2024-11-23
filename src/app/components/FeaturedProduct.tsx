import Image from "next/image";

const FeaturedProduct = () => {
    return(
          <div className="bg-pink-100 w-full">
         <div className="flex flex-col sm:flex-row md:flex-row justify-around bg-white py-6">
            <div className="text-center justify-center items-center mt-6 max-w-full">

                <h1 className=" text-pink-700 text-4xl font-extrabold mt-20">LUXURY FLOWERS
                     BY STEVEN MOYSES</h1>
                <p className="text-left font-semibold py-4 mx-4">The world's finest flowers delievered to your
                     door with all the love and care.</p>
           
             <button className="flex flex-col sm:mx-auto px-6 py-4 my-2 mx-4 bg-pink-400 text-white">Buy Now</button>
         </div>
          
            <div className="flex flex-col sm:flex-row justify-between items-center max-sm:w-full">
            <Image src="/flower1.jpg" alt="Flower" width={300} height={200} />
            </div>
      </div>
        
        <div className="flex flex-col sm:row md:row justify-around bg-red-100 py-4">

          <div className="flex flex-col sm:flex-row max-w-full justify-around items-center">   
        <Image src="/flower2.jpg" alt="" width={300} height={300} />
        </div>

         <div className="justify-around mx-24 my-6 max-w-full">
            <h1 className="flex flex-col sm:flex-row font-bold text-4xl text-start ml-4 ">About Us</h1>
        
         <p className="flex flex-col sm:flex-row sm:text-left md:flex-col max-w-full font-medium py-8 text-jusify px-auto">
           Our Team Is Composed Of Passionate Florist,Harticulturist And Flower 
           Enthusiast Who Share a Common Goal: To Spread Happiness And Create 
           Unforgettable Moments Through The Power Of Blooms.We Believe That 
           Flowers Have The Ability to Express Emotions,Celebrate Special
           Occasion & Brighten Up a Day.
         </p>
         <button className="flex flex-col sm:flex-row bg-pink-400 text-white mx-auto px-6 py-4">Read More</button>
     </div>

     </div>


     <div className="bg-pink-100 mb-12">
        <h1 className="text-center text-4xl font-extrabold py-10">Our Products</h1>
        <div className="flex justify-around">
            <div className="flex flex-col items-center">
                <Image src="/flower3.jpg" alt="Flower" width={300} height={200} />
                <p className="text-center font-medium">Snowflake Flower</p>
                <p className="text-center">$13</p>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/flower4.jpg" alt="Flower" width={300} height={200} />
                <p className="text-center font-medium">Snowflake Flower</p>
                <p className="text-center">$15</p>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/flower.jpg" alt="Flower" width={200} height={100} />
                <p className="text-center font-medium">Snowflake Flower</p>
                <p className="text-center">$12</p>
            </div>
        </div>
     </div>
      </div>
    )
}

export default FeaturedProduct;

