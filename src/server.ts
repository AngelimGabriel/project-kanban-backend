import app from './app';

import { AppDataSource } from './database/data-source';

const PORT = 3000;
AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor Express rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro durante a inicialização do Data Source:', error);
    process.exit(1);
  });
