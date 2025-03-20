import fs from 'fs';
import path from 'path';
import { IncomingForm } from 'formidable';
import db from '../../lib/db';

export const config = {
  api: {
    bodyParser: false, // Importante para usar formidable
  },
};

export default function handler(req, res) {
  if (req.method === 'GET') {
    const certificados = db.prepare('SELECT * FROM certificados').all();
    return res.status(200).json(certificados);
  }

  if (req.method === 'POST') {
    const form = new IncomingForm({ multiples: false });

    form.uploadDir = path.join(process.cwd(), 'public/uploads');
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error('Erro ao processar o formulário:', err);
        return res.status(500).json({ error: 'Erro no upload do arquivo' });
      }

      const { name } = fields;
      const file = files.file[0]; // Pega o arquivo enviado

      if (!file || !name) {
        return res.status(400).json({ error: 'Nome e arquivo são obrigatórios!' });
      }

      // Define o caminho final do arquivo
      const newFilePath = path.join('public/uploads', file.newFilename);
      fs.renameSync(file.filepath, newFilePath);

      // Salva no banco de dados
      const stmt = db.prepare('INSERT INTO certificados (name, file) VALUES (?, ?)');
      stmt.run(name[0], `/uploads/${file.newFilename}`);

      return res.status(201).json({ message: 'Certificado adicionado com sucesso!' });
    });
  } else {
    return res.status(405).json({ error: 'Método não permitido' });
  }
}