import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { LogOut, User, Settings, Shield } from 'lucide-react';

export const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-glow to-purple-600 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Welcome back!</h1>
            <p className="text-white/80">You are successfully logged in</p>
          </div>
          <Button onClick={logout} variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">User Info</CardTitle>
              <User className="h-4 w-4 text-white/60" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{user?.email}</div>
              <p className="text-xs text-white/60">
                Account created: {user?.metadata.creationTime}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Status</CardTitle>
              <Shield className="h-4 w-4 text-white/60" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {user?.emailVerified ? 'Verified' : 'Unverified'}
              </div>
              <p className="text-xs text-white/60">
                Email verification status
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Settings</CardTitle>
              <Settings className="h-4 w-4 text-white/60" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">Active</div>
              <p className="text-xs text-white/60">
                Account settings
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Account Details</CardTitle>
            <CardDescription className="text-white/60">
              Your Firebase authentication details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-white/80">User ID</label>
                <p className="text-sm text-white font-mono bg-white/10 p-2 rounded mt-1">
                  {user?.uid}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-white/80">Provider</label>
                <p className="text-sm text-white bg-white/10 p-2 rounded mt-1">
                  {user?.providerData[0]?.providerId || 'password'}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-white/80">Last Sign In</label>
                <p className="text-sm text-white bg-white/10 p-2 rounded mt-1">
                  {user?.metadata.lastSignInTime}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-white/80">Creation Time</label>
                <p className="text-sm text-white bg-white/10 p-2 rounded mt-1">
                  {user?.metadata.creationTime}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};