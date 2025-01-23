import React, { useState } from "react";

// component
import SelectBasic from "../../../components/App/Select/SelectBasicInput";
import TextInput from "../../../components/App/TextField/TextInput";
import RoomCardImageV1 from "../../../components/App/Card/RoomCardImage.v1";

const RoomList: React.FC = () => {

    const [floor, setFloor] = useState<number | null>()
    const [searchText, setSearchText] = useState<string>('')

    // TODO: should hane Company setting and define max floor
    const floors = [
        {
            floor: 1
        },
        {
            floor: 2
        },
        {
            floor: 3
        }
    ]

    function handleChangeFloorFilter(value: any) {
        setFloor(Number(value));
    }

    function handleChangeSearchText(event: React.ChangeEvent<any>) {
        const { value } = event.target
        setSearchText(value)
    }

    console.log(floor, searchText);
    

    return (
        <>
            <div className="container mx-auto py-3">
                <div className="mt-6 px-8">
                    <div className="grid grid-cols-1 mb-3">
                        <div className="flex mt-2">
                            <div className="">
                                <SelectBasic
                                    isRequire={false}
                                    options={floors}
                                    valueField="floor"
                                    labelField="floor"
                                    onChange={handleChangeFloorFilter}
                                    defalutLable="Floor"
                                    defalutValue={null}
                                />
                            </div>
                            <div className="mx-4">
                                <SelectBasic
                                    isRequire={false}
                                    options={floors}
                                    valueField="floor"
                                    labelField="floor"
                                    onChange={handleChangeFloorFilter}
                                    defalutLable="Room Type"
                                    defalutValue={null}
                                    includeClassName="w-40"
                                />
                            </div>
                            <div className="w-2/4">
                                <TextInput
                                    type="text"
                                    name="search"
                                    isRequire={false}
                                    closeLable={true}
                                    onChange={handleChangeSearchText}
                                    placeholder="Search Room"
                                />
                            </div>
                            <div className="mx-2 h-4">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Search
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 mt-8">
                        <div className="mt-2 mx-2">
                            <RoomCardImageV1 />
                        </div> 
                        <div className="mt-2 mx-2">
                            <RoomCardImageV1 />
                        </div>    
                        <div className="mt-2 mx-2">
                            <RoomCardImageV1 />
                        </div>    
                        <div className="mt-2 mx-2">
                            <RoomCardImageV1 />
                        </div>    
                        <div className="mt-2 mx-2">
                            <RoomCardImageV1 />
                        </div>    
                        <div className="mt-2 mx-2">
                            <RoomCardImageV1 />
                        </div>                           
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomList;