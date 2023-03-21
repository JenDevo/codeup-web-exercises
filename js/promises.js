"use strict";

function lastCommitDate(userName) {

fetch(`https://api.github.com/users/` + userName + `/events/public`, {headers: {'Authorization': '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'}})
    .then(resolve => resolve.json())
    .then(data => {console.log(data[0].created_at)})
}

lastCommitDate("jendevo")


//Create own promise
// Still want to work on getting milliseconds in resolve

function wait(num) {
    return new Promise(resolve => setTimeout((num) => resolve(num), num))

}

wait(2000).then(() => console.log(`You will see this after 2 seconds`))
wait(5000).then(() => console.log(`You will see this after 5 seconds`))
wait(10000).then(() => console.log(`You will see this after 10 seconds`))