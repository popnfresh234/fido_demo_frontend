echo "Tagging and Pushing Frontend IMG"
sudo docker tag demo_frontend:latest hub.webcomm.com.tw/alex-demo/demo_frontend:latest
sudo docker push hub.webcomm.com.tw/alex-demo/demo_frontend:latest
echo "Done"