import React from "react"
import { useEffect, useState, useMemo, useRef } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import ReactTooltip from "react-tooltip"
import { to1Kg, kgTo } from "formula/weight"
import { round } from "lodash"

function WeightRow({ title, id, input, setType, type, isLast }) {
  const [isMounted, setIsMounted] = useState(false)
  const tooltipRef = useRef(null)
  const value = useMemo(() => {
    const to1KgValue = to1Kg({ type, value: input })
    return round(kgTo({ type: id, value: to1KgValue }), 4)
  }, [type, input])

  const isSelected = id === type

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div
      className={`flex px-4 py-3 bg-slate-800 border-gray-500 ${
        !isLast ? "border-b" : "rounded-bl-md rounded-br-md"
      }`}
    >
      <div className="grow">
        <div
          className={`flex justify-center px-2  border  w-10 h-fit select-none hover:cursor-pointer text-gray-400 ${
            isSelected ? "text-gray-200 border-green-800" : "border-transparent"
          }`}
          onClick={() => setType(id)}
        >
          {id}
        </div>
      </div>
      <div className="flex">
        <div
          data-tip
          data-for="copy"
          data-event="click"
          data-event-off="mouseleave"
          // data-background-color="#999"
          className="px-2"
        >
          <CopyToClipboard text={value}>{value}</CopyToClipboard>
        </div>
        {isMounted && (
          <ReactTooltip
            id="copy"
            type="dark"
            ref={tooltipRef}
            effect="solid"
            afterShow={() => {
              ReactTooltip.hide()
            }}
            globalEventOff="click"
          >
            <div>COPIED!</div>
          </ReactTooltip>
        )}
        <div onClick={() => setType(id)} className="select-none">
          {title}
        </div>
      </div>
    </div>
  )
}

export default WeightRow
