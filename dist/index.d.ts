/**
 * @hook useLocalStorage
 * React hook to set and get content in local storage
 * const [value, setValue] = useLocalStorage('key', 'default value');
 * @param {string} storageKey to get back or set the stored content
 * @param {string} defaultValue if no content is stored
 * @returns {[string, Function]} stored value and function to set the value
 */
export default function useLocalStorage(storageKey: string, defaultValue: string): [string, Function];
