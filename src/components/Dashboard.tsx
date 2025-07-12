import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/hooks/useAuth';
import { LogOut, User, Settings, Shield, Mail, Calendar, Clock } from 'lucide-react';

export const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-glow to-purple-600 p-4 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        {/* Header Section with User Profile */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
          <div className="flex items-center gap-4 animate-scale-in">
            <Avatar className="h-16 w-16 border-2 border-white/20">
              <AvatarImage src={user?.photoURL || ""} alt={user?.displayName || user?.email || ""} />
              <AvatarFallback className="bg-white/20 text-white text-xl font-bold">
                {user?.displayName ? user.displayName.charAt(0).toUpperCase() : user?.email?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-white">
                Welcome back, {user?.displayName || user?.email?.split('@')[0]}!
              </h1>
              <p className="text-white/80 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {user?.email}
              </p>
              <p className="text-white/60 text-sm flex items-center gap-2 mt-1">
                <Calendar className="w-4 h-4" />
                Member since {new Date(user?.metadata.creationTime || '').toLocaleDateString()}
              </p>
            </div>
          </div>
          <Button 
            onClick={logout} 
            variant="outline" 
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.1s'}}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Email Status</CardTitle>
              <Mail className="h-4 w-4 text-white/60" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {user?.emailVerified ? 'Verified' : 'Unverified'}
              </div>
              <p className="text-xs text-white/60">
                {user?.email}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Account Type</CardTitle>
              <Shield className="h-4 w-4 text-white/60" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {user?.providerData[0]?.providerId === 'google.com' ? 'Google' : 'Email'}
              </div>
              <p className="text-xs text-white/60">
                Authentication provider
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Last Active</CardTitle>
              <Clock className="h-4 w-4 text-white/60" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">Today</div>
              <p className="text-xs text-white/60">
                {new Date(user?.metadata.lastSignInTime || '').toLocaleTimeString()}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Profile</CardTitle>
              <User className="h-4 w-4 text-white/60" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">Complete</div>
              <p className="text-xs text-white/60">
                Profile setup status
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Account Information */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <CardHeader>
              <CardTitle className="text-white">Personal Information</CardTitle>
              <CardDescription className="text-white/60">
                Your basic account details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-white/80">Display Name</label>
                <p className="text-sm text-white bg-white/10 p-3 rounded mt-1">
                  {user?.displayName || 'Not set'}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-white/80">Email Address</label>
                <p className="text-sm text-white bg-white/10 p-3 rounded mt-1">
                  {user?.email}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-white/80">Date of Birth (Email)</label>
                <p className="text-sm text-white bg-white/10 p-3 rounded mt-1">
                  {user?.email} {/* As requested, using email as DOB */}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-white/80">Phone Number</label>
                <p className="text-sm text-white bg-white/10 p-3 rounded mt-1">
                  {user?.phoneNumber || 'Not provided'}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <CardHeader>
              <CardTitle className="text-white">Account Security</CardTitle>
              <CardDescription className="text-white/60">
                Security and authentication details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-white/80">User ID</label>
                <p className="text-sm text-white font-mono bg-white/10 p-3 rounded mt-1 break-all">
                  {user?.uid}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-white/80">Authentication Provider</label>
                <p className="text-sm text-white bg-white/10 p-3 rounded mt-1">
                  {user?.providerData[0]?.providerId === 'google.com' ? 'Google Account' : 'Email & Password'}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-white/80">Account Created</label>
                <p className="text-sm text-white bg-white/10 p-3 rounded mt-1">
                  {new Date(user?.metadata.creationTime || '').toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-white/80">Last Sign In</label>
                <p className="text-sm text-white bg-white/10 p-3 rounded mt-1">
                  {new Date(user?.metadata.lastSignInTime || '').toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric', 
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};