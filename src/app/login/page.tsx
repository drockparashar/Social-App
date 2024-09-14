"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [username,setUsername]=useState<string>("");
  const [password,setPassword]=useState<string>("");

  const router = useRouter();
  async function handleClientLogin(client:string) {
    await signIn(client, { callbackUrl: '/home' });
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });


      if (res.status === 200) {
        // Successful login, redirect to homepage
        router.push('/dashboard');
      }
    } catch (error) {
      console.log(error)
    }

    setIsLoading(false);
  };

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
            Log in to your account
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 relative z-10">
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
            <Button 
            variant="outline" 
            className="hover:bg-secondary transition-colors duration-300"
            onClick={()=>handleClientLogin("github")}>
              GitHub
            </Button>
            <Button 
            variant="outline" 
            className="hover:bg-secondary transition-colors duration-300" 
            onClick={()=>handleClientLogin("google")}>
              Google
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300" 
            onClick={handleLogin} 
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="mr-2">⏳</span>
            ) : (
              <span className="mr-2">➡️</span>
            )}
            Log In
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}