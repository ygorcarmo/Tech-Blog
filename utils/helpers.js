const month = [];
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";

module.exports = {
  format_date: ( date ) => {
    
    const d = new Date( date );
    let month_name = month[d.getMonth()];

    return `${new Date( date ).getDate()}-${month_name}-${new Date(date).getFullYear()}`;
  },
    get_emoji: () => {
      const randomNum = Math.random();
  
      // Return a random emoji
      if (randomNum > 0.7) {
        return `<span for="img" aria-label="lightbulb">💡</span>`;
      } else if (randomNum > 0.4) {
        return `<span for="img" aria-label="laptop">💻</span>`;
      } else {
        return `<span for="img" aria-label="gear">⚙️</span>`;
      }
    },
    format_commentCount: ( count ) => {
      if (!count) {
        return `No comments yet`;
      }
      return `Comments: ${count}`;
    },
};
