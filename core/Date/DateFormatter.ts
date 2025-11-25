export class DateFormatter {
    public static toTextDate = (date: Date | string) =>
        (typeof date === 'string' ? new Date(date) : date).toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });

    public static toShortDate = (date: Date | string) =>
        (typeof date === 'string' ? new Date(date) : date).toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
}
