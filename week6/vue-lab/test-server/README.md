# 动漫API测试服务器

这是一个用于测试Vue前端项目的简单Node.js Express服务器，模拟动漫推荐API。

## 📁 项目结构
```
test-server/
├── server.js         # 主服务器文件
├── package.json       # 依赖配置
└── README.md         # 使用说明
```

## 🚀 快速开始

### 1. 安装依赖
```bash
cd test-server
npm install
```

### 2. 启动服务器
```bash
npm start
```
或者使用开发模式（自动重启）：
```bash
npm run dev
```

### 3. 验证服务器
在浏览器中访问: `http://localhost:3001`

## 📡 API 端点

### 获取随机动漫推荐
```
GET http://localhost:3001/api/anime
```
返回一个随机选择的动漫对象：
```json
{
  "id": 1,
  "title": "进击的巨人",
  "year": "2013",
  "genre": "动作, 剧情",
  "imageUrl": "https://via.placeholder.com/200x300/ff6b6b/ffffff?text=进击的巨人"
}
```

### 获取所有动漫列表
```
GET http://localhost:3001/api/anime/all
```

### 获取特定动漫
```
GET http://localhost:3001/api/anime/1
```

### 健康检查
```
GET http://localhost:3001/health
```

## 🎯 与Vue项目集成

1. **启动测试服务器**（在新终端中）：
   ```bash
   cd test-server
   npm start
   ```

2. **启动Vue开发服务器**（在另一个终端中）：
   ```bash
   cd .. # 回到vue-lab根目录
   npm run dev
   ```

3. **测试集成**：
   - Vue应用会自动从 `http://localhost:3001/api/anime` 获取数据
   - 每次刷新页面会随机显示不同的动漫推荐

## 🔧 配置说明

- **端口**: 服务器运行在端口 3001
- **CORS**: 已配置跨域访问，允许Vue开发服务器访问
- **数据**: 包含5部热门动漫的模拟数据
- **延迟**: 每个请求有500ms的模拟网络延迟

## 📝 动漫数据库

当前包含以下动漫：
1. 进击的巨人 (2013)
2. 鬼灭之刃 (2019)
3. 咒术回战 (2020)
4. 死神 (2004)
5. 火影忍者 (2002)

## 🛠️ 自定义

您可以在 `server.js` 中修改：
- 添加更多动漫数据
- 修改API响应格式
- 调整网络延迟时间
- 添加新的API端点

## 🐛 故障排除

### 常见问题：

1. **端口被占用**
   ```
   Error: listen EADDRINUSE :::3001
   ```
   解决：在 `server.js` 中修改 `PORT` 为其他值（如3002）

2. **Vue应用无法连接**
   - 确保测试服务器已启动
   - 检查Vue组件中的API地址是否正确
   - 查看浏览器控制台是否有CORS错误

3. **依赖安装失败**
   ```bash
   npm install --force
   ```

## 📊 日志输出

服务器会在控制台显示：
- 启动信息
- 每个API请求的时间戳和返回的动漫标题
- 错误信息（如果有）

示例输出：
```
🚀 动漫API测试服务器启动成功!
📡 服务器地址: http://localhost:3001
🎯 API端点: http://localhost:3001/api/anime
[14:30:15] 返回动漫: 鬼灭之刃
[14:30:20] 返回动漫: 进击的巨人
```

## 📞 需要帮助？

如果遇到问题，请检查：
1. Node.js版本是否≥14.0.0
2. 端口3001是否被其他程序占用
3. 网络防火墙设置
4. Vue应用中的API地址配置

祝您测试愉快！ 🎌