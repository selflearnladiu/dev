import React, { useEffect, useMemo, useState, useRef } from "react"
import Row from "./row"
import { to1Kg, kgTo } from "formula/weight"
import { find } from "lodash"
const list = [
  {
    title: "磅",
    id: "lb",
  },
  {
    title: "千克",
    id: "kg",
  },
  {
    title: "克",
    id: "g",
  },
  {
    title: "斤",
    id: "kin",
  },
  {
    title: "兩",
    id: "tael",
  },
  {
    title: "盎司",
    id: "oz",
  },
]

function Weight() {
  const [value, setValue] = useState(null)
  const [type, setType] = useState("lb")
  const inputRef = useRef(null)

  const currentType = useMemo(() => {
    return find(list, { id: type }) || {}
  }, [type])

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div className="container h-full mx-auto flex items-center ">
      <div className="max-w-xl mx-auto w-60 shadow-xl shadow-black rounded-md">
        <div className="flex w-full justify-between bg-slate-600 py-2 px-4 rounded-tl-md rounded-tr-md">
          <div>{currentType?.id}</div>
          <div className="flex">
            <input
              type="text"
              placeholder="0"
              ref={inputRef}
              onChange={(e) => setValue(e.target.value)}
              className="w-20 bg-transparent focus:outline-none border-b-2 border-cyan-100 text-right"
            />
            <div className="ml-1">{currentType?.title}</div>
          </div>
        </div>
        {list.map((v, index) => {
          return (
            <Row
              title={v.title}
              id={v.id}
              setType={setType}
              type={type}
              input={value}
              key={index}
              isLast={index === list.length - 1}
              className={`${index > 0 ? "border-t-4" : ""}`}
            ></Row>
          )
        })}
      </div>
    </div>
  )
}

export default Weight
