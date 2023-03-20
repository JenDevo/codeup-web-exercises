"use strict";

function lastCommitDate(userName) {

fetch(`https://api.github.com/users/` + userName + `/events/public`, {headers: {'Authorization': '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'}})
    .then(resolve => resolve.json())
    .then(data => {console.log(data[0].created_at)})

}

lastCommitDate("jendevo")