read -n1 -p 'Local? [y,n]' local 
sudo docker rmi demo_frontend

if test $local = "y"
then
    printf "\n Building for local dev \n"
    sudo docker build --build-arg LOCAL=_local -t demo_frontend .

else 
    printf "\n Building for deployment \n"

    sudo docker build -t demo_frontend .
fi