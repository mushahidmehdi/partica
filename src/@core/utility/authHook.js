import {
  useJWTAuth,
  useJWTAuthActions,
} from '@core/services/authentication/JWTAuthProvider';

export const useAuthUser = () => {
  const { user, isAuthenticated, isLoading } = useJWTAuth();

  return {
    isLoading,
    isAuthenticated,
    user,
  };
};

export const useAuthMethod = () => {
  const { SignInUser, Logout } = useJWTAuthActions();

  return {
    signIn: SignInUser,
    logout: Logout,
  };
};
