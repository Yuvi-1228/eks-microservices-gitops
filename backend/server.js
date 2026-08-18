const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check endpoint (Kubernetes Probes ke liye)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date() });
});

// Main API endpoint
app.get('/api/data', (req, res) => {
  res.json({
    message: "Hello from Microservices Backend!",
    service: "backend-api",
    version: "v1.0.0",
    podName: process.env.HOSTNAME || "local"
  });
});

app.listen(PORT, () => {
  console.log(`Backend service running on port ${PORT}`);
});
