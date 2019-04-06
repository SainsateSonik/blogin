const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default (dateToFormat) => {
    const year = dateToFormat.getFullYear();
    const month = months[dateToFormat.getMonth()];
    const date = dateToFormat.getDate();
    const day = days[dateToFormat.getDay()];

    return `${day} | ${month} ${date}, ${year}`;
};
