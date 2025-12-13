export class StringUtils {
    /**
     * Removes the leading slash from a string if it exists.
     */
    public static removeLeadingSlash = (str: string) => str.replace(/^\//, '');

    /**
     * Ensure the string starts with one slash.
     */
    public static ensureLeadingSlash = (str: string) => '/' + str.replace(/^\/+/, '');
}
