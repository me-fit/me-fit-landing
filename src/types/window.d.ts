/**
 * Type definitions for HubSpot Conversations Chat Widget SDK
 * @see https://developers.hubspot.com/docs/api-reference/conversations-chat-configuration/chat-widget-sdk
 */

interface HubSpotConversationsWidget {
  /**
   * Opens the chatflow widget
   */
  open(): void;

  /**
   * Closes the chatflow widget
   */
  close(): void;

  /**
   * Hides the chatflow widget
   */
  hide(): void;

  /**
   * Removes the chatflow widget from the page
   */
  remove(): void;

  /**
   * Loads the chatflow widget
   */
  load(options?: { widgetOpen?: boolean }): void;

  /**
   * Refreshes the chatflow widget with current settings
   */
  refresh(options?: { openOnLoad?: boolean }): void;

  /**
   * Sets the user's email address for identification
   */
  setUserEmail(email: string): void;

  /**
   * Sets a custom property for the conversation
   */
  setProperty(key: string, value: any): void;

  /**
   * Gets the current status of the chatflow widget
   */
  status(): {
    loaded: boolean;
    pending: boolean;
  };
}

interface HubSpotConversations {
  widget: HubSpotConversationsWidget;

  /**
   * Executes a callback when the widget is ready
   */
  on(event: "conversationStarted" | "conversationClosed" | "unreadConversationCountChanged", callback: (payload?: any) => void): void;
}

interface HubSpotConversationsSettings {
  loadImmediately?: boolean;
  inlineEmbedSelector?: string;
  enableWidgetCookieBanner?: boolean;
  disableAttachment?: boolean;
  identificationEmail?: string;
  identificationToken?: string;
}

declare global {
  interface Window {
    /**
     * HubSpot Conversations API
     */
    HubSpotConversations?: HubSpotConversations;

    /**
     * Array of callbacks to execute when HubSpot Conversations is ready
     */
    hsConversationsOnReady?: Array<() => void>;

    hsConversationsSettings: HubSpotConversationsSettings;
  }
}

export { };
