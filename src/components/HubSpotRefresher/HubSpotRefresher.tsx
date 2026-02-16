"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useHubspot } from "@/hooks/useHubspot";

export default function HubSpotRefresher() {
  const pathname = usePathname();
  const { refresh } = useHubspot();

  useEffect(() => {
    // Refresh HubSpot widget on route change
    refresh();
  }, [pathname, refresh]);

  return null;
}
