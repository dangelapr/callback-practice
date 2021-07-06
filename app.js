
setTimeout( () => {
    document.body.style.backgroundColor = 'red';
    setTimeout( () => {
        document.body.style.backgroundColor = 'orange';
        setTimeout( () => {
            document.body.style.backgroundColor = 'yellow';
            setTimeout( () => {
                document.body.style.backgroundColor = 'green';
                setTimeout( () => {
                    document.body.style.backgroundColor = 'blue';
                    setTimeout( () => {
                        document.body.style.backgroundColor = 'indigo';
                        setTimeout( () => {
                            document.body.style.backgroundColor = 'violet';
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

// setTimeout( () => {
//     document.body.style.backgroundColor = 'orange';
// }, 2000)

// setTimeout( () => {
//     document.body.style.backgroundColor = 'yellow';
// }, 3000)

// setTimeout( () => {
//     document.body.style.backgroundColor = 'green';
// }, 4000)

// setTimeout( () => {
//     document.body.style.backgroundColor = 'blue';
// }, 5000)

// setTimeout( () => {
//     document.body.style.backgroundColor = 'indigo';
// }, 6000)

// setTimeout( () => {
//     document.body.style.backgroundColor = 'violet';
// }, 7000)

const delayedColorChange = (newColor, delay) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
    }, delay)
}