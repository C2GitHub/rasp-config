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

   

