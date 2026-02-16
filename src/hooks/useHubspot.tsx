"use client";

declare global {
  interface Window {
    HubSpotConversations?: {
      widget: {
        open: () => void;
        refresh: () => void;
        setUserEmail: (email: string) => void;
      };
    };
    hsConversationsOnReady?: Array<() => void>;
  }
}

export function useHubspot() {
  const executeWhenReady = (callback: () => void) => {
    if (window.HubSpotConversations) {
      callback();
    } else {
      window.hsConversationsOnReady = [callback];
    }
  };

  const openChat = (userEmail?: string) => {
    executeWhenReady(() => {
      if (window.HubSpotConversations) {
        window.HubSpotConversations.widget.open();
        if (userEmail) {
          window.HubSpotConversations.widget.setUserEmail(userEmail);
        }
      } else {
        window.location.href = "mailto:support@mefit.pro";
      }
    });
  };

  const refresh = () => {
    executeWhenReady(() => {
      if (window.HubSpotConversations) {
        window.HubSpotConversations.widget.refresh();
      }
    });
  };

  return { openChat, refresh };
}
