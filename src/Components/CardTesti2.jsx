/* eslint-disable react/no-unescaped-entities */
import Star from "./Icon/Star"

const CardTesti2 = () => {
  return (
    <div className="px-3">
            <div className="bg-srWhite h-[324px] rounded-[30px] text-center px-4 py-4">
              <div className="wrap flex  flex-col justify-center h-full items-center">
                <div className="img w-[100px] h-[100px] bg bg-red-200 rounded-full">
                  <img className="h-full object-cover" src="Images/testi1.png" alt="" />
                </div>
                <div className="star mt-4">
                  <Star />
                </div>
                <div className="teks m-auto md:w-[80%]">
                  <div className="text-[15px] text-[#] text-center">
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default CardTesti2