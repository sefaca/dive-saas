import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, UserPlus, ArrowRight, Loader2, PartyPopper, Waves } from 'lucide-react';
import { useGuardianChildren, GuardianChild } from '@/hooks/useGuardianChildren';
import { AddChildModal } from '@/components/AddChildModal';
import { useAuth } from '@/contexts/AuthContext';

const GuardianSetupPage = () => {
  const navigate = useNavigate();
  const { profile } = useAuth();
  const { children, isLoading, addChild, isAddingChild } = useGuardianChildren();
  const [isAddChildModalOpen, setIsAddChildModalOpen] = useState(false);
  const [hasAddedAtLeastOne, setHasAddedAtLeastOne] = useState(false);

  // Check if user should be on this page
  // Only redirect if role is explicitly NOT guardian (don't redirect on undefined/null during loading)
  useEffect(() => {
    if (profile && profile.role && profile.role !== 'guardian' && profile.role !== 'player') {
      // Not a guardian or player (child), redirect to dashboard
      // We allow 'player' temporarily because when adding a child, the session might switch briefly
      navigate('/dashboard', { replace: true });
    }
  }, [profile?.role, navigate]); // Only depend on role, not full profile object

  // Update the flag when children are added
  useEffect(() => {
    if (children.length > 0) {
      setHasAddedAtLeastOne(true);
    }
  }, [children]);

  const handleAddChild = (data: any) => {
    addChild(data, {
      onSuccess: () => {
        // Cerrar el modal inmediatamente
        setIsAddChildModalOpen(false);

        // Recargar la página INMEDIATAMENTE para mantener la sesión del guardian
        // La sesión del guardian ya fue restaurada en el hook
        console.log('🔄 Reloading page to restore guardian session...');
        window.location.reload();
      }
    });
  };

  const handleFinishSetup = () => {
    // Siempre usar recarga completa para asegurar que la sesión del guardian está activa
    // Esto evita problemas de estado cacheado después de crear hijos
    console.log('🔄 Navigating to dashboard with full page reload...');
    window.location.href = '/dashboard';
  };

  const calculateAge = (birthDate: string | null) => {
    if (!birthDate) return null;
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-ocean-deep/90 via-ocean-tropical/20 to-ocean-deep/90 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 text-ocean-tropical animate-spin" />
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-ocean-deep/90 via-ocean-tropical/20 to-ocean-deep/90 p-4 sm:p-6 lg:p-8">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ocean-tropical/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ocean-marine/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Waves className="h-20 sm:h-24 lg:h-28 w-20 sm:w-24 lg:w-28 text-ocean-tropical drop-shadow-2xl" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl">
              Dive<span className="text-ocean-tropical">SaaS</span>
            </h1>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Welcome to DiveSaaS!
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto">
            Add your children's profiles to enroll them in dive sessions and manage their attendance
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Add Child Button */}
          <div className="text-center">
            <Button
              onClick={() => setIsAddChildModalOpen(true)}
              size="lg"
              className="bg-gradient-to-r from-ocean-tropical to-orange-600 hover:from-ocean-tropical/90 hover:to-orange-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <UserPlus className="h-5 w-5 mr-2" />
              Add Child
            </Button>
          </div>

          {/* Children List */}
          {children.length === 0 ? (
            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-xl">
              <CardContent className="py-12 text-center">
                <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-slate-800">
                  You haven't added any children yet
                </h3>
                <p className="text-base text-muted-foreground px-4">
                  Click "Add Child" to get started
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {/* Success Message - Más compacto */}
              <Card className="border-0 shadow-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white max-w-2xl mx-auto">
                <CardContent className="py-4 px-6 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <PartyPopper className="h-8 w-8 flex-shrink-0" />
                    <div className="text-left">
                      <h3 className="text-lg font-bold">
                        Perfect! You've added {children.length} {children.length === 1 ? 'child' : 'children'}
                      </h3>
                      <p className="text-sm text-white/90">
                        You can add more or continue to the dashboard
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Children Cards - Más compactas */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-w-6xl mx-auto">
                {children.map((child) => {
                  const age = calculateAge(child.birth_date);

                  return (
                    <Card
                      key={child.id}
                      className="border-0 shadow-md bg-white/95 backdrop-blur-xl border-l-4 border-l-ocean-tropical hover:shadow-lg transition-shadow"
                    >
                      <CardContent className="p-4">
                        <div className="text-center">
                          <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-ocean-tropical to-orange-600 rounded-full flex items-center justify-center">
                            <Users className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="text-base font-bold text-slate-800 mb-1 truncate">
                            {child.full_name}
                          </h4>
                          {age !== null && (
                            <p className="text-xs text-muted-foreground mb-0.5">
                              {age} years old
                            </p>
                          )}
                          {child.level && (
                            <p className="text-xs text-muted-foreground">
                              Level {child.level}
                            </p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            {hasAddedAtLeastOne && (
              <Button
                onClick={handleFinishSetup}
                size="lg"
                className="bg-white text-slate-900 hover:bg-white/90 hover:scale-105 font-semibold shadow-lg transition-all duration-200"
              >
                Don't add more children
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            )}
          </div>

          {/* Skip Option */}
          {!hasAddedAtLeastOne && (
            <div className="text-center pt-4">
              <button
                onClick={handleFinishSetup}
                className="text-slate-300 hover:text-white text-sm underline transition-colors"
              >
                Skip for now (you can add children later)
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Add Child Modal */}
      <AddChildModal
        open={isAddChildModalOpen}
        onOpenChange={setIsAddChildModalOpen}
        onAddChild={handleAddChild}
        isLoading={isAddingChild}
      />
    </div>
  );
};

export default GuardianSetupPage;
