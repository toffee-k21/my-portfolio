"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, TrendingUp } from "lucide-react"
import { useAppContext } from "@/utils/Context"

export function DSASection() {
  const { leetcode, gfg } = useAppContext()
  const submissionCalendar = leetcode?.submissionCalendar || {}
  const totalSolved = leetcode?.totalSolved;
  const totalQuestions = leetcode?.totalQuestions;

  // Convert submissionCalendar keys to a Set for quick lookup
  const calendarMap = new Map<number, number>()
  Object.entries(submissionCalendar).forEach(([timestamp, count]) => {
    calendarMap.set(Number(timestamp), count as number)
  })

  // --- 1. Build a full year (365 days) from today backwards ---
  const today = new Date()
  const oneYearAgo = new Date()
  oneYearAgo.setUTCDate(today.getUTCDate() - 365) // use UTC to align

  const fullDaysArray: { date: Date; count: number }[] = []
  for (
    let d = new Date(oneYearAgo);
    d <= today;
    d.setUTCDate(d.getUTCDate() + 1) // increment in UTC
  ) {
    // Force to midnight UTC timestamp
    const utcMidnight = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()) / 1000
    const count = calendarMap.get(utcMidnight) || 0
    fullDaysArray.push({ date: new Date(utcMidnight * 1000), count })
  }

  // --- 2. Group into weeks (GitHub style) ---
  const weeks: { date: Date; count: number }[][] = []
  let week: { date: Date; count: number }[] = []

  // Pre-fill first week so it starts on Sunday
  const firstDay = fullDaysArray[0].date.getDay() // 0=Sun,6=Sat
  for (let i = 0; i < firstDay; i++) {
    week.push({ date: new Date(), count: 0 })
  }

  fullDaysArray.forEach((day) => {
    week.push(day)
    if (week.length === 7) {
      weeks.push(week)
      week = []
    }
  })
  if (week.length) weeks.push(week)

  // --- 3. Heatmap intensity ---
  const getColorClass = (count: number) => {
    if (count === 0) return "bg-muted"
    if (count < 3) return "bg-primary/30"
    if (count < 6) return "bg-primary/60"
    if (count < 10) return "bg-primary/80"
    return "bg-primary"
  }

  const platforms = [
    {
      name: "LeetCode",
      solved: totalSolved,
      total: totalQuestions,
      easySolved: leetcode?.easySolved,
      mediumSolved: leetcode?.mediumSolved,
      hardSolved: leetcode?.hardSolved,
      totalEasy: leetcode?.totalEasy,
      totalMedium: leetcode?.totalMedium,
      totalHard: leetcode?.totalHard,
      ranking: leetcode?.ranking,
      acceptanceRate: leetcode?.acceptanceRate,
      color: "bg-orange-500",
      recent: ["Two Sum", "Valid Parentheses", "Merge Two Sorted Lists"],
    },
    {
      name: "GeeksforGeeks",
      solved: gfg?.info?.totalProblemsSolved,
      total: 1000,
      easySolved: gfg?.solvedStats?.easy?.count,
      mediumSolved: gfg?.solvedStats?.medium?.count,
      hardSolved: gfg?.solvedStats?.hard?.count,
      totalEasy: 400,
      totalMedium: 400,
      totalHard: 200,
      ranking: 15231,
      acceptanceRate: 61.0,
      color: "bg-green-500",
      recent: ["Graph Algorithms", "Tree Traversal", "Sorting Techniques"],
    },
    {
      name: "CodeChef",
      solved: 156,
      total: 500,
      easySolved: 40,
      mediumSolved: 80,
      hardSolved: 36,
      totalEasy: 200,
      totalMedium: 200,
      totalHard: 100,
      ranking: 53242,
      acceptanceRate: 74.2,
      color: "bg-amber-500",
      recent: ["Chef and Strings", "Binary Search", "Dynamic Programming"],
    },
  ]
  

  return (
    <section id="dsa" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Problem Solving Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            "Every problem is an opportunity to grow. I solve problems daily not
            just to crack interviews, but because the logic and patterns I learn
            make me a better developer every day."
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {platforms.map((platform, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{platform.name}</CardTitle>
                  <div className={`w-3 h-3 rounded-full ${platform.color}`} />
                </div>
              </CardHeader>
              <CardContent>
  <div className="space-y-4">
    {/* Progress Bar */}
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>Progress</span>
        <span>
          {platform.solved}/{platform.total}
        </span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2">
        <div
          className={`h-2 rounded-full ${platform.color}`}
          style={{ width: `${(platform.solved / platform.total) * 100}%` }}
        />
      </div>
    </div>

    {/* Easy/Medium/Hard */}
    <div className="grid grid-cols-3 gap-2 text-center text-xs">
      <div className="p-2 rounded bg-muted">
        <p className="font-semibold text-green-600">Easy</p>
        <p>
          {platform.easySolved}/{platform.totalEasy}
        </p>
      </div>
      <div className="p-2 rounded bg-muted">
        <p className="font-semibold text-yellow-600">Medium</p>
        <p>
          {platform.mediumSolved}/{platform.totalMedium}
        </p>
      </div>
      <div className="p-2 rounded bg-muted">
        <p className="font-semibold text-red-600">Hard</p>
        <p>
          {platform.hardSolved}/{platform.totalHard}
        </p>
      </div>
    </div>

    {/* Ranking + Acceptance */}
    <div className="flex justify-between text-xs text-muted-foreground">
      <span>Ranking: <b>{platform.ranking}</b></span>
      <span>Acceptance: <b>{platform.acceptanceRate}%</b></span>
    </div>

    {/* Recent Problems */}
    <div>
      <p className="text-sm font-medium mb-2">Recent Solves:</p>
      <div className="flex flex-wrap gap-2">
        {platform.recent.map((problem, i) => (
          <Badge key={i} variant="secondary" className="text-xs">
            {problem}
          </Badge>
        ))}
      </div>
    </div>
  </div>
</CardContent>

            </Card>
          ))}
        </div>

        {/* Activity Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Daily Problem Solving Activity
            </CardTitle>
          </CardHeader>
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
      {weeks.map((week, wIndex) => (
        <div key={wIndex} className="flex flex-col gap-2">
          {week.map((day, dIndex) => (
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
        </Card>

        {/* Motivation Quote */}
        <div className="text-center">
          <blockquote className="text-xl italic text-muted-foreground max-w-3xl mx-auto">
            "The best time to plant a tree was 20 years ago. The second best time
            is now. Every algorithm I master today is a step closer to my dream
            company."
          </blockquote>
        </div>
      </div>
    </section>
  )
}
