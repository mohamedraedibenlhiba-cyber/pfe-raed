export function getApiErrorMessage(
  error: { error?: { message?: string; data?: unknown } } | null | undefined,
  fallback: string
): string {
  const data = error?.error?.data;

  if (data && typeof data === 'object' && !Array.isArray(data)) {
    const firstMessage = Object.values(data as Record<string, unknown>).find(
      (value): value is string => typeof value === 'string' && value.trim().length > 0
    );

    if (firstMessage) return firstMessage;
  }

  const message = error?.error?.message;
  return typeof message === 'string' && message.trim().length > 0 ? message : fallback;
}
