# rasp-config
Raspberry PI 4B物联网芯片配置参数

### 查看启动服务状态

```
systemctl status rc-local
```

### 修改 /etc/rc.local 

```
sudo nano /etc/rc.local
```

```
# Print the IP address
_IP=$(hostname -I) || true
if [ "$_IP" ]; then
  printf "My IP address is %s\n" "$_IP"
fi

su pi -c "node  /home/pi/rasp/dist/main.js"

exit 0

```

### 开启自启动权限

```
sudo chown root:root /etc/rc.local
sudo chmod 755 /etc/rc.local
sudo systemctl enable rc-local.service
```

### 修改环境变量

```
sudo nano /etc/profile
```

### 开机启动软件：autostart

1. 在/home/pi/.config文件夹下新建autostart文件夹

2. 新建text.desktop文件

3. 执行nano test.desktop

4. 输入代码保存

   ```
   [Desktop Entry]
   
   Type=Application
   
   Name=open-browser
   
   Exec=chromium-browser "http://127.0.0.1:3000" -kiosk
   ```

   

## 设置pm2自启动

* 使用pm2 start （启动服务)

* 执行pm2 save (保存当前已经启动了的服务)
* 执行pm2 startup (设置开机自启的配置) 
  执行pm2 startup以后会得到以下提示 设置环境变量

```
1 [PM2] Init System found: upstart
2 [PM2] To setup the Startup Script, copy/paste the following command:
3 sudo env PATH=$PATH:/opt/bitnami/nodejs/bin /opt/bitnami/nodejs/lib/node_modules/pm2/bin/pm2 startup upstart -u bitnami --hp /home/bitnami
```

* 粘贴复制 sudo env….这一部分的命令 执行命令 完成。
* 设置完成，sudo reboot 手动重启服务器pm2 list 查看验证