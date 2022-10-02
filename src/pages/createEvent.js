import { useNavigate } from 'react-router-dom'
import { Input, Button, ImageUpload } from '../components/ui'

const CreateEvent = () => {
    const navigate = useNavigate()

    return (
        <div className="w-full flex justify-center items-center py-8">
            <div className="w-full md:w-3/4 flex flex-col bg-white rounded-md border p-5">
                <div className="text-xl font-medium text-[#240D57]">
                    Create new event
                </div>
                <div className="w-full md:grid grid-cols-3 pt-2">
                    <div className="col-span-2 flex flex-col space-y-6">
                        <div>
                            <Input
                                type="text"
                                name="hostName"
                                placeholder="What is the name of the host"
                                autoComplete="off"
                                required={true}
                                label="Name of host"

                            />
                        </div>
                        <div>
                            <Input
                                type="text"
                                name="eventName"
                                placeholder="What is the name of he event"
                                autoComplete="off"
                                required={true}
                                label="Event name"
                            />
                        </div>
                        <div>
                            <Input
                                type="text"
                                name="location"
                                placeholder="Where will the event be happening"
                                autoComplete="off"
                                required={true}
                                label="Event location"
                            />
                        </div>
                        <div>
                            <Input
                                type="datetime-local"
                                name="eventStartTime"
                                placeholder="What time will the event be starting"
                                autoComplete="off"
                                required={true}
                                label="Event start time"
                            />
                        </div>
                        <div>
                            <Input
                                type="datetime-local"
                                name="eventEndTime"
                                placeholder="What time will the event be ending"
                                autoComplete="off"
                                required={true}
                                label="Event ending time"
                            />
                        </div>
                        <div className="w-full flex flex-col">
                            <ImageUpload name="logo" label="Event photo" />
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center md:justify-end mt-5">
                    <div className="flex gap-x-4">
                        <div>
                            <Button text="Next" onClick={() => { navigate('/event') }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default CreateEvent