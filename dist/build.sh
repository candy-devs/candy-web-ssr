sudo apt update
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc
nvm install node
git clone https://github.com/rollrat/candy-web-ssr
cd candy-web-ssr
npm i
npm run build
npm i -g pm2
pm2 start --name "server0" npm -- start
pm2 start --name "server1" npm -- start