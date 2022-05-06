import express from 'express';
import { prisma } from './prisma';

const app = express();
app.use(express.json());

// GET = Buscar informações
// POST = Cadastrar informações
// PUT = Atualizar informações de uma entidade
// PATCH = Atualizar uma informação única de uma entidade
// DELETE = Deletar informações

app.post('/feedbacks', async (request, response) =>{

  const { type, comment, screenshot } = request.body;

  const feedback = await prisma.feedback.create({
    data: {
      type: type,
      comment: comment,
      screenshot: screenshot,

      //Variação short sintax. Quando a chave tem o mesmo valor da propriedade, não é necessário colocar o nome da propriedade. Pode ser usado da maneira abaixo.
      // type,
      // comment,
      // screenshot,
    }
  });

  return response.status(201).json({data: feedback});
});

app.listen(3333, () => {
  console.log('HTTP server running!');
});