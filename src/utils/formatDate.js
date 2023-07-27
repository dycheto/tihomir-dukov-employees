export function formatDate(date = new Date()) {
    let year = date.toLocaleString('default', { year: 'numeric' }).slice(0, 4);

    const month = date.toLocaleString('default',
        {
            month: '2-digit',
        });
    const day = date.toLocaleString('default', { day: '2-digit' });

    return [year, month, day].join('-');
}