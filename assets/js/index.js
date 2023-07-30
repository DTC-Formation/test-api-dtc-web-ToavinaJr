fetch('./assets/js/users.json')
      .then( res => res.json() )
      .then( users => {
            let body = document.querySelector('body');

            users.forEach( item => {
                  let card = document.createElement('div');
                  let left = document.createElement('section');
                  let img = document.createElement('img');
                  let name = document.createElement('div');
                  let right = document.createElement('section');

                      
                  left.classList.add('left');          
                  card.classList.add('card');
                  name.classList.add('name');

                  img.src = './assets/images/profil_1.jpg';
                  name.textContent = item.name;
                  left.append(img, name);    
                  
                  right.classList.add('right');
                  let rightContainer_1 = document.createElement('div');
                  let userNameTitle = document.createElement('div');
                  let userName = document.createElement('div');
                  let doubleDot_1 = document.createElement('span');

                  rightContainer_1.classList.add('right-container');
                  userNameTitle.classList.add('title');
                  userName.classList.add('response');
                  userName.classList.add('user-name');

                  doubleDot_1.classList.add('double-dot');

                  userNameTitle.textContent = "User name";
                  doubleDot_1.textContent = ":";
                  userName.textContent = item.username;

                  rightContainer_1.append(userNameTitle, doubleDot_1, userName);
                  
                  /* ******************************************* */

                  let rightContainer_2 = document.createElement('div');
                  let userEmailTitle = document.createElement('div');
                  let userEmail = document.createElement('div');
                  let doubleDot_2 = document.createElement('span');

                  rightContainer_2.classList.add('right-container');
                  userEmailTitle.classList.add('title');
                  userEmail.classList.add('response');
                  userEmail.classList.add('email');

                  doubleDot_2.classList.add('double-dot');

                  userEmailTitle.textContent = "Email";
                  doubleDot_2.textContent = ":";
                  userEmail.textContent = item.email;

                  rightContainer_2.append(userEmailTitle, doubleDot_2, userEmail);

                  /* ******************************************* */

                  
                  let rightContainer_3 = document.createElement('div');
                  let userAdresseTitle = document.createElement('div');
                  let userAdresse = document.createElement('div');
                  let doubleDot_3 = document.createElement('span');

                  rightContainer_3.classList.add('right-container');
                  userAdresseTitle.classList.add('title');
                  userAdresse.classList.add('response');
                  userAdresse.classList.add('adresse');

                  doubleDot_3.classList.add('double-dot');

                  userAdresseTitle.textContent = "Adresse";
                  doubleDot_3.textContent = ":";

                  let street = document.createElement('div');
                  let suite = document.createElement('div');
                  let zipCode = document.createElement('div');

                  street.classList.add('street');
                  suite.classList.add('suite');
                  zipCode.classList.add('zip-code');
                  
                  street.textContent = `Street : ${item.address.street}`;
                  suite.textContent = `Suite : ${item.address.suite}`
                  zipCode.textContent = `Zip Code : ${item.address.zipcode}`

                  userAdresse.append(street, suite, zipCode);
                  rightContainer_3.append(userAdresseTitle, doubleDot_3, userAdresse);
                  right.append(rightContainer_1, rightContainer_2, rightContainer_3);
                  card.append(left, right);
                  body.append(card);
            });
      } );