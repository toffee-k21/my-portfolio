"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, TrendingUp } from "lucide-react"

export function DSASection() {
  const platforms = [
    {
      name: "LeetCode",
      solved: 347,
      total: 3000,
      streak: 47,
      color: "bg-orange-500",
      recent: ["Two Sum", "Valid Parentheses", "Merge Two Sorted Lists"],
    },
    {
      name: "CodeChef",
      solved: 156,
      total: 500,
      streak: 23,
      color: "bg-amber-500",
      recent: ["Chef and Strings", "Binary Search", "Dynamic Programming"],
    },
    {
      name: "GeeksforGeeks",
      solved: 89,
      total: 1000,
      streak: 15,
      color: "bg-green-500",
      recent: ["Graph Algorithms", "Tree Traversal", "Sorting Techniques"],
    },
  ]

  return (
    <section id="dsa" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Problem Solving Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            "Every problem is an opportunity to grow. I solve problems daily not just to crack interviews, but because
            the logic and patterns I learn make me a better developer every day."
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

                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{platform.streak} day streak</span>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Recent Solves:</p>
                    <div className="flex flex-wrap gap-1">
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

        {/* Activity Chart Placeholder */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Daily Problem Solving Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-1 mb-4">
              {Array.from({ length: 49 }, (_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-sm ${
                    Math.random() > 0.3 ? "bg-primary/80" : Math.random() > 0.6 ? "bg-primary/40" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              592 problems solved in the last year • Longest streak: 47 days
            </p>
          </CardContent>
        </Card>

        {/* Motivation Quote */}
        <div className="text-center">
          <blockquote className="text-xl italic text-muted-foreground max-w-3xl mx-auto">
            "The best time to plant a tree was 20 years ago. The second best time is now. Every algorithm I master today
            is a step closer to my dream company."
          </blockquote>
        </div>
      </div>
    </section>
  )
}
