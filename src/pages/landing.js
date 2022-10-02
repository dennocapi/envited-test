import { useNavigate } from 'react-router-dom';
import sc1 from '../images/sc1.png';
import { Button } from '../components/ui';

const Landing = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full h-screen flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between">
            <div className="w-full lg:w-1/2 flex flex-col items-center p-10 lg:p-0  ">
                <div className="w-full flex items-center flex-col text-4xl lg:text-6xl lg:items-end lg:pr-16 text-[#240D57] font-bold">
                    <div>
                        Imagine if
                    </div>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
                        Snapchat
                    </div>
                    <div>
                        had events
                    </div>
                </div>
                <div className="w-full ">
                    <div className="flex lg:flex-col justify-center lg:items-end">
                        <div className="w-3/4 pr-16 text-center lg:text-right text-medium font-light text-base lg:text-2xl">
                            Easily host and share events with your friends across any social media.
                        </div>
                        <div className="pr-16 hidden lg:flex justify-end mt-8">
                            <Button text={"Create my event"} onClick={() => { navigate("/create") }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-3/4 lg:w-1/2 flex flex-col">
                <div className="flex justify-center">
                    <img src={sc1} className="w-3/4 h-3/4 object-cover" alt="screenshot of event"/>
                </div>
                <div className="w-full flex justify-center lg:hidden">
                    <div className="w-1/2">
                        <Button text={"Create my event"} onClick={() => { navigate("/create") }} />

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Landing