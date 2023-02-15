
let role = 'moderator';

switch (role) {
    case 'guest': 
        console.log('Guest user');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unknown Role');
}

// If the break statement is not used both logged statements will print

// With Switch and Case you can compare a bunch of variables against a bunch of other values

// You can use string and numbers mainly here

// Switch and Case can be used, but it is often cleaner to use If...Else statements instead (below is a cleaner alternative)
if (role === 'guest') console.log('Guest User');
else if (role === 'moderator') console.log('Moderator User');
else console.log('Unknown Role');

