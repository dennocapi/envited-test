import sc2 from '../images/sc2.png';
import { HiOutlineCalendar, HiOutlineLocationMarker, HiChevronRight } from 'react-icons/hi'

const Event = () => {
    return (
        <div className="w-full h-screen flex justify-center md:items-center bg-[#FBFAFF]">
            <div className="flex flex-col lg:w-3/4 lg:flex-row-reverse">
                <div className="lg:w-1/2">
                    <img src={sc2} alt="Birthday Bash   " />
                </div>
                <div className="lg:w-1/2 flex flex-col p-5">
                    <div className="text-2xl lg:text-5xl font-bold text-[#240D57]">
                        Birthday Bash
                    </div>
                    <div className="text-sm font-light text-[#828282] pt-2">
                        Hosted by Elysia
                    </div>
                    <div className="lg:w-10/12 ">
                        <div className="pt-8 flex flex-col gap-y-5">
                            <div className="flex gap-x-6 items-center justify-between">
                                <div>
                                    <div className="p-3 rounded-md bg-white">
                                        <HiOutlineCalendar size={24} className="text-[#8456EC]" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-base text-[#240D57] font-bold">
                                        18 August 6:00PM
                                    </div>
                                    <div className="text-[#4F4F4F] text-sm font-normal">
                                        to <span className="font-medium">19 August 1:00PM</span> UTC + 10
                                    </div>
                                </div>
                                <div>
                                    <HiChevronRight size={32} className="text-[#BDBDBD]" />
                                </div>
                            </div>
                            <div className="flex gap-x-6 items-center justify-between">
                                <div>
                                    <div className="p-3 rounded-md bg-white">
                                        <HiOutlineLocationMarker size={24} className="text-[#8456EC]" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-base text-[#240D57] font-bold">
                                        18 August 6:00PM
                                    </div>
                                    <div className="text-[#4F4F4F] text-sm font-normal">
                                        to <span className="font-medium">19 August 1:00PM</span> UTC + 10
                                    </div>
                                </div>
                                <div>
                                    <HiChevronRight size={32} className="text-[#BDBDBD]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event;