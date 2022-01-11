#! /bin/zsh
# I couldn't figure out how to run this using "cfe my-project", instead it prompts you for the name of your directory and then creates it from there
printf "Directory Name: " NAME
read NAME
mkdir ${NAME}
cd ${NAME}
mkdir assets css js
touch index.html
cd css
touch styles.css
cd ..
cd js
touch scripts.js
cd ..
ls