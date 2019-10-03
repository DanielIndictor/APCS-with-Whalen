/* const liList = Array.from(document.querySelectorAll('li'));
//console.log(liList);

liList.filter (el => el.textContent.includes('Flexbox'));
//console.log(liList.filter (el => el.textContent.includes('Flexbox')));

//console.log(liList.map(el => el.dataset.time));

const filtered = liList.filter (el => el.textContent.includes('Flexbox'))
.map(el => el.dataset.time)
.map(timeCode => {
    const parts = timeCode.split(':').map( part => parseFloat(part));
    //console.log(parts);
    return (parts[0] * 60) + parts[1];
})
.reduce((runningTotal, seconds) => runningTotal + seconds,0)
console.log(filtered); */


const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);
        //return the result
        return `${newTitle.join(' ')}...)`;
    } return title;
}

limitRecipeTitle('Pasta Primavera with spaghetti and meatballs blah blah blah');