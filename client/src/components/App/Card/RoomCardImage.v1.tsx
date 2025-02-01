import React from "react";
import { IRoom } from "../../../modules/room/types/room.type";


interface IRoomCardImageV1Props {
    data: IRoom
}

const RoomCardImageV1: React.FC<IRoomCardImageV1Props> = ({data}) => {
    const defaultCoverImage: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb059sWW_SdTPurdrcdo6-YmB-WF-JpJD7zD-rG_QiR9NLfm7IGNPNg1nvmKbugk6NjQY&usqp=CAU"

    return (
        <div className="max-w-md bg-white border border-gray-400 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700">
            <img className="rounded-t-lg" src={data.coverImage || defaultCoverImage} alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{data.name}</h5>

                <div className="">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-500 ">
                        {data.detail || "No detail"}
                    </p>
                </div>
                <div className="flex justify-items-center">
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-200 bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Booking
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                    <p className="mx-8"><b>FREE</b></p>
                </div>
            </div>
        </div>
    )
}

export default RoomCardImageV1