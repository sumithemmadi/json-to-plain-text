interface Options {
    spacing?: boolean;
    seperator?: string;
    squareBracketsForArray?: boolean;
    doubleQuotesForKeys?: boolean;
    doubleQuotesForValues?: boolean;
}
/**
 * Convert JSON-like data or plain JavaScript objects to formatted plain text representation.
 */
declare function jsonToPlainText(data: unknown, options?: Options): string;
export { jsonToPlainText, Options };
