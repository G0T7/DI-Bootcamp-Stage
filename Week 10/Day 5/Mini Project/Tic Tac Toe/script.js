(function(numberOfChildren, partnerName, geographicLocation, jobTitle) {
    const fortune = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;
    document.getElementById('fortune').innerText = fortune;
})(2, 'Emma', 'New York', 'Software Engineer');
