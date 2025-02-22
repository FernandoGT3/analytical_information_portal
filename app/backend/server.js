const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const NodeCache = require('node-cache');

const app = express();
const port = process.env.PORT || 3001;

// Configuração do cache com TTL de 60 segundos
const cache = new NodeCache({ stdTTL: 60 });

app.use(cors());
app.use(bodyParser.json());

// Endpoint de autenticação (exemplo simples – para produção, implementar SSO ou OAuth)
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // Validação dummy – substitua por lógica real de autenticação
  if (username === 'admin' && password === 'admin') {
    res.json({ token: 'dummy-token', username });
  } else {
    res.status(401).json({ error: 'Usuário ou senha inválidos' });
  }
});

// Proxy para requisições ao GeoServer com cache
app.get('/api/geoserver/*', async (req, res) => {
  const geoServerUrl = 'http://geoserver:8080/geoserver'; // URL do container GeoServer
  const cacheKey = req.originalUrl;

  if (cache.has(cacheKey)) {
    return res.json(cache.get(cacheKey));
  }

  try {
    // Reconstruir a URL para repassar a consulta ao GeoServer
    const queryParams = new URLSearchParams(req.query);
    const response = await fetch(
      `${geoServerUrl}${req.path.replace('/api/geoserver', '')}?${queryParams}`
    );
    const data = await response.json();
    cache.set(cacheKey, data);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao acessar o GeoServer', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor Rodando na Porta ${port}........`);
});
