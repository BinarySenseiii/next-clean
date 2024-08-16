yarn format
yarn lint
read -p "Enter the commit message : " commitMessage
git add .
git commit -m "$commitMessage"
git push
