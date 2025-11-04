import { useState } from "react";
import { Pencil, Check } from "lucide-react";
export default function Tile({ user, setData }) {
  const { id, name, email, gender, status } = user;
  const [active, setActive] = useState(false);

  function handleEdit() {
    const newId = document.getElementById(id).value;
    const newName = document.getElementById(`${id}-name`).value;
    const newEmail = document.getElementById(`${id}-email`).value;
    const newGender = document.getElementById(`${id}-gender`).value;
    const newStatus = document.getElementById(`${id}-status`).value;
    setData((prev) => {
      const newData = prev.map((user) => {
        if (user.id === id) {
          return {
            id: newId,
            name: newName,
            email: newEmail,
            gender: newGender,
            status: newStatus,
          };
        }

        return user;
      });
      return newData;
    });
  }

  if (!active) {
    return (
      <div className="relative text-sm text-black p-4 gap-[4px] bg-white rounded-lg flex flex-col justify-center">
        <button
          className="absolute top-[10px] right-[10px] cursor-pointer"
          onClick={() => {
            setActive(true);
          }}
        >
          <Pencil />
        </button>
        <div className="flex items-baseline gap-4">
          <p className="font-bold">Id: </p>
          <p>{id}</p>
        </div>
        <div className="flex items-baseline gap-4">
          <p className="font-bold">Name: </p>
          <p>{name}</p>
        </div>
        <div className="flex items-baseline gap-4">
          <p className="font-bold">Email: </p>
          <p>{email}</p>
        </div>
        <div className="flex items-baseline gap-4">
          <p className="font-bold">Gender: </p>
          <p>{gender}</p>
        </div>
        <div className="flex items-baseline gap-4">
          <p className="font-bold">Status: </p>
          <p>{status}</p>
        </div>
      </div>
    );
  } else {
    return (
      <form className="relative text-sm text-black p-4 gap-[4px] bg-white rounded-lg flex flex-col justify-center">
        <button
          className="absolute top-[10px] right-[10px] cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setActive(false);
            handleEdit();
          }}
        >
          <Check color="#5CB338" size={"30px"} />
        </button>
        <label className="flex items-baseline gap-4">
          <p className="font-bold">Id: </p>
          <input
            defaultValue={id}
            id={id}
            className="border-[1px] rounded-[2px] p-[2px]"
          />
        </label>

        <label className="flex items-baseline gap-4">
          <p className="font-bold">Name: </p>
          <input
            defaultValue={name}
            id={`${id}-name`}
            className="border-[1px] rounded-[2px] p-[2px] flex-1"
          />
        </label>
        <label className="flex items-baseline gap-4">
          <p className="font-bold">Email: </p>
          <input
            type="email"
            defaultValue={email}
            id={`${id}-email`}
            className="border-[1px] rounded-[2px] p-[2px] flex-1"
          />
        </label>
        <label className="flex items-baseline gap-4">
          <p className="font-bold">Gender: </p>
          <select
            defaultValue={gender}
            id={`${id}-gender`}
            className="border-[1px] rounded-[2px] p-[2px] flex-1"
          >
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
        </label>
        <label className="flex items-baseline gap-4">
          <p className="font-bold">Status: </p>
          <select
            defaultValue={status}
            id={`${id}-status`}
            className="border-[1px] rounded-[2px] p-[2px] flex-1"
          >
            <option value="active">active</option>
            <option value="inactive">inactive</option>
          </select>
        </label>
      </form>
    );
  }
}
