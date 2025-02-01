import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
// component
import SelectBasic from "../../../components/App/Select/SelectBasicInput";
import TextInput from "../../../components/App/TextField/TextInput";
import RoomCardImageV1 from "../../../components/App/Card/RoomCardImage.v1";
import { IUserPayload } from "../../../types/interfaces/user.interface";
import { IRoomType } from "../types/roomType.type";
import { roomTypeApi } from "../api/roomType.api";
import { roomApi } from "../api/room.api";
import { IRoom } from "../types/room.type";


interface IUserProps {
    auth: Promise<IUserPayload>,
}


const RoomList: React.FC<IUserProps> = ({auth}) => {

    const [floor, setFloor] = useState<number | null>()
    const [RoomTypeFilter, setRoomTypeFilter] = useState<string | number | null>()

    const [searchText, setSearchText] = useState<string>('')

    const [roomType, setRoomType] = useState<IRoomType[]>([])
    const [rooms, setRooms] = useState<IRoom[]>([])
    const [user, setUser] = useState<IUserPayload>()

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

    function handleChangeRoomTypeFilter(value: any) {
        setRoomTypeFilter(value)
    }

    function handleChangeSearchText(event: React.ChangeEvent<any>) {
        const { value } = event.target
        setSearchText(value)
    }

    auth.then((res) => {
        setUser(res)
    })

    const roomTypeApi_ = roomTypeApi()
    const roomApi_ = roomApi()

    useEffect(() => {
        async function fetchRoomTypes() {
            try {
                const roomTypes = await roomTypeApi_.getAll({})
                if (roomTypes) {
                    setRoomType(roomTypes)
                }
            }catch (error) {
                // alert("ohh! have someting error please try again.")
                console.log(error);
            }
        }
        fetchRoomTypes()
    }, [])

    useEffect(() => {
        async function fetchRoom() {
            try {
              const rooms = await roomApi_.getAll({})
              if (rooms) {
                setRooms(rooms)
              }
    
            }catch(error) {
                // alert("ohh! have someting error please try again.")
                console.log(error);
            }
        }
    
        fetchRoom()

    }, [])

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
                                    options={roomType}
                                    valueField="id"
                                    labelField="name"
                                    onChange={handleChangeRoomTypeFilter}
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

                        {
                            user?.isStaff ? <div className="flex mt-2">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Create Room
                                </button>
                            </div> : <></>
                        }

                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 mt-8">
                        {
                            rooms.map((item) => (
                                <div className="mt-2 mx-2">
                                <RoomCardImageV1 data={item} />
                            </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = function(state: any) {
    return {
      auth: state.auth || {}
    }
}

export default connect(mapStateToProps)(RoomList);