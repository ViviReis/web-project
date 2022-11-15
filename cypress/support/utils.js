export const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();    
    const ampm = hours >= 12 ? 'pm' : 'am';
  
    hours %= 12;
    hours = hours || 12;    
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 12 ? `0${hours}` : hours;
  
    const strTime = `${hours}:${minutes} ${ampm}`;
  
    return strTime;
};