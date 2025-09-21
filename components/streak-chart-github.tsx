import React from 'react'
import { CardContent } from './ui/card'

// --- Heatmap intensity ---
const getColorClass = (count: number) => {
  if (count === 0) return "bg-muted"
  if (count < 3) return "bg-green-500/30"
  if (count < 6) return "bg-green-500/60"
  if (count < 10) return "bg-green-500/80"
  return "bg-green-500"
}

const SteakChart = ({ weeks }: any) => {
  if (!weeks || weeks.length === 0) return null

  return (
    <div>
      <CardContent>
        <div className="w-full flex justify-center">
          <div className="flex gap-2 overflow-x-auto">
            
            {/* Day labels column */}
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
                {week.contributionDays?.map((day: any, dIndex: number) => {
                  const date = new Date(day.date)
                  return (
                    <div
                      key={dIndex}
                      title={`${day.contributionCount} contributions on ${date.toDateString()}`}
                      className={`w-3 h-3 rounded-sm ${getColorClass(day.contributionCount)}`}
                    />
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </div>
  )
}

export default SteakChart
