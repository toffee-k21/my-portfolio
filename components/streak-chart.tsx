import React from 'react'
import { CardContent } from './ui/card'
  // --- 3. Heatmap intensity ---
  const getColorClass = (count: number) => {
    if (count === 0) return "bg-muted"
    if (count < 3) return "bg-primary/30"
    if (count < 6) return "bg-primary/60"
    if (count < 10) return "bg-primary/80"
    return "bg-primary"
  }
const SteakChart = ({weeks}:any) => {
    console.log(weeks)
    if(!weeks) return;
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
                {weeks?.map((week:any, wIndex:any) => (
                <div key={wIndex} className="flex flex-col gap-2">
                    {week?.map((day:any, dIndex:any) => (
                    <div
                        key={dIndex}
                        title={`${day.count} problems on ${day.date.toDateString()}`}
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