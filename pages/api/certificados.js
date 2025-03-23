import connectDB from "../../lib/db";
import Certificado from "../../models/certificado";
import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false, // Desativa o bodyParser padrão para usar Formidable
  },
};

export default async function handler(req, res) {
  await connectDB(); // Conectar ao MongoDB

  if (req.method === "GET") {
    try {
      const certificados = await Certificado.find();
      return res.status(200).json(certificados);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar certificados" });
    }
  }

  if (req.method === "POST") {
    const form = new IncomingForm({ multiples: false });

    form.uploadDir = path.join(process.cwd(), "public/uploads");
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Erro ao processar o formulário:", err);
        return res.status(500).json({ error: "Erro no upload do arquivo" });
      }

      const { name } = fields;
      const file = files.file[0]; // Pega o arquivo enviado

      if (!file || !name) {
        return res.status(400).json({ error: "Nome e arquivo são obrigatórios!" });
      }

      // Define o caminho final do arquivo
      const newFilePath = path.join("public/uploads", file.newFilename);
      fs.renameSync(file.filepath, newFilePath);

      try {
        // Salva no MongoDB
        const novoCertificado = new Certificado({
          name: name[0],
          file: `/uploads/${file.newFilename}`,
        });

        await novoCertificado.save();
        return res.status(201).json({ message: "Certificado adicionado com sucesso!" });
      } catch (error) {
        return res.status(500).json({ error: "Erro ao salvar no banco de dados" });
      }
    });
  } else {
    return res.status(405).json({ error: "Método não permitido" });
  }
}
