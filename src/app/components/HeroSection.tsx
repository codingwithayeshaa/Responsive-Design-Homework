export default function HeroSection(){
    return(
            <div className="flex flex-col sm:flex-row items-center bg-pink-100 py-4">
        <div className="flex justify-around w-full">
           <h1 className="text-pink-950 font-extrabold sm:text-4xl text-2xl px-4">Flowery!</h1>
        
            <ul className="flex flex-col sm:flex-row font-medium sm:ml-auto items-center space-y-4 sm:space-x-6 sm:space-y-0 px-4 gap-8 bg-pink-100">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
            </ul>
          </div> 
          </div>
    )
}
       
    
//  bg-pink-100 justify-around ml-auto space-x-16 pr-6 gap-6