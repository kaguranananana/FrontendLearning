import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 3001;

// 启用 CORS 以允许前端访问
app.use(cors());
app.use(express.json());

// 模拟预定数据
const reservationsData = {
  101: {
    data: {
      roomType: "豪华海景房",
      reservationStartDate: "2024-12-25",
      reservationEndDate: "2024-12-28",
      customerName: "李小明",
      status: "已确认",
      totalPrice: 1200,
      guestCount: 2
    }
  },
  102: {
    data: {
      roomType: "标准双人房",
      reservationStartDate: "2024-12-20",
      reservationEndDate: "2024-12-22",
      customerName: "王小红",
      status: "待确认",
      totalPrice: 600,
      guestCount: 2
    }
  }
};

// 预定详情接口
app.get('/api/reservations/:id', (req, res) => {
  const reservationId = req.params.id;
  const reservation = reservationsData[reservationId];
  
  if (reservation) {
    console.log(`获取预定信息: ID ${reservationId}`);
    res.json(reservation);
  } else {
    res.status(404).json({
      error: '预定信息未找到',
      message: `预定 ID ${reservationId} 不存在`
    });
  }
});

// 获取所有预定
app.get('/api/reservations', (req, res) => {
  console.log('获取所有预定信息');
  res.json({
    data: Object.keys(reservationsData).map(id => ({
      id,
      ...reservationsData[id].data
    }))
  });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`🚀 API 服务器运行在 http://localhost:${PORT}`);
  console.log(`📋 可用的接口:`);
  console.log(`   GET http://localhost:${PORT}/api/reservations/101`);
  console.log(`   GET http://localhost:${PORT}/api/reservations/102`);
  console.log(`   GET http://localhost:${PORT}/api/reservations`);
});