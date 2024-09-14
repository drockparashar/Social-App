"use client"
import { useState } from 'react'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [username,setUsername]=useState<string>("");
  const [name,setName]=useState<string>("");
  const [email,setEmail]=useState<string>("");
  const [password,setPassword]=useState<string>("");

  async function handleSubmit() {
    setIsLoading(true)
    try {
      const response = await axios.post('http://localhost:3000/api/signup', {
        name,
        username,
        email,
        password
  });
  console.log(response.data);
} catch (error) {
  console.error(error);
} finally {
  setIsLoading(false);
}
}

return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
      <Card className="w-full max-w-md relative z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full transform translate-x-16 -translate-y-16"></div>
        <CardHeader className="space-y-1 relative z-10">
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl">🚀</span>
          </div>
          <CardTitle className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Create an account
          </CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            Enter your details below to join our community
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 relative z-10">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-muted-foreground">Name</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">👤</span>
              <Input 
              id="name" 
              type="text" 
              placeholder="John Doe" 
              className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-purple-500" 
              onChange={(e) => setName(e.target.value)}
              /> 
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username" className="text-muted-foreground">Username</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">@</span>
              <Input 
              id="username" 
              type="text" 
              placeholder="johndoe123" 
              className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-purple-500"
              onChange={(e)=>setUsername(e.target.value)} />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-muted-foreground">Email</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">✉️</span>
              <Input 
              id="email" 
              type="email" 
              placeholder="john@example.com" 
              className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-purple-500" 
              onChange={(e)=>setEmail(e.target.value)}/>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" className="text-muted-foreground">Password</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">🔒</span>
              <Input 
              id="password" 
              type="password" 
              className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-purple-500" 
              onChange={(e)=>setPassword(e.target.value)}/>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-muted" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline" className="hover:bg-secondary transition-colors duration-300">
              GitHub
            </Button>
            <Button variant="outline" className="hover:bg-secondary transition-colors duration-300">
              Google
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300" 
            onClick={handleSubmit} 
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="mr-2">⏳</span>
            ) : (
              <span className="mr-2">➡️</span>
            )}
            Sign Up
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}