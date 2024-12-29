import React, { useState } from "react";

// types
import { IRegister } from "../../types/authen";

// components
import TextInput from "../../../../components/App/TextField/TextInput";

const RegisterForm = () => {
    const [user, setUser] = useState<IRegister>(
        {
            fullName: "",
            username: "",
            password: "",
            email: "",
            mobile: "",
            birhtdate: "",
            image: null,
            isStaff: false,
            isAdmin: false,
            staffCode: null,
            positionID: null
        }
    );

    function handleChangeForm(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    function handleSubmitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
    }

    function handleChangeIsStaff(event: React.ChangeEvent<HTMLInputElement>) {
        const { checked } = event.target

        if (checked == false) {
            setUser((prevUser) => ({ ...prevUser, isStaff: checked, staffCode: null, positionID: null }));
        }
        else {
            setUser((prevUser) => ({ ...prevUser, isStaff: checked }));
        }
    }

    return (
        <>
            <form onSubmit={handleSubmitForm}>
                <div className="mb-12">
                    <h3 className="text-gray-800 text-3xl font-extrabold">Sign Up</h3>
                    <p className="text-sm mt-4 text-gray-800">
                        You have already account <a href="/login" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Sign in here</a>
                    </p>
                </div>
                <div>
                    <TextInput
                        name="Username"
                        type="text"
                        placeholder="Enter Username"
                        value={user.username}
                        onChange={handleChangeForm}
                        isRequire={true}
                        min={6}
                        max={100}

                    />
                </div>
                <div className="mt-5">
                    <TextInput
                        name="Password"
                        type="text"
                        placeholder="Enter Password"
                        value={user.password}
                        onChange={handleChangeForm}
                        isRequire={true}
                        max={150}
                        min={8}
                    />
                </div>
                <div className="mt-5">
                    <TextInput
                        name="Email"
                        type="email"
                        placeholder="Enter Email"
                        value={user.email}
                        onChange={handleChangeForm}
                        isRequire={true}
                    />
                </div>
                <div className="mt-5">
                    <TextInput
                        name="Mobile"
                        type="text"
                        placeholder="Enter Mobile"
                        value={user.mobile}
                        onChange={handleChangeForm}
                        isRequire={true}
                        max={12}
                        min={9}
                    />
                </div>
                <div className="mt-5">
                    <TextInput
                        name="Full-Name"
                        type="text"
                        placeholder="Enter Full-Name"
                        value={user.fullName}
                        onChange={handleChangeForm}
                        isRequire={true}
                        max={150}
                    />
                </div>
                <div className="mt-5">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={user.isStaff}
                            onChange={handleChangeIsStaff}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-800">
                            Register for Staff
                        </label>
                    </div>
                </div>

                {user.isStaff && (
                    <>
                        <div className="mt-5">
                            <label htmlFor="choose department">Department</label>
                            <select
                                id="countries"
                                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-800 dark:gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>

                        <div className="mt-5">
                            <label htmlFor="choose">Position</label>
                            <select
                                id="countries"
                                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-800 dark:gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>

                        <div className="mt-5">
                            <TextInput
                                name="Staff-Code"
                                type="text"
                                placeholder="Enter Staff-Code"
                                value={user.staffCode}
                                onChange={handleChangeForm}
                                isRequire={true}
                                max={20}
                                min={2}
                            />
                        </div>
                    </>
                )}
            </form>
        </>
    )
}


export default RegisterForm