import React, { useEffect, useRef } from 'react'
import { CardContent } from './ui/card'

// --- Heatmap intensity ---
const getColorClass = (count: number) => {
  if (count === 0) return "bg-muted"
  if (count < 3) return "bg-primary/30"
  if (count < 6) return "bg-primary/60"
  if (count < 10) return "bg-primary/80"
  return "bg-primary"
}

const SteakChart = ({ weeks }: any) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll to rightmost position on mount
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth
    }
  }, [weeks])

  if (!weeks) return null

  return (
    <div>
      <CardContent>
        <div className="w-full flex justify-center">
          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto scrollbar-none"
          >
            {/* Day labels */}
            <div className="flex flex-col gap-2 mr-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayLabel) => (
                <div
                  key={dayLabel}
                  className="h-3 flex items-center justify-end text-[8px] text-muted-foreground w-6"
                >
                  {dayLabel}
                </div>
              ))}
            </div>

            {/* Heatmap weeks */}
            {weeks.map((week: any, wIndex: number) => (
              <div key={wIndex} className="flex flex-col gap-2">
                {week?.map((day: any, dIndex: number) => (
                  <div
                    key={dIndex}
                    title={`${day.count} problems on ${new Date(day.date).toDateString()}`}
                    className={`w-3 h-3 rounded-sm ${getColorClass(day.count)}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </div>
  )
}

export default SteakChart
