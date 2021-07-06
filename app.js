// setTimeout( () => {
//     document.body.style.backgroundColor = 'red';
// }, 1000)

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


// setTimeout( () => {
    //     document.body.style.backgroundColor = 'red';
    //     setTimeout( () => {
    //         document.body.style.backgroundColor = 'orange';
    //         setTimeout( () => {
    //             document.body.style.backgroundColor = 'yellow';
    //             setTimeout( () => {
    //                 document.body.style.backgroundColor = 'green';
    //                 setTimeout( () => {
    //                     document.body.style.backgroundColor = 'blue';
    //                     setTimeout( () => {
    //                         document.body.style.backgroundColor = 'indigo';
    //                         setTimeout( () => {
    //                             document.body.style.backgroundColor = 'violet';
    //                         }, 1000)
    //                     }, 1000)
    //                 }, 1000)
    //             }, 1000)
    //         }, 1000)
    //     }, 1000)
    // }, 1000)


const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay);
};


delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {
                    delayedColorChange('indigo', 1000, () => {
                        delayedColorChange('violet', 1000, () => {

                        });
                    });
                });
            });
        });
    });
});

