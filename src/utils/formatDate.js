//This code takes date formatted in COMMENTS.js array and return a more human-readable timestamp //we will import this is Comment.js
export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-us', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    }).format(new Date(Date.parse(date)));
};

