const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// 中间件配置
app.use(cors()); // 允许跨域访问
app.use(express.json()); // 解析JSON请求体

// 模拟动漫数据
const animeDatabase = [
    {
        id: 1,
        title: "进击的巨人",
        year: "2013",
        genre: "动作, 剧情",
        imageUrl: "https://via.placeholder.com/200x300/ff6b6b/ffffff?text=进击的巨人"
    },
    {
        id: 2,
        title: "鬼灭之刃",
        year: "2019",
        genre: "动作, 超自然",
        imageUrl: "https://via.placeholder.com/200x300/4ecdc4/ffffff?text=鬼灭之刃"
    },
    {
        id: 3,
        title: "咒术回战",
        year: "2020",
        genre: "动作, 超自然",
        imageUrl: "https://via.placeholder.com/200x300/45b7d1/ffffff?text=咒术回战"
    },
    {
        id: 4,
        title: "死神",
        year: "2004",
        genre: "动作, 冒险",
        imageUrl: "https://via.placeholder.com/200x300/f39c12/ffffff?text=死神"
    },
    {
        id: 5,
        title: "火影忍者",
        year: "2002",
        genre: "动作, 冒险",
        imageUrl: "https://via.placeholder.com/200x300/e74c3c/ffffff?text=火影忍者"
    }
];

// API 路由
app.get('/api/anime', (req, res) => {
    try {
        // 随机选择一个动漫返回
        const randomIndex = Math.floor(Math.random() * animeDatabase.length);
        const selectedAnime = animeDatabase[randomIndex];
        
        console.log(`[${new Date().toLocaleTimeString()}] 返回动漫: ${selectedAnime.title}`);
        
        // 模拟网络延迟
        setTimeout(() => {
            res.json(selectedAnime);
        }, 500);
        
    } catch (error) {
        console.error('服务器错误:', error);
        res.status(500).json({ error: '服务器内部错误' });
    }
});

// 获取所有动漫列表的端点
app.get('/api/anime/all', (req, res) => {
    try {
        console.log(`[${new Date().toLocaleTimeString()}] 返回所有动漫列表`);
        res.json({
            total: animeDatabase.length,
            data: animeDatabase
        });
    } catch (error) {
        console.error('服务器错误:', error);
        res.status(500).json({ error: '服务器内部错误' });
    }
});

// 根据ID获取特定动漫
app.get('/api/anime/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const anime = animeDatabase.find(item => item.id === id);
        
        if (!anime) {
            return res.status(404).json({ error: '动漫未找到' });
        }
        
        console.log(`[${new Date().toLocaleTimeString()}] 返回动漫ID ${id}: ${anime.title}`);
        res.json(anime);
    } catch (error) {
        console.error('服务器错误:', error);
        res.status(500).json({ error: '服务器内部错误' });
    }
});

// 健康检查端点
app.get('/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        message: '动漫API测试服务器运行正常',
        timestamp: new Date().toISOString()
    });
});

// 根路径
app.get('/', (req, res) => {
    res.json({
        message: '🎌 动漫API测试服务器',
        endpoints: {
            '随机动漫': 'GET /api/anime',
            '所有动漫': 'GET /api/anime/all',
            '特定动漫': 'GET /api/anime/:id',
            '健康检查': 'GET /health'
        },
        usage: '在您的Vue应用中使用 http://localhost:3001/api/anime'
    });
});

// 启动服务器
app.listen(PORT, () => {
    console.log('🚀 动漫API测试服务器启动成功!');
    console.log(`📡 服务器地址: http://localhost:${PORT}`);
    console.log(`🎯 API端点: http://localhost:${PORT}/api/anime`);
    console.log('📋 可用端点:');
    console.log('   - GET /api/anime (随机动漫)');
    console.log('   - GET /api/anime/all (所有动漫)');
    console.log('   - GET /api/anime/:id (特定动漫)');
    console.log('   - GET /health (健康检查)');
    console.log('\n💡 提示: 在Vue应用中将API地址改为 http://localhost:3001/api/anime');
});

// 错误处理
process.on('uncaughtException', (error) => {
    console.error('未捕获的异常:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('未处理的Promise拒绝:', reason);
});