export interface Root {
    users: User[]
  }
  
  export interface User {
    scores: Scores
    tests: Test[]
  }
  
  export interface Scores {
    avg: number
    last: number
  }
  
  export interface Test {
    "most-recent-score": number
    "total-correct": number
    "total-questions": number
    questions: Question[]
  }
  
  export interface Question {
    Heading: string
    Answer: string
  }