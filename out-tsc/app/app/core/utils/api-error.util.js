export function getApiErrorMessage(error, fallback) {
    const data = error?.error?.data;
    if (data && typeof data === 'object' && !Array.isArray(data)) {
        const firstMessage = Object.values(data).find((value) => typeof value === 'string' && value.trim().length > 0);
        if (firstMessage)
            return firstMessage;
    }
    const message = error?.error?.message;
    return typeof message === 'string' && message.trim().length > 0 ? message : fallback;
}
//# sourceMappingURL=api-error.util.js.map