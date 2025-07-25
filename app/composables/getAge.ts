export function getAge(fromDateStr: string) {
    const fromDate = new Date(fromDateStr);
    const today = new Date();

    if (isNaN(fromDate.getTime())) {
        throw new Error('Invalid date format. Use YYYY-MM-DD');
    }

    let years = today.getFullYear() - fromDate.getFullYear();

    const thisYearBirthday = new Date(today.getFullYear(), fromDate.getMonth(), fromDate.getDate());

    if (today < thisYearBirthday) {
        years -= 1;
    }

    return years;
}