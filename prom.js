const fs = require('fs');
const files = ['field/01/pocemon.txt', 'field/02/pocemon.txt','field/03/pocemon.txt', 'field/04/pocemon.txt', 'field/05/pocemon.txt', 'field/06/pocemon.txt', 'field/07/pocemon.txt', 'field/08/pocemon.txt', 'field/09/pocemon.txt', 'field/10/pocemon.txt'];
const paths = ['field/01', 'field/02','field/03', 'field/04', 'field/05', 'field/06', 'field/07', 'field/08', 'field/09', 'field/10'];
const txts = [];
var list = [];
function showFiles(files) {
    return new Promise((resolve, reject) => {
        files.forEach((item) => {

            fs.exists(item, value => {
                list.push(value);
            });

        });
        resolve(list);
    });
}

showFiles(paths)
    .then(result => console.log(result));



/**
 * Created by HP on 10/12/2016.
 */
