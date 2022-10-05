const FormatDate = (yourDate) => {
    const timeZoneOffset = (new Date(yourDate)).getTimezoneOffset() * 60000;
    const localISOTime = (new Date(Date.now() - timeZoneOffset)).toISOString().replace('T', ' ').substring(0, 10);    
    return localISOTime
}

export default FormatDate