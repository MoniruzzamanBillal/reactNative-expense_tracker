import { useUserContext } from "@/context/user.context";
import { usePathname, useRootNavigationState, useRouter } from "expo-router";
import { ReactNode, useEffect, useRef, useState } from "react";
import SplashScreen from "./SplashScreen";

function AuthGuard({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const navigationState = useRootNavigationState();
  const hasMounted = useRef(false);
  const [redirectChecked, setRedirectChecked] = useState(false);

  const { isLoading, user } = useUserContext();

  useEffect(() => {
    if (!navigationState?.key || isLoading || hasMounted.current) {
      return;
    }

    hasMounted.current = true;

    if (!isLoading) {
      const isOnAuthPage = pathname.startsWith("/auth");

      if (!user && !isOnAuthPage) {
        router.replace("/auth");
      } else if (user && isOnAuthPage) {
        router.replace("/");
      }
    }
    setRedirectChecked(true);
  }, [user, isLoading, navigationState?.key]);

  if (!navigationState?.key || isLoading || !redirectChecked) {
    return <SplashScreen />;
  }

  return <>{children}</>;
}

export default AuthGuard;
