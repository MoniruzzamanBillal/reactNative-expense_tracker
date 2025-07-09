import { useUserContext } from "@/context/user.context";
import { usePathname, useRootNavigationState, useRouter } from "expo-router";
import { ReactNode, useEffect, useRef, useState } from "react";
import SplashScreen from "./SplashScreen";

function AuthGuard({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const navigationState = useRootNavigationState();

  const hasRedirected = useRef(false);
  const [showContent, setShowContent] = useState(false);

  const { isLoading, user } = useUserContext();

  useEffect(() => {
    if (!navigationState?.key || isLoading || hasRedirected?.current) {
      return;
    }

    const isOnAuthPage = pathname.startsWith("/auth");

    setTimeout(() => {
      if (!user && !isOnAuthPage) {
        hasRedirected.current = true;
        router.replace("/auth");
      } else if (user && isOnAuthPage) {
        hasRedirected.current = true;
        router.replace("/");
      } else {
        setShowContent(true);
      }
    }, 100);
  }, [user, isLoading, pathname, navigationState?.key]);

  if (!navigationState?.key || isLoading) {
    return <SplashScreen />;
  }

  return <>{children}</>;
}

export default AuthGuard;
