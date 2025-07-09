import { useUserContext } from "@/context/user.context";
import { usePathname, useRouter } from "expo-router";
import { ReactNode, useEffect } from "react";

function AuthGuard({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const { isLoading, user, token } = useUserContext();

  useEffect(() => {
    if (!isLoading) {
      const isOnAuthPage = pathname.startsWith("/auth");

      if (!user && !isOnAuthPage) {
        router.replace("/auth");
      } else if (user && isOnAuthPage) {
        router.replace("/");
      }
    }
  }, [user, isLoading]);

  return <>{children}</>;
}

export default AuthGuard;
